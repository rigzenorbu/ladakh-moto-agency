/*
  THE RIDES.

  To add a ride: copy one whole block from "{" to "}," and change the text.
  To add a day:  copy one block inside "days" and change the text.

  You never type the total days, total distance or highest point.
  The site adds them up from the days you list here.

  The altitude sketch is drawn from:
    startAltitude          height of the starting town, in metres
    endAltitude  (per day) height of the place you sleep that night
    waypoints    (per day) passes crossed that day, in the order you cross them

  Photos: each ride takes a list. The first one is shown large.
  Put the file in  public/photos/  and add a block like
    { src: '/photos/my-photo.jpg' },
  Add  caption: 'Camp at Sarchu.'  inside the block if you want words on it.
  An empty list  photos: []  shows no photos.
*/

import type { SitePhoto } from './types';

export interface Waypoint {
  name: string;
  altitude: number; // metres
}

export interface ItineraryDay {
  from: string;
  to: string;
  distanceKm: number;
  endAltitude: number; // metres, where the day ends
  waypoints?: Waypoint[]; // passes crossed during the day
  highlight: string; // one short line
  description: string;
}

export interface Tour {
  id: string; // short, unique, no spaces
  title: string;
  summary: string;
  startAltitude: number; // metres
  priceFrom: number; // rupees per rider, 0 hides the price
  season: string;
  photos: SitePhoto[]; // first one is shown large
  captainNote: string; // the handwritten tip, or '' for none
  days: ItineraryDay[];
}

