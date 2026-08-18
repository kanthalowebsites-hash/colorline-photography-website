const RateCardForm = () => {
  return (
    <form action="mailto:afotobell@gmail.com" method="POST" encType="text/plain" className="space-y-4 max-w-2xl text-forest">
      <input className="p-3 border w-full" placeholder="Full Name" />
      <input className="p-3 border w-full" placeholder="Email Address" />
      <input className="p-3 border w-full" placeholder="Phone / WhatsApp" />
      <input className="p-3 border w-full" placeholder="Service Required" />
      <input className="p-3 border w-full" placeholder="Preferred Date" />
      <textarea className="p-3 border w-full" placeholder="Additional Information" />
      <div className="flex gap-4">
        <button type="submit" className="px-6 py-2 bg-gold text-forest">Request Rate Card</button>
        <a href="https://wa.me/265991459233?text=Hello%20Colorline%20Photography%20MW,%20I%20would%20like%20to%20request%20your%20latest%20Rate%20Card." className="px-6 py-2 border border-forest text-forest">Request via WhatsApp</a>
      </div>
    </form>
  );
}
export default RateCardForm;
