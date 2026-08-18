import Image from 'next/image';
import SectionHeading from '../components/SectionHeading';

export default function About(){
  return (
    <div>
      <section className="h-[60vh] relative">
        <Image src="/images/placeholder-hero.jpg" alt="About hero" fill style={{objectFit:'cover'}} />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-cream">
            <div className="text-sm uppercase text-sage">ABOUT COLORLINE</div>
            <h1 className="text-4xl md:text-5xl font-semibold mt-4">BEHIND<br/>THE LENS</h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p>Colorline Photography MW is a professional photography brand passionate about capturing beauty, emotion and the moments that matter most. We believe photography is more than simply taking a picture.
          It is about preserving a feeling, telling a story and creating something you can return to for years.</p>
        </div>
      </section>

      <section className="py-12 bg-forest text-cream">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold">OUR MISSION</h4>
            <p className="mt-3">To create beautiful, meaningful and timeless visual memories through professional photography.</p>
          </div>
          <div>
            <h4 className="font-semibold">OUR VISION</h4>
            <p className="mt-3">To become a trusted photography brand known for creativity, quality, exceptional experiences and photographs that stand the test of time.</p>
          </div>
          <div>
            <h4 className="font-semibold">OUR PROMISE</h4>
            <p className="mt-3">To treat every moment with care and capture your story with professionalism and creativity.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
