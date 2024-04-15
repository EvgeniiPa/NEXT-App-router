interface PersonCardTypes {
  image: any;
  name: string;
  species: string;
}

export default function PersonCard({ image, name, species }: PersonCardTypes) {
  return (
      <div className="flex flex-col ">
        <img className="w-60 h-44 rounded" src={image} alt="Avatar" />
        <h3 className="my-4 font-bold">{name}</h3>
        <span>{species}</span>
      </div>
  );
}
