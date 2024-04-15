import { getCharacters } from "../fetch/allFetch";
import Link from "next/link";
import PersonCard from "../components/Cards/PersonCard";
import Image from "next/image";
import Logo from "../svg/RickAndMorty.svg";

export default async function Characters() {
  const response: any = await getCharacters();

  return (
    <>
      <Image src={Logo} alt="Logotipe" className="m-auto" />
      <div className="flex flex-wrap gap-4">
        {response.results.map((res: any, item: any) => {
          return (
            <Link href={`/Characters/${res.id}`} key={item}>
              <PersonCard
                name={res.name}
                image={res.image}
                species={res.species}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
