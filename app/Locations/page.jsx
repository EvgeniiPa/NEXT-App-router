import Image from "next/image";
import { getLocations } from "../fetch/allFetch";
import EpisodAndLocationCard from "../components/Cards/EpisodAndLocationCard";
import Logo from "../svg/LocatinsLogotipe.svg";

export default async function Locations() {
  const response = await getLocations();

  return (
    <div>
      <Image src={Logo} alt="Logotipe" className="m-auto" />
      <div className="flex flex-wrap gap-5">
        {response.results.map((res, item) => {
          return <EpisodAndLocationCard title={res.name} type={res.type} key={res.id} />;
        })}
      </div>
    </div>
  );
}
