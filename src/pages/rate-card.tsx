import SectionHeading from '../components/SectionHeading';
import RateCardForm from '../components/RateCardForm';

export default function RateCard(){
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="PHOTOGRAPHY" title={<>PHOTOGRAPHY<br/>INVESTMENT</>} />
        <p className="text-forest/70 mb-8">Every story is unique. Our photography rates are updated from time to time, so we provide our latest Rate Card directly to clients.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-4 space-y-2">
              <li>Weddings</li>
              <li>Engagements</li>
              <li>Studio Portraits</li>
              <li>Events</li>
              <li>Fashion & Creative</li>
              <li>Outdoor Sessions</li>
              <li>Family & Lifestyle</li>
            </ul>
          </div>
          <div>
            <div className="bg-forest text-cream p-8 rounded-sm">
              <h3 className="text-2xl font-semibold">REQUEST OUR<br/>LATEST RATE CARD</h3>
              <p className="mt-4">Photography rates may change from time to time. Send us a request and we will provide you with our current Rate Card and help you choose the right photography experience for your needs.</p>
              <div className="mt-6">
                <RateCardForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
