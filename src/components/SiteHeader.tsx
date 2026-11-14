import { siteConfig } from '@/data/siteConfig';

/* overPhoto: sits on top of the hero photo in light text. */
export default function SiteHeader({ overPhoto = false }: { overPhoto?: boolean }) {
  const links = [
    { href: '#rides', label: 'Rides' },
    { href: '#bikes', label: 'Bikes' },
    ...(siteConfig.videos.length > 0 ? [{ href: '#films', label: 'Films' }] : []),
    { href: '#contact', label: 'Ask us' },
  ];

  return (
    <header className={overPhoto ? 'absolute inset-x-0 top-0 z-20 text-wash' : ''}>
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-5 pt-6 md:px-8">
        <a href="#" className="font-display text-2xl font-bold leading-none tracking-tight">
          {siteConfig.agencyName}
        </a>
        <nav aria-label="Sections">
          <ul className="flex flex-wrap gap-x-6 font-display text-lg font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-milestone"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
