'use server';
import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

async function checkAuth() {
  const cookiesData = await cookies(); // Await the cookies promise
  const sessionCookie = cookiesData.get('appwrite-session'); // Retrieve cookie by name

  if (!sessionCookie) {
    return {
      isAuthenticated: false,
    };
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);
    const user = await account.get();

    return {
      isAuthenticated: true,
      user: {
        id: user.$id,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      isAuthenticated: false,
    };
  }
}

export default checkAuth;
