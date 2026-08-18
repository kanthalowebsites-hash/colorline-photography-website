import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-forest text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-xl">COLORLINE<br/>PHOTOGRAPHY MW</h3>
          <p className="mt-3">Photography for moments that matter.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/rate-card">Rate Card</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3">+265 991 45 92 33<br/>afotobell@gmail.com<br/>Bangwe, Blantyre, Malawi</p>
          <div className="mt-4 flex gap-3">
            <a href="https://www.instagram.com/colorlinephotographymw?igsh=Y3VvYmpsYnlzcTY1">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=100079148667631">Facebook</a>
            <a href="https://wa.me/265991459233">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/20 text-center py-6">© 2026 Colorline Photography MW. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
