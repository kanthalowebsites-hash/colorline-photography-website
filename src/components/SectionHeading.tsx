const SectionHeading: React.FC<{label?:string, title: React.ReactNode}> = ({label, title}) => {
  return (
    <div className="mb-8">
      {label && <div className="text-sm uppercase tracking-widest text-sage mb-2">{label}</div>}
      <h2 className="text-4xl md:text-6xl font-semibold leading-tight editorial-title">{title}</h2>
    </div>
  );
}
export default SectionHeading;
