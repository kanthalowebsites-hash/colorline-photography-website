import Image from 'next/image';

const ServiceBlock: React.FC<{index:number, title:string, description:string, img?:string, reverse?:boolean}> = ({index,title,description,img,reverse=false}) => {
  return (
    <section className={`grid md:grid-cols-2 gap-8 items-center py-12 ${reverse? 'md:flex-row-reverse':''}`}>
      <div>
        <div className="text-sm text-sage uppercase tracking-wider">{String(index).padStart(2,'0')}</div>
        <h3 className="text-2xl font-semibold mt-2">{title}</h3>
        <p className="mt-4 text-base text-forest">{description}</p>
      </div>
      <div className="image-hover-zoom overflow-hidden rounded-sm">
        <div className="w-full h-80 relative">
          <Image src={img || '/images/placeholder-vertical.jpg'} alt={`${title} photography`} fill style={{objectFit:'cover'}} sizes="(max-width: 768px) 100vw, 50vw"/>
        </div>
      </div>
    </section>
  );
}

export default ServiceBlock;
