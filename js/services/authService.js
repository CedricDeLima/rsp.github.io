import { db } from './supabaseClient.js';

export async function login(email, password) {
  const { data, error } = await db.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data.user;
}

export async function logout() {
  await db.auth.signOut();
}

export async function getUser() {
  const { data } = await db.auth.getUser();
  return data.user;
}

