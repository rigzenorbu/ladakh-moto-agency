/*
  EVERYTHING WRITTEN ON THE SITE (except rides and bikes) LIVES HERE.

  Change the text between the quotes, save, and the page updates.
  Rides are in  src/data/tours.ts
  Bikes are in  src/data/fleet.ts

  Photos: drop the file into  public/photos/  and write its path as  src,
  for example  src: '/photos/pangong.jpg'
  Leave src as ''  and the site simply shows nothing in that spot.
  Nothing is printed on the photos. A photo that has a  credit  line is
  listed under "Photo credits" at the very bottom of the page.
  For your own photos, delete the credit and creditUrl lines.
*/

import type { SitePhoto } from './types';

export const siteConfig = {
  agencyName: 'Ladakh MotoExpeditions',

  // Shown in the browser tab and in Google results.
  pageTitle: 'Ladakh MotoExpeditions | Motorcycle trips out of Leh',
  pageDescription:
    'Small-group motorcycle trips and bike hire in Ladakh, led by local riders from Leh.',

  basedIn: 'Leh, Ladakh',

  // The months you run trips. They also fill the "month" menu in the form.
  season: {
    text: 'June to September',
    months: ['June', 'July', 'August', 'September'],
  },

  hero: {
    headline: 'Ride Ladakh with the people who live here.',
    intro:
      'Small-group motorcycle trips out of Leh, led by local riders, with a mechanic and a backup jeep behind you the whole way.',
    // The wide photo at the top. Set src to '' to show the mountain drawing instead.
    photo: {
      src: '/photos/hero-riders.jpg',
      focus: '58% 50%', // on phones
      focusWide: '0% 60%', // on wide screens
      credit: 'Top photo: lensnmatter, CC BY 2.0',
      creditUrl:
        'https://commons.wikimedia.org/wiki/File:A_tribute_to_the_%27Royal_Enfield_Himalayan%27.jpg',
    } as SitePhoto,
    // The roadside milestone in the corner of the photo. Set place to '' to hide it.
    milestone: { place: 'Khardung La', distance: '39 km' },
    // The handwritten label on the drawing (only seen when there is no photo).
    peakLabel: 'Khardung La, 5,359 m',
  },

  // The three short lines under the mountains.
  promises: [
    {
      title: 'Eight riders at most',
      text: 'One road captain in front, one sweep rider at the back.',
    },
    {
      title: 'A jeep behind you',
      text: 'It carries your luggage, a mechanic, spares and oxygen.',
    },
    {
      title: 'Two nights in Leh first',
      text: 'Nobody rides a high pass before their body is ready for it.',
    },
  ],

  rides: {
    heading: 'The rides',
    intro:
      'Each trip below is laid out day by day, with the distance and the climb, so you know what you are signing up for.',
  },

  bikes: {
    heading: 'Bikes on hire',
    intro:
      'Riding on your own? Take one of ours. Every bike is serviced in our own workshop before it goes out.',
    note: 'The daily rate covers a helmet, saddle bags and a basic tool kit. Fuel and the security deposit are extra.',
  },

  films: {
    heading: 'Films from the road',
    intro: 'Shot by our riders on past trips. Nothing staged.',
  },

  // The wide landscape strip above the enquiry form. Set src to '' to hide it.
  panorama: {
    src: '/photos/pangong-wide.jpg',
  } as SitePhoto,

  contact: {
    heading: 'Ask us about a ride',
    intro:
      'Tell us roughly what you have in mind. The message goes to our road captain on WhatsApp, and you will usually hear back the same day.',
    phone: '+91 98765 43210',
    // WhatsApp number: country code + number, digits only, no + or spaces.
    whatsappNumber: '919876543210',
    email: 'ride@ladakhmoto.com',
    address: 'Fort Road, Leh, Ladakh 194101',
  },

  /*
    YouTube films. The id is the part after "v=" in the video link:
    https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  'dQw4w9WgXcQ'
    Remove every film from the list and the whole section disappears.
  */
  videos: [
    {
      title: 'Over the high passes, Manali to Leh',
      youtubeId: 'dQw4w9WgXcQ', // placeholder, replace with your own
    },
    {
      title: 'Off the tarmac in Zanskar',
      youtubeId: 'dQw4w9WgXcQ', // placeholder, replace with your own
    },
  ],

  footerLine: 'Julley. See you on the road.',
};
