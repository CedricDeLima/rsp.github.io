export function computeScore(r) {
  const ageMap  = {'<45':0,'45-54':2,'55-64':3,'≥65':4};
  const imcMap  = {'<25':0,'25-30':1,'>30':3};
  const tailleMap = {'low':0,'mid':3,'high':4};
  const anteMap = {'Aucun':0,'Famille éloignée':3,'Famille proche':5};

  let s = 0;

  s += ageMap[r.age] ?? 0;
  s += imcMap[r.IMC] ?? 0;
  s += tailleMap[r.tour_taille] ?? 0;

  if (!r.Act_physique) s += 2;
  if (!r.fruits_legumes) s += 1;
  if (r.trait_hypertenseur) s += 2;
  if (r.glycemie) s += 5;

  s += anteMap[r['antécédents']] ?? 0;

  return s;
}

