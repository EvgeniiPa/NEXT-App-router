import { getCharacter } from "@/app/fetch/allFetch";
import Link from "@/app/components/Link/Link";

interface PersonType {
  params: {
    characterId: string;
  };
}

export default async function Person({ params: { characterId } }: PersonType) {
  const response = await getCharacter(characterId);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <img src={response.image} alt="Avatar" className="rounded-full my-5" />
        <span>{response.name}</span>
      </div>
      <div className="flex justify-start">
        <div>
          <span>Informtions</span>
          <div>
            <Link title="Gender" text={response.gender} />
            <Link title="Status" text={response.status} />
            <Link title="Specie" text={response.species} />
            <Link title="Origin" text={response.origin.name} />
            <Link
              title="Type"
              text={response.type === "" ? <>Unknown</> : response.type}
            />
            <Link title="Location" text={response.location.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
