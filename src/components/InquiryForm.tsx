'use client';

import { useState, type FormEvent } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { toursData } from '@/data/tours';

const fieldClass =
  'mt-1.5 w-full rounded-[4px] border border-ink/40 bg-wash px-3 py-2.5 text-ink placeholder:text-mute/70 focus:border-ink';
const labelClass = 'block text-base font-semibold';

export default function InquiryForm() {
  const { contact, season } = siteConfig;
  const [opened, setOpened] = useState(false);

  /* Builds a WhatsApp message from the answers and opens it, ready to send. */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const lines = [
      `Hello, I am ${get('name')}.`,
      `I am interested in: ${get('ride')}`,
      `Month: ${get('month')}`,
      `Riders: ${get('riders')}`,
      `My phone: ${get('phone')}`,
      get('experience') && `Riding experience: ${get('experience')}`,
    ].filter(Boolean);

    const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
    setOpened(true);
  };

  return (
    <section id="contact">
      <div className="mx-auto grid max-w-6xl gap-x-16 gap-y-12 px-5 py-20 md:grid-cols-[5fr_6fr] md:px-8 md:py-28">
        <div>
          <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-mute">{contact.intro}</p>

          <p className="mt-8">Or reach us directly:</p>
          <ul className="mt-2 space-y-1 font-display text-2xl font-semibold">
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-lake">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-lake">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>Your name</label>
              <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone number</label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
            </div>
          </div>

          <div>
            <label htmlFor="ride" className={labelClass}>What are you after?</label>
            <select id="ride" name="ride" className={fieldClass} defaultValue="Not sure yet">
              {toursData.map((tour) => (
                <option key={tour.id}>{tour.title}</option>
              ))}
              <option>Just hiring a bike</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="month" className={labelClass}>Which month?</label>
              <select id="month" name="month" className={fieldClass}>
                {season.months.map((month) => (
                  <option key={month}>{month}</option>
                ))}
                <option>Flexible</option>
              </select>
            </div>
            <div>
              <label htmlFor="riders" className={labelClass}>How many riders?</label>
              <input id="riders" name="riders" type="number" min={1} max={20} defaultValue={1} required className={fieldClass} />
            </div>
          </div>

          <div>
            <label htmlFor="experience" className={labelClass}>
              Your riding experience <span className="font-normal text-mute">(optional)</span>
            </label>
            <textarea
              id="experience"
              name="experience"
              rows={3}
              placeholder="Years riding, the bike you ride at home, any mountain trips so far"
              className={`${fieldClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-[4px] border-2 border-ink bg-milestone px-6 py-3 font-display text-xl font-semibold leading-none hover:bg-ink hover:text-wash"
          >
            Send on WhatsApp
          </button>

          <p className="text-base text-mute" aria-live="polite">
            {opened
              ? `WhatsApp should have opened with your message. Press send there to reach us. If nothing opened, call ${contact.phone}.`
              : 'This opens WhatsApp with your message filled in. Nothing is sent until you press send there.'}
          </p>
        </form>
      </div>
    </section>
  );
}
