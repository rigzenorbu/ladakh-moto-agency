/*
  THE BIKES ON HIRE.

  To add a bike: copy one whole block from "{" to "}," and change the text.
  To remove one: delete its block.
  Photo: put the file in  public/photos/  and write e.g.  photo: '/photos/himalayan.jpg'
  Leave photo as ''  and the bike shows without a picture.
  photoFocus says which part of the picture to keep when it is cropped
  ('50% 50%' is the middle, '50% 90%' is near the bottom).
  photoCredit / photoCreditUrl are only for photos that are not yours.
  Delete those two lines when you put in your own photo.
*/

export interface Bike {
  id: string; // short, unique, no spaces
  name: string;
  goodFor: string; // a few words
  description: string;
  engineCc: number;
  ratePerDay: number; // rupees
  photo: string;
  photoFocus?: string;
  photoCredit?: string;
  photoCreditUrl?: string;
}

export const fleetData: Bike[] = [
  {
    id: 'himalayan-450',
    name: 'Royal Enfield Himalayan 450',
    goodFor: 'Rough roads and water crossings',
    description:
      'Built for exactly these roads. Liquid cooled, long suspension, and enough ground clearance for the Shyok track.',
    engineCc: 452,
    ratePerDay: 2500,
    photo: '/photos/bike-himalayan-450.jpg',
    photoCredit: 'Himalayan 450: MotorideSA, CC BY-SA 4.0',
    photoCreditUrl:
      'https://commons.wikimedia.org/wiki/File:Royal_Enfield_Himalayan_450_Mana_Black.jpg',
  },
  {
    id: 'scram-411',
    name: 'Royal Enfield Scram 411',
    goodFor: 'Shorter riders, mostly tarmac',
    description:
      'Lower and lighter than the Himalayan, with the same easy pull from low revs. Friendly on tight hairpins.',
    engineCc: 411,
    ratePerDay: 2000,
    photo: '/photos/bike-scram-411.jpg',
    photoFocus: '50% 88%',
  },
  {
    id: 'ktm-adv-390',
    name: 'KTM 390 Adventure',
    goodFor: 'Fast tarmac, experienced riders',
    description:
      'The quick one. Cornering ABS and traction control, happiest on the smooth highway stretches.',
    engineCc: 373,
    ratePerDay: 3000,
    photo: '/photos/bike-ktm-390-adventure.jpg',
    photoFocus: '50% 60%',
    photoCredit: 'KTM 390 Adventure: 802xr, CC BY 4.0',
    photoCreditUrl: 'https://commons.wikimedia.org/wiki/File:KTM_390_Adventure_R.jpg',
  },
];
