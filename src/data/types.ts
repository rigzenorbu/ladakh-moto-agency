/*
  A photo used on the site.

  src        the file, e.g. '/photos/pangong.jpg'  (the file lives in public/photos/)
  caption    a short line shown on the photo, or leave it out
  focus      which part to keep in view when the photo is cropped,
             as 'left-right% top-bottom%'. '50% 50%' is the middle,
             '50% 90%' is near the bottom. Leave it out for the middle.
  focusWide  only used by the top photo: the same thing, for wide screens.
  credit     only for photos that are not yours and need the photographer named.
  creditUrl  where that photo came from.
             Credited photos are listed under "Photo credits" at the very bottom
             of the page, never on the photo itself.
*/
export interface SitePhoto {
  src: string;
  caption?: string;
  focus?: string;
  focusWide?: string;
  credit?: string;
  creditUrl?: string;
}
