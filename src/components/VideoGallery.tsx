'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';

export default function VideoGallery() {
  if (siteConfig.videos.length === 0) return null;

  return (
    <section id="films" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl">
        {siteConfig.films.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-mute">{siteConfig.films.intro}</p>

      <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2">
        {siteConfig.videos.map((video, index) => (
          <Film key={index} title={video.title} youtubeId={video.youtubeId} />
        ))}
      </div>
    </section>
  );
}

/* Shows the thumbnail first; YouTube only loads once someone presses play. */
function Film({ title, youtubeId }: { title: string; youtubeId: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-[4px] border-2 border-ink bg-ink">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer"
            aria-label={`Play film: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-[4px] border-2 border-ink bg-milestone px-4 py-2 font-display text-xl font-semibold leading-none text-ink group-hover:bg-wash">
              Play
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 font-display text-2xl font-semibold leading-tight">{title}</figcaption>
    </figure>
  );
}
