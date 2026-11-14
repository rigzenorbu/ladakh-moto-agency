import { siteConfig } from '@/data/siteConfig';
import { fleetData } from '@/data/fleet';
import { formatNumber } from '@/data/tours';
import Photo from '@/components/Photo';

export default function FleetSection() {
  return (
    <section id="bikes" className="bg-ink text-wash">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl">
          {siteConfig.bikes.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-wash/75">{siteConfig.bikes.intro}</p>

        <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-3">
          {fleetData.map((bike) => (
            <li key={bike.id} className="flex flex-col">
              {bike.photo && (
                <Photo
                  photo={{ src: bike.photo, focus: bike.photoFocus }}
                  sizes="(min-width: 1152px) 352px, (min-width: 768px) 33vw, 100vw"
                  className="mb-5 aspect-[4/3] rounded-[4px]"
                />
              )}
              <h3 className="font-display text-3xl font-semibold leading-tight">{bike.name}</h3>
              <p className="mt-1 text-base text-milestone">
                {bike.engineCc} cc. {bike.goodFor}.
              </p>
              <p className="mt-2 flex-1 text-base text-wash/75">{bike.description}</p>
              <p className="mt-5 border-t border-wash/25 pt-4 font-display leading-none">
                <span className="text-5xl font-bold text-milestone">₹{formatNumber(bike.ratePerDay)}</span>
                <span className="ml-2 text-xl text-wash/75">a day</span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-base text-wash/75">{siteConfig.bikes.note}</p>
      </div>
    </section>
  );
}
