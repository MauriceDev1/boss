'use server';

import { createAdminClient } from '@/config/appwrite';
import { ID } from 'node-appwrite';

// Define a type for the form data
type CreateUserData = {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  confirmPassword: string;
};

async function createUser({ name, email, password, cellphone, confirmPassword }: CreateUserData) {
  if (!email || !name || !password) {
    return { error: 'Please fill in all fields' };
  }

  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters long' };
  }

  if (cellphone.length < 8) {
    return { error: 'Cellphone number must be at least 8 digits long' };
  }

  if (password !== confirmPassword) {
    return { error: 'Passwords do not match' };
  }

  const { account } = await createAdminClient();

  try {
    await account.create(ID.unique(), email, password, name);
    return { success: true };
  } catch (error) {
    console.log('Registration Error: ', error);
    return { error: 'Could not register user' };
  }
}

export default createUser;
