import Button from "./button";

type CoworkingCardProps ={
    title? : string;
    desc? : string
    thumbSrc : string; 
    thumbAlt? : string;
}

export default function CoworkingCard({title , desc, thumbSrc , thumbAlt}: CoworkingCardProps) { 
 return (
    <>
     <div className="p-6 border border-neutral-800 rounded-xl">
      <img src={thumbSrc} alt={thumbAlt} />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-stone-200">{desc}</p>
      <Button to="/coworking" className="mt-5">View details</Button>
    </div>
    </>
 )
}