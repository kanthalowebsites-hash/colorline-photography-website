import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

export default function Contact(){
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="LET'S TELL" title={<>LET'S TELL<br/>YOUR STORY</>} />
        <p className="text-forest/70 mb-8">Whether you're planning a wedding, booking a studio session, celebrating a milestone or creating something unique, we'd love to hear from you.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold">Contact Information</h4>
            <p className="mt-3">PHONE / WHATSAPP<br/>+265 991 45 92 33</p>
            <p className="mt-3">EMAIL<br/>afotobell@gmail.com</p>
            <p className="mt-3">LOCATION<br/>Bangwe, Blantyre, Malawi</p>
            <p className="mt-3">AVAILABILITY<br/>Available Worldwide 🌍</p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.instagram.com/colorlinephotographymw?igsh=Y3VvYmpsYnlzcTY1" className="underline">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=100079148667631" className="underline">Facebook</a>
              <a href="https://wa.me/265991459233" className="underline">WhatsApp</a>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
