import type { CSSProperties } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';

export default function Hero() {
  const { hero, promises } = siteConfig;

  return (
    <section>
      {hero.photo.src ? <PhotoHero /> : <DrawingHero />}

      <div className="bg-ink text-wash">
        <ul className="mx-auto grid max-w-6xl gap-x-10 gap-y-6 px-5 py-10 md:grid-cols-3 md:px-8">
          {promises.map((promise) => (
            <li key={promise.title}>
              <p className="font-display text-2xl font-semibold leading-tight text-milestone">
                {promise.title}
              </p>
              <p className="mt-1 text-base leading-snug text-wash/80">{promise.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Buttons({ light }: { light: boolean }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
      <a
        href="#rides"
        className={`rounded-[4px] border-2 bg-milestone px-6 py-3 font-display text-xl font-semibold leading-none text-ink ${
          light ? 'border-milestone hover:bg-wash hover:border-wash' : 'border-ink hover:bg-ink hover:text-wash'
        }`}
      >
        See the rides
      </a>
      <a
        href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
        className={`font-display text-xl font-medium underline decoration-2 underline-offset-4 ${
          light ? 'hover:text-milestone' : 'hover:text-lake'
        }`}
      >
        Ask on WhatsApp
      </a>
    </div>
  );
}

/*
  Wide screens: the photo fills the whole top, headline on the left, milestone in the corner.
  Phones: the photo sits on top and the headline follows underneath.
*/
function PhotoHero() {
  const { hero } = siteConfig;
  const focus = {
    '--focus': hero.photo.focus ?? '50% 50%',
    '--focus-wide': hero.photo.focusWide ?? hero.photo.focus ?? '50% 50%',
  } as CSSProperties;

  return (
    <div className="relative isolate overflow-hidden bg-ink text-wash md:flex md:min-h-[52rem] md:flex-col md:justify-end">
      <div className="relative h-[26rem] md:absolute md:inset-0 md:-z-20 md:h-auto">
        <Image
          src={hero.photo.src}
          alt=""
          fill
          priority
          sizes="100vw"
          style={focus}
          className="object-cover object-[var(--focus)] md:object-[var(--focus-wide)]"
        />
        {/* phones: darken the top for the menu and fade the bottom into the dark panel */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent via-40% to-ink md:hidden" />
      </div>
      {/* wide screens: darken the left for the words, the top for the menu, the bottom edge */}
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-ink/85 via-ink/35 via-45% to-transparent to-70% md:block" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-b from-ink/50 via-transparent via-25% to-transparent md:block" />
      <div className="absolute inset-x-0 bottom-0 -z-10 hidden h-40 bg-gradient-to-t from-ink to-transparent md:block" />

      <div className="relative mx-auto -mt-12 flex w-full max-w-6xl items-end justify-between gap-10 px-5 pb-12 md:mt-0 md:px-8 md:pb-16 md:pt-40">
        <div>
          <h1 className="max-w-[36rem] font-display text-6xl font-bold leading-[0.92] tracking-tight md:text-7xl lg:text-[5.5rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-md text-xl leading-relaxed text-wash/90">{hero.intro}</p>
          <Buttons light />
        </div>

        {hero.milestone.place && (
          <div
            className="hidden w-40 shrink-0 rotate-2 overflow-hidden rounded-t-[5rem] border-[3px] border-ink bg-wash text-center font-display leading-none text-ink shadow-[6px_8px_0_rgba(20,35,59,0.55)] lg:block"
            aria-hidden="true"
          >
            <div className="bg-milestone px-3 pb-3 pt-10">
              <span className="block text-3xl font-bold uppercase tracking-wide">{hero.milestone.place}</span>
            </div>
            <div className="border-t-[3px] border-ink px-3 py-4">
              <span className="block text-5xl font-bold">{hero.milestone.distance}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* Shown when there is no hero photo: the headline above a mountain drawing. */
function DrawingHero() {
  const { hero } = siteConfig;

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-24">
        <h1 className="max-w-4xl font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-xl leading-relaxed text-mute">{hero.intro}</p>
        <Buttons light={false} />
      </div>

      <svg
        viewBox="0 0 1440 360"
        preserveAspectRatio="xMidYMax slice"
        className="block h-56 w-full md:h-[22rem]"
        role="img"
        aria-label="Drawing of layered mountain ridges"
      >
        <defs>
          <filter id="ridge-wobble" x="-2%" y="-10%" width="104%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="9" />
          </filter>
        </defs>

        <g filter="url(#ridge-wobble)">
          <path
            className="fill-ridge-far"
            d="M-20 230 L90 190 L170 215 L260 150 L330 185 L420 120 L500 170 L580 140 L660 190 L760 90 L840 150 L930 125 L1010 180 L1100 135 L1190 175 L1280 110 L1360 160 L1460 140 V380 H-20Z"
          />
          <path className="fill-wash" d="M760 90 L734 116 L748 111 L759 123 L771 110 L788 119Z" />
          <path className="fill-wash" d="M420 120 L400 142 L412 138 L421 148 L432 137 L444 143Z" />
          <path className="fill-wash" d="M1280 110 L1259 133 L1271 129 L1281 139 L1292 128 L1306 134Z" />
          <path
            className="fill-ridge-mid"
            d="M-20 270 L110 235 L200 260 L300 215 L390 250 L480 205 L570 245 L680 220 L790 260 L900 210 L1000 250 L1110 225 L1220 262 L1330 222 L1460 250 V380 H-20Z"
          />
          <path
            className="fill-ink"
            d="M-20 320 L140 290 L280 312 L420 280 L560 310 L720 288 L880 316 L1040 284 L1200 312 L1340 290 L1460 305 V380 H-20Z"
          />
        </g>

        <path d="M842 58 C820 62 800 70 782 86" className="fill-none stroke-robe" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M781 74 L780 88 L794 85"
          className="fill-none stroke-robe"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="850" y="62" className="fill-robe font-hand" fontSize="24" transform="rotate(-3 850 62)">
          {hero.peakLabel}
        </text>
      </svg>
    </>
  );
}
