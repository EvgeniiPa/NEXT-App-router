interface EpisodCardTypes {
  title: string;
  type: string;
  date?: any
}

export default function EpisodAndLocationCard({ title, type, date = null }: EpisodCardTypes) {
  return (
    <div className="flex flex-col items-center justify-center w-240 h-128 bg-slate-200 text-center">
      <h3 className="my-2 font-bold text-xl">{title}</h3>
      {date !== null && <span className="text-sm">{date}</span> }
      <span className="text-sm">{type}</span>
    </div>
    
  );
}
