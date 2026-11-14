/*
  Only used for the public GitHub Pages copy of the site (see next.config.ts).
  That copy lives in a sub-folder, e.g. /ladakh-moto-agency/, so every photo
  address needs the folder name in front of it.
*/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (!src.startsWith('/')) return src;
  return `${basePath}${src}?w=${width}`;
}
