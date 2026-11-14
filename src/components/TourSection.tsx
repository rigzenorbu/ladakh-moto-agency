import { siteConfig } from '@/data/siteConfig';
import { toursData, tourTotals, formatNumber } from '@/data/tours';
import AltitudeProfile from '@/components/AltitudeProfile';
import Photo from '@/components/Photo';

export default function TourSection() {
  return (
    <section id="rides" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl">
        {siteConfig.rides.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-mute">{siteConfig.rides.intro}</p>

      <div className="mt-14 space-y-24">
        {toursData.map((tour) => {
          const totals = tourTotals(tour);
          const facts = [
            { label: 'Days riding', value: String(totals.days) },
            { label: 'Distance', value: `${formatNumber(totals.distanceKm)} km` },
            {
              label: 'Highest point',
              value: `${totals.highest.name}, ${formatNumber(totals.highest.altitude)} m`,
            },
            { label: 'Season', value: tour.season },
            ...(tour.priceFrom > 0
              ? [{ label: 'Per rider, from', value: `₹${formatNumber(tour.priceFrom)}` }]
              : []),
          ];

          return (
            <article key={tour.id} id={tour.id} className="scroll-mt-6 border-t-2 border-ink pt-8">
              <h3 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
                {tour.title}
              </h3>
              <p className="mt-3 max-w-2xl">{tour.summary}</p>

              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm text-mute">{fact.label}</dt>
                    <dd className="font-display text-2xl font-semibold leading-tight">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              {tour.photos.length === 1 && (
                <Photo
                  photo={tour.photos[0]}
                  sizes="(min-width: 1152px) 1088px, 100vw"
                  className="mt-10 aspect-[3/2] rounded-[4px] md:aspect-[21/9]"
                />
              )}

              {tour.photos.length > 1 && (
                <div className="mt-10 grid gap-3 md:grid-cols-3">
                  <Photo
                    photo={tour.photos[0]}
                    sizes="(min-width: 1152px) 720px, (min-width: 768px) 66vw, 100vw"
                    className="aspect-[3/2] rounded-[4px] md:col-span-2 md:aspect-auto md:min-h-[26rem]"
                  />
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                    {tour.photos.slice(1, 3).map((photo) => (
                      <Photo
                        key={photo.src}
                        photo={photo}
                        sizes="(min-width: 1152px) 360px, (min-width: 768px) 33vw, 50vw"
                        className="aspect-[4/3] rounded-[4px] md:aspect-auto"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10">
                <AltitudeProfile tour={tour} />
              </div>

              <ol className="mt-12 space-y-10">
                {tour.days.map((day, index) => (
                  <li key={index} className="flex gap-5 md:gap-8">
                    <Milestone day={index + 1} km={day.distanceKm} />
                    <div className="max-w-2xl">
                      <h4 className="font-display text-3xl font-semibold leading-tight">
                        {day.from} to {day.to}
                      </h4>
                      <p className="mt-1 font-semibold">{day.highlight}</p>
                      <p className="mt-2 text-mute">{day.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {tour.captainNote && (
                <p className="mt-10 max-w-md -rotate-1 font-hand text-2xl leading-snug text-robe md:ml-28">
                  {tour.captainNote}
                </p>
              )}

              <p className="mt-10">
                <a
                  href="#contact"
                  className="font-display text-xl font-medium underline decoration-milestone decoration-[3px] underline-offset-4 hover:text-lake"
                >
                  Ask about this ride
                </a>
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* A roadside kilometre stone: yellow cap, white base, black letters. */
function Milestone({ day, km }: { day: number; km: number }) {
  return (
    <div className="h-fit w-[4.5rem] shrink-0 overflow-hidden rounded-t-[2.25rem] border-2 border-ink bg-wash text-center font-display leading-none">
      <div className="bg-milestone pb-1.5 pt-4">
        <span className="block text-sm font-semibold uppercase tracking-wide">Day</span>
        <span className="block text-4xl font-bold">{day}</span>
      </div>
      <div className="border-t-2 border-ink py-2 text-lg font-semibold">{km} km</div>
    </div>
  );
}
