const BASE_URL = import.meta.env.BASE_URL ?? '/';

export const getFullUrl = (path: string): string => {
  return `${BASE_URL}${path}`.replace(/\/{2,}/g, '/'); // Replace multiple slashes with a single slash
};
