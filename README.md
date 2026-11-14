# Ladakh MotoExpeditions website

One page: intro, rides, bikes on hire, films, and an enquiry form that opens WhatsApp.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. The page refreshes by itself when you save a file.

## Changing what the site says

You only ever need three files. Each has instructions at the top.

| To change | Open |
|---|---|
| Agency name, headline, phone, WhatsApp, email, address, films, any heading | `src/data/siteConfig.ts` |
| Rides: titles, days, distances, altitudes, prices, the handwritten tip | `src/data/tours.ts` |
| Bikes: names, descriptions, daily rates | `src/data/fleet.ts` |

Total days, total distance and the highest point of each ride are added up
automatically from the days you list, and the altitude sketch redraws itself.

## Adding or swapping photos

1. Put your picture in `public/photos/`.
2. Write its path as `src`, for example `src: '/photos/pangong.jpg'`.

| Photo | Where |
|---|---|
| Top of the page | `hero.photo` in `siteConfig.ts` (set `src: ''` to show the mountain drawing) |
| Wide strip above the form | `panorama` in `siteConfig.ts` |
| Each ride (a list, first one is large) | `photos` in `tours.ts` |
| Each bike | `photo` in `fleet.ts` |

A spot left empty shows nothing, so the page never has an empty box.

Nothing is printed on the photos themselves. Most of the photos that came with the
site are public domain and need no credit. Three are not (the top photo and two of
the bike photos): their licence requires the photographer to be named, so they are
listed under "Photo credits" at the very bottom of the page. That list comes from
the `credit` / `photoCredit` lines in the data files. When you replace one of those
photos with your own, delete its credit lines and it drops off the list.

## Changing colours or fonts

- Colours: the list at the top of `src/app/globals.css`.
- Fonts: `src/app/layout.tsx` (Barlow Condensed for headings, Vollkorn for text,
  Kalam for the handwritten notes).
