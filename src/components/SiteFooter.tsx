import { siteConfig } from '@/data/siteConfig';
import { toursData } from '@/data/tours';
import { fleetData } from '@/data/fleet';

/* The five prayer-flag colours, in their traditional order. */
const flagColours = ['#2b6a8c', '#fbfcfa', '#b3262e', '#3d7a4a', '#f4c22b'];

export default function SiteFooter() {
  const { contact } = siteConfig;

  /* Every photo on the site that names a photographer, gathered automatically. */
  const credits = [
    siteConfig.hero.photo,
    siteConfig.panorama,
    ...toursData.flatMap((tour) => tour.photos),
    ...fleetData.map((bike) => ({
      src: bike.photo,
      credit: bike.photoCredit,
      creditUrl: bike.photoCreditUrl,
    })),
  ].filter((photo) => photo.src && photo.credit);

  return (
    <footer className="bg-ink text-wash">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
          <div>
            <div className="flex gap-1" aria-hidden="true">
              {flagColours.map((colour) => (
                <span key={colour} className="h-5 w-5" style={{ background: colour }} />
              ))}
            </div>
            <p className="mt-4 font-display text-3xl font-bold leading-none">{siteConfig.agencyName}</p>
            <p className="mt-2 font-hand text-xl text-milestone">{siteConfig.footerLine}</p>
          </div>
          <address className="text-base not-italic leading-relaxed text-wash/80">
            {contact.address}
            <br />
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-milestone">
              {contact.phone}
            </a>
            <br />
            <a href={`mailto:${contact.email}`} className="hover:text-milestone">
              {contact.email}
            </a>
          </address>
        </div>

        {credits.length > 0 && (
          <details className="mt-10 text-sm text-wash/60">
            <summary className="cursor-pointer">Photo credits</summary>
            <ul className="mt-2 space-y-1">
              {credits.map((photo) => (
                <li key={photo.src}>
                  {photo.creditUrl ? (
                    <a href={photo.creditUrl} className="underline underline-offset-2 hover:text-milestone">
                      {photo.credit}
                    </a>
                  ) : (
                    photo.credit
                  )}
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </footer>
  );
}
