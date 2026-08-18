import Image from 'next/image';
import { useState } from 'react';

const PortfolioGallery = ({images}:{images:string[]}) => {
  const [openIdx,setOpenIdx] = useState<number | null>(null);
  return (
    <section>
      <div className="grid grid-cols-12 gap-4">
        {/* example editorial layout using grid spans */}
        {images.slice(0,8).map((src,i)=>{
          const span = i===0? 'col-span-12 md:col-span-8 h-96' : i===1? 'col-span-6 md:col-span-4 h-44' : 'col-span-6 md:col-span-4 h-64';
          return (
            <div key={i} className={`${span} overflow-hidden relative image-hover-zoom`} onClick={()=>setOpenIdx(i)}>
              <Image src={src} alt={`Selected moment ${i+1}`} fill style={{objectFit:'cover'}} sizes="(max-width: 768px) 100vw, 33vw"/>
              <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-30 transition"></div>
            </div>
          );
        })}
      </div>

      {/* simple lightbox fallback */}
      {openIdx !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button onClick={()=>setOpenIdx(null)} className="absolute top-6 right-6 text-cream">Close</button>
          <div className="max-w-4xl max-h-[90vh] w-full relative">
            <Image src={images[openIdx]} alt={`Selected ${openIdx+1}`} width={1200} height={800} style={{objectFit:'contain'}} />
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioGallery;
