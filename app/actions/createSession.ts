'use server';
import { createAdminClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

type CreateSessionData = {
  email: string;
  password: string;
};

async function createSession({ email, password }: CreateSessionData) {
  if (!email || !password) {
    return {
      error: 'Please fill out all fields',
    };
  }

  // Get account instance
  const { account } = await createAdminClient();

  try {
    // Generate session
    const session = await account.createEmailPasswordSession(email, password);

    console.log('Session Object:', session); // Debugging

    // Check if session secret exists
    if (!session.secret) {
      console.error('Session secret is missing');
      return {
        error: 'Session secret is missing. Please check the authentication setup.',
      };
    }

    // Convert `session.expire` to a number if it’s not already
    const expireTime = typeof session.expire === 'string' ? parseInt(session.expire, 10) : session.expire;

    console.log("Expire Time:", expireTime);

    if (isNaN(expireTime)) {
      console.error('Invalid session expiration time:', session.expire);
      return {
        error: 'Failed to process session expiration time.',
      };
    }

    // Ensure cookies are awaited
    const cookieStore = await cookies();

    // Set the session cookie with the session secret
    cookieStore.set('appwrite-session', session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      expires: new Date(session.expire), // Session expiration
      path: '/profile',
    });

    console.log('Session cookie set successfully');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Authentication Error:', error);
    return {
      error: 'Invalid Credentials or Session Creation Failed.',
    };
  }
}

export default createSession;
