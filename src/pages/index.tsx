import Image from 'next/image';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ServiceBlock from '../components/ServiceBlock';
import PortfolioGallery from '../components/PortfolioGallery';

export default function Home(){
  const images = [
    '/images/placeholder-hero.jpg',
    '/images/placeholder-2.jpg',
    '/images/placeholder-3.jpg',
    '/images/placeholder-4.jpg',
    '/images/placeholder-5.jpg',
    '/images/placeholder-6.jpg'
  ];

  return (
    <div>
      {/* Hero */}
      <section className="h-[90vh] relative overflow-hidden">
        <Image src="/images/placeholder-hero.jpg" alt="Hero image" fill style={{objectFit:'cover'}} sizes="100vw"/>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="max-w-4xl px-6 md:px-12 text-cream">
            <div className="text-sm uppercase tracking-widest mb-4">COLORLINE PHOTOGRAPHY MW</div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight editorial-title">CAPTURING<br/>MOMENTS<br/>THAT LIVE FOREVER</h1>
            <p className="mt-6 max-w-xl">Luxury weddings, engagements, studio portraits, events, fashion and outdoor photography.</p>
            <div className="mt-6 flex gap-4">
              <Button className="px-6 py-3">EXPLORE OUR WORK</Button>
              <Button variant="outline">BOOK A SESSION</Button>
            </div>
            <div className="mt-12 text-sm">SCROLL TO EXPLORE</div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-cream text-forest py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm uppercase tracking-widest text-sage">COLORLINE PHOTOGRAPHY MW</div>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight mt-3">YOUR STORY<br/>DESERVES TO BE<br/>REMEMBERED.</h2>
            <p className="mt-6">Colorline Photography MW captures life's most meaningful moments through beautiful, timeless photography.
            From weddings and engagements to studio portraits, fashion, family memories and special celebrations, we create photographs that allow you to relive the feeling long after the moment has passed.</p>
            <p className="mt-4">Our approach combines creativity, emotion, professional photography and careful editing to tell every story beautifully.</p>
          </div>
          <div className="w-full h-[520px] relative">
            <Image src="/images/placeholder-portrait.jpg" alt="Portrait sample" fill style={{objectFit:'cover'}} sizes="(max-width: 768px) 100vw, 50vw"/>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading label="WHAT WE CAPTURE" title={<>SELECTED MOMENTS</>} />
        <p className="text-forest/80 mb-8">Beautiful photography for the moments that matter most.</p>
        <ServiceBlock index={1} title="Weddings" description="Luxury wedding photography capturing the emotions, details, people and unforgettable moments of your celebration." img="/images/placeholder-vertical.jpg" />
        <ServiceBlock index={2} title="Engagements" description="Natural and romantic engagement photography created around your personality and story." img="/images/placeholder-2.jpg" reverse />
        <ServiceBlock index={3} title="Studio Portraits" description="Professional studio photography for individuals, families, graduates, creatives and personal milestones." img="/images/placeholder-3.jpg" />
      </section>

      {/* Featured portfolio */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading label="SELECTED MOMENTS" title={<>SELECTED MOMENTS</>} />
        <p className="text-forest/80 mb-8">A collection of stories, celebrations and memories captured through the Colorline lens.</p>
        <PortfolioGallery images={images} />
        <div className="mt-8 text-center">
          <a href="/portfolio" className="px-6 py-3 border border-forest text-forest">VIEW FULL PORTFOLIO</a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest text-cream py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold">LET'S CREATE<br/>SOMETHING BEAUTIFUL.</h3>
          <p className="mt-4">Your moments happen once. Let us help you preserve them forever.</p>
          <div className="mt-6">
            <a href="/contact" className="px-6 py-3 bg-cream text-forest">BOOK YOUR SESSION</a>
          </div>
        </div>
      </section>

    </div>
  );
}
