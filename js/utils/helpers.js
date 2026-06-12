export function toSlug(name) {
  return name
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

export function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g,'&')
    .replace(/</g,'<')
    .replace(/>/g,'>')
    .replace(/"/g,'"');
}

