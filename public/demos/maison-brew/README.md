# Maison Brew photos

No photography is bundled with this demo. Until photos are added, every image slot shows an illustrated placeholder
labelled "Photo placeholder".

To use real photos:

1. Use images you have the right to publish (your own photos, or a licence such as the Unsplash or Pexels licence).
   Keep a note of the source and licence.
2. Save them here, e.g. `public/demos/maison-brew/hero.jpg` (landscape or portrait around 1600 px is plenty;
   `next/image` handles resizing and modern formats).
3. Set the matching `src` in `src/demos/maison-brew/content.ts` (`photos.*` and `featured[].photo`), e.g.
   `src: "/demos/maison-brew/hero.jpg"`, and check the `alt` text still describes the photo.
