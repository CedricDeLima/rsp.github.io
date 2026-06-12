import { db } from './supabaseClient.js';

export async function getResponses(eventId) {
  const { data, error } = await db
    .from('FindRISC_Form_Responses')
    .select('*')
    .eq('event_id', eventId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function insertResponse(payload) {
  const { error } = await db
    .from('FindRISC_Form_Responses')
    .insert([payload]);

  if (error) throw error;
}

