import { db } from './supabaseClient.js';

export async function getEvents() {
  const { data, error } = await db
    .from('events')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function createEvent(name, userId, slug) {
  const { error } = await db
    .from('events')
    .insert([{ name, user_id: userId, slug }]);

  if (error) throw error;
}

export async function deleteEvent(id) {
  const { error } = await db
    .from('events')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

