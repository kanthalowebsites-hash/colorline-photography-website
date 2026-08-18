import PortfolioGallery from '../components/PortfolioGallery';
import SectionHeading from '../components/SectionHeading';

export default function Portfolio(){
  const images = [
    '/images/placeholder-1.jpg','/images/placeholder-2.jpg','/images/placeholder-3.jpg','/images/placeholder-4.jpg','/images/placeholder-5.jpg','/images/placeholder-6.jpg','/images/placeholder-7.jpg','/images/placeholder-8.jpg'
  ];
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="ALL" title={<>STORIES<br/>THROUGH OUR<br/>LENS</>} />
        <p className="text-forest/70 mb-8">Every photograph carries a story. Explore some of the moments we've had the privilege of capturing.</p>
        <PortfolioGallery images={images} />
      </div>
    </div>
  );
}
