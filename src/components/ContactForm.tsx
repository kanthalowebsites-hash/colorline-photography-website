import { useState } from 'react';

const ContactForm = () => {
  const [form,setForm] = useState({name:'',email:'',phone:'',service:'',date:'',message:''});
  return (
    <form action="mailto:afotobell@gmail.com" method="POST" encType="text/plain" className="space-y-4 max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="p-3 border" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
        <input className="p-3 border" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
      </div>
      <input className="p-3 border w-full" placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
      <input className="p-3 border w-full" placeholder="Service" value={form.service} onChange={(e)=>setForm({...form,service:e.target.value})} />
      <input className="p-3 border w-full" placeholder="Preferred Date" value={form.date} onChange={(e)=>setForm({...form,date:e.target.value})} />
      <textarea className="p-3 border w-full" placeholder="Message" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} />
      <div className="flex gap-4">
        <button type="submit" className="px-6 py-2 bg-forest text-cream">Send Enquiry</button>
        <a href="https://wa.me/265991459233?text=Hello%20Colorline%20Photography%20MW,%20I%20would%20like%20to%20inquire%20about%20a%20session." className="px-6 py-2 border border-forest text-forest">Request via WhatsApp</a>
      </div>
    </form>
  );
}

export default ContactForm;
