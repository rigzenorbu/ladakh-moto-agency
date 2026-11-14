import SiteHeader from '@/components/SiteHeader';
import Hero from '@/components/Hero';
import TourSection from '@/components/TourSection';
import FleetSection from '@/components/FleetSection';
import VideoGallery from '@/components/VideoGallery';
import Photo from '@/components/Photo';
import InquiryForm from '@/components/InquiryForm';
import { siteConfig } from '@/data/siteConfig';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <>
      <SiteHeader overPhoto={Boolean(siteConfig.hero.photo.src)} />
      <main>
        <Hero />
        <TourSection />
        <FleetSection />
        <VideoGallery />
        {siteConfig.panorama.src && (
          <Photo
            photo={siteConfig.panorama}
            sizes="100vw"
            className="h-52 w-full md:aspect-[1920/509] md:h-auto"
          />
        )}
        <InquiryForm />
      </main>
      <SiteFooter />
    </>
  );
}