export const toursData: Tour[] = [
  {
    id: 'manali-leh',
    title: 'Manali to Leh, the high road',
    summary:
      'The classic way in. Three days and five passes, from pine forest to bare rock, ending in Leh.',
    startAltitude: 2050,
    priceFrom: 38000,
    season: 'Mid June to September',
    photos: [
      { src: '/photos/valley-road.jpg' },
      { src: '/photos/rider-road-sign.jpg' },
      { src: '/photos/stupa.jpg' },
    ],
    captainNote:
      'Fill up at Tandi. It is the last petrol pump for 365 km.',
    days: [
      {
        from: 'Manali',
        to: 'Jispa',
        distanceKm: 140,
        endAltitude: 3200,
        waypoints: [{ name: 'Atal Tunnel', altitude: 3100 }],
        highlight: 'Through the Atal Tunnel into Lahaul',
        description:
          'An easy first day. The tunnel takes you under the Pir Panjal and out into the Chandra valley. Lunch in Keylong, then a short run to the river camp at Jispa.',
      },
      {
        from: 'Jispa',
        to: 'Sarchu',
        distanceKm: 120,
        endAltitude: 4290,
        waypoints: [{ name: 'Baralacha La', altitude: 4850 }],
        highlight: 'Your first high pass',
        description:
          'The road climbs past Suraj Tal to Baralacha La, then drops onto the windy plain at Sarchu, right on the Himachal and Ladakh border. It is a cold night in tents.',
      },
      {
        from: 'Sarchu',
        to: 'Leh',
        distanceKm: 250,
        endAltitude: 3500,
        waypoints: [
          { name: 'Nakee La', altitude: 4740 },
          { name: 'Lachulung La', altitude: 5059 },
          { name: 'Tanglang La', altitude: 5328 },
        ],
        highlight: 'The long one',
        description:
          'Up the 21 hairpins of the Gata Loops, over two passes to Pang, then flat out across the More Plains. Tanglang La is the last climb before the road falls to the Indus and into Leh.',
      },
    ],
  },
  {
    id: 'nubra-pangong',
    title: 'Nubra and Pangong loop',
    summary:
      'Out of Leh and back in three days: sand dunes in Nubra, the rough Shyok track, and a night beside Pangong lake.',
    startAltitude: 3500,
    priceFrom: 29000,
    season: 'June to September',
    photos: [
      { src: '/photos/pangong-reflection.jpg' },
      { src: '/photos/nubra-dunes.jpg' },
      { src: '/photos/tangtse-valley.jpg' },
    ],
    captainNote:
      'The Shyok road has water crossings after noon. We leave Nubra by seven.',
    days: [
      {
        from: 'Leh',
        to: 'Hunder',
        distanceKm: 160,
        endAltitude: 3050,
        waypoints: [{ name: 'Khardung La', altitude: 5359 }],
        highlight: 'Over Khardung La into Nubra',
        description:
          'Forty kilometres of climbing straight out of town. Tea at the top, then a long descent to the Shyok river and the dunes at Hunder, where the double-humped camels are.',
      },
      {
        from: 'Hunder',
        to: 'Pangong Tso',
        distanceKm: 220,
        endAltitude: 4225,
        highlight: 'The Shyok river track',
        description:
          'The hardest riding of the trip: broken tarmac, loose stone and a few stream crossings along the river. By late afternoon the lake comes into view, and it really is that blue.',
      },
      {
        from: 'Pangong Tso',
        to: 'Leh',
        distanceKm: 160,
        endAltitude: 3500,
        waypoints: [{ name: 'Chang La', altitude: 5360 }],
        highlight: 'Home over Chang La',
        description:
          'Sunrise on the lake, then back through Tangtse and up Chang La. Past the monastery at Thiksey and you are in Leh in time for dinner.',
      },
    ],
  },
  {
    id: 'srinagar-leh',
    title: 'Srinagar to Leh, the old trade road',
    summary:
      'The gentler way up. From the Kashmir valley over Zoji La, through Kargil and the moonland at Lamayuru, then down the Indus to Leh.',
    startAltitude: 1585,
    priceFrom: 34000,
    season: 'June to October',
    photos: [
      { src: '/photos/basgo.jpg' },
      { src: '/photos/moonland.jpg' },
      { src: '/photos/indus-autumn.jpg' },
    ],
    captainNote:
      'Zoji La runs one way at a time. We are at the gate before six.',
    days: [
      {
        from: 'Srinagar',
        to: 'Kargil',
        distanceKm: 205,
        endAltitude: 2676,
        waypoints: [{ name: 'Zoji La', altitude: 3528 }],
        highlight: 'Out of Kashmir over Zoji La',
        description:
          'Green meadows to Sonamarg, then the narrow dirt climb over Zoji La. On the far side the land turns dry and brown. Tea in Dras, one of the coldest villages in India, and on to Kargil.',
      },
      {
        from: 'Kargil',
        to: 'Lamayuru',
        distanceKm: 105,
        endAltitude: 3510,
        waypoints: [
          { name: 'Namika La', altitude: 3700 },
          { name: 'Fotu La', altitude: 4108 },
        ],
        highlight: 'Two passes and the moonland',
        description:
          'A short day on good tarmac. Stop at the rock-cut Buddha in Mulbekh, cross Namika La and Fotu La, and roll down to the pale, crumpled hills around Lamayuru monastery.',
      },
      {
        from: 'Lamayuru',
        to: 'Leh',
        distanceKm: 115,
        endAltitude: 3500,
        highlight: 'Down the Indus',
        description:
          'An easy last run beside the river, past the old fort at Basgo and the meeting of the Indus and Zanskar at Nimmu. You are in Leh by lunch.',
      },
    ],
  },
  {
    id: 'tso-moriri',
    title: 'Tso Moriri and the Changthang lakes',
    summary:
      'The quiet side of Ladakh. Three days across the high plateau, with nomad camps, wild asses and two lakes that few riders reach.',
    startAltitude: 3500,
    priceFrom: 31000,
    season: 'June to September',
    photos: [
      { src: '/photos/kyagar-tso.jpg' },
      { src: '/photos/tso-moriri.jpg' },
      { src: '/photos/tso-moriri-shore.jpg' },
    ],
    captainNote:
      'You sleep above 4,500 m twice on this one. Do the Nubra loop first if you can.',
    days: [
      {
        from: 'Leh',
        to: 'Karzok',
        distanceKm: 220,
        endAltitude: 4530,
        highlight: 'Up the Indus to Tso Moriri',
        description:
          'Follow the Indus upstream past the hot springs at Chumathang, cross the river at Mahe and climb past little Kyagar Tso. Karzok village sits right on the shore of Tso Moriri.',
      },
      {
        from: 'Karzok',
        to: 'Tso Kar',
        distanceKm: 80,
        endAltitude: 4530,
        waypoints: [{ name: 'Polokongka La', altitude: 4970 }],
        highlight: 'Across the plateau',
        description:
          'A short, slow day on sand and gravel. Past the sulphur springs at Puga and over Polokongka La to the white salt shore of Tso Kar. Watch for kiang, the Tibetan wild ass.',
      },
      {
        from: 'Tso Kar',
        to: 'Leh',
        distanceKm: 150,
        endAltitude: 3500,
        waypoints: [{ name: 'Tanglang La', altitude: 5328 }],
        highlight: 'Back over Tanglang La',
        description:
          'Join the Manali road and climb Tanglang La, the highest point of the trip. Then it is all downhill through Rumtse and Upshi to Leh.',
      },
    ],
  },
];

/* ---- Totals, worked out from the days above. Nothing to edit below. ---- */

export function tourTotals(tour: Tour) {
  let highest = { name: tour.days[0]?.from ?? '', altitude: tour.startAltitude };
  let distanceKm = 0;
  for (const day of tour.days) {
    distanceKm += day.distanceKm;
    const stops = [...(day.waypoints ?? []), { name: day.to, altitude: day.endAltitude }];
    for (const stop of stops) {
      if (stop.altitude > highest.altitude) highest = stop;
    }
  }
  return { days: tour.days.length, distanceKm, highest };
}

export const formatNumber = (n: number) => n.toLocaleString('en-IN');
