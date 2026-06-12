import { insertResponse } from './services/responseService.js';

async function submitForm(payload) {
  try {
    await insertResponse(payload);
    alert("✅ Réponse enregistrée");
  } catch (e) {
    console.error(e);
    alert("❌ Erreur");
  }
}

window.submitForm = submitForm;

