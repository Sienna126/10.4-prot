const key = 'flowdesk:10.4-prot:favorites:v1';
const validId = (id: unknown): id is number => Number.isInteger(id) && Number(id) >= 1 && Number(id) <= 12;

export function readFavorites(): number[] {
  const raw = localStorage.getItem(key);
  if (!raw) return [];
  const data: unknown = JSON.parse(raw);
  if (!Array.isArray(data)) throw new Error('收藏数据格式错误');
  return [...new Set(data.filter(validId))];
}

export function setFavorite(id: number, saved: boolean): number[] {
  if (!validId(id)) throw new Error('无效素材');
  const current = readFavorites();
  const next = saved ? [...new Set([...current, id])] : current.filter(value => value !== id);
  localStorage.setItem(key, JSON.stringify(next));
  return next;
}
