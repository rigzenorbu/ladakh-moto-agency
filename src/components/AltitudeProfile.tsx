import { formatNumber, type Tour } from '@/data/tours';

/*
  Draws the climb of a ride as a sketch, from the altitudes in tours.ts.
  Night halts sit on the baseline with a yellow dot; passes are labelled on top.
*/

const W = 1000;
const H = 330;
const LEFT = 26;
const RIGHT = 26;
const TOP = 66;
const BOTTOM = 72;

type Point = { km: number; m: number; name: string; halt: boolean };

export default function AltitudeProfile({ tour }: { tour: Tour }) {
  const points: Point[] = [
    { km: 0, m: tour.startAltitude, name: tour.days[0].from, halt: true },
  ];
  let km = 0;
  for (const day of tour.days) {
    const passes = day.waypoints ?? [];
    const step = day.distanceKm / (passes.length + 1);
    passes.forEach((pass, i) => {
      points.push({ km: km + step * (i + 1), m: pass.altitude, name: pass.name, halt: false });
    });
    km += day.distanceKm;
    points.push({ km, m: day.endAltitude, name: day.to, halt: true });
  }

  const heights = points.map((p) => p.m);
  const low = Math.min(...heights) - 500;
  const high = Math.max(...heights) + 100;
  const round = (n: number) => Math.round(n * 10) / 10;
  const x = (k: number) => round(LEFT + (k / km) * (W - LEFT - RIGHT));
  const y = (m: number) => round(TOP + (1 - (m - low) / (high - low)) * (H - TOP - BOTTOM));
  const base = H - BOTTOM;

  let line = `M${x(points[0].km)} ${y(points[0].m)}`;
  for (let i = 1; i < points.length; i++) {
    const x0 = x(points[i - 1].km);
    const x1 = x(points[i].km);
    const mid = round((x0 + x1) / 2);
    line += ` C${mid} ${y(points[i - 1].m)} ${mid} ${y(points[i].m)} ${x1} ${y(points[i].m)}`;
  }
  const area = `${line} L${x(km)} ${base} L${x(0)} ${base}Z`;
  const filterId = `wobble-${tour.id}`;

  return (
    <figure>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="block w-full min-w-[680px]"
          role="img"
          aria-label={`Altitude sketch for ${tour.title}`}
        >
          <defs>
            <filter id={filterId}>
              <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="4" />
              <feDisplacementMap in="SourceGraphic" scale="4" />
            </filter>
          </defs>

          <g filter={`url(#${filterId})`}>
            <path d={area} className="fill-ridge-far" />
            <path d={line} className="fill-none stroke-ink" strokeWidth="3" strokeLinejoin="round" />
            <line x1={LEFT} y1={base} x2={W - RIGHT} y2={base} className="stroke-ink" strokeWidth="2" />
          </g>

          {points.map((p, i) => {
            const px = x(p.km);
            const py = y(p.m);
            const anchor = i === 0 ? 'start' : i === points.length - 1 ? 'end' : 'middle';
            return p.halt ? (
              <g key={i}>
                <line
                  x1={px} y1={py} x2={px} y2={base}
                  className="stroke-ink/40" strokeWidth="1.5" strokeDasharray="3 5"
                />
                <circle cx={px} cy={py} r="7" className="fill-milestone stroke-ink" strokeWidth="2" />
                <text x={px} y={base + 26} textAnchor={anchor} className="fill-ink font-display font-semibold" fontSize="19">
                  {p.name}
                </text>
                <text x={px} y={base + 46} textAnchor={anchor} className="fill-mute font-display" fontSize="16">
                  {formatNumber(p.m)} m
                </text>
              </g>
            ) : (
              <g key={i}>
                <circle cx={px} cy={py} r="4" className="fill-ink" />
                <text x={px} y={py - 30} textAnchor="middle" className="fill-ink font-display font-semibold" fontSize="17">
                  {p.name}
                </text>
                <text x={px} y={py - 13} textAnchor="middle" className="fill-mute font-display" fontSize="15">
                  {formatNumber(p.m)} m
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-1 font-hand text-base text-robe">
        A rough sketch of the climb, not to scale.
      </figcaption>
    </figure>
  );
}
