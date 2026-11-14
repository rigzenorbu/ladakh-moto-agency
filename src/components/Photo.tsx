import Image from 'next/image';
import type { SitePhoto } from '@/data/types';

/* A photo that fills its box. A caption, if there is one, sits on a strip along the bottom. */
export default function Photo({
  photo,
  sizes,
  className = '',
  priority = false,
}: {
  photo: SitePhoto;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`relative overflow-hidden bg-ridge-far ${className}`}>
      <Image
        src={photo.src}
        alt={photo.caption ?? ''}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition: photo.focus ?? '50% 50%' }}
      />
      {photo.caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-ink/70 px-3 py-1.5 text-sm leading-snug text-wash">
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}
