import Image from "next/image";
import { getEpisodes } from "../fetch/allFetch";
import EpisodAndLocationCard from "../components/Cards/EpisodAndLocationCard";
import Logo from "../svg/EpisodesLogotype.svg";

export default async function Episodes() {
  const response = await getEpisodes();

  return (
    <div>
      <Image src={Logo} alt="Logotipe" className="m-auto" />
      <div className="flex flex-wrap gap-5">
        {response.results.map((res, item) => {
          return (
            <EpisodAndLocationCard
              title={res.name}
              type={res.episode}
              key={res.id}
              date={res.air_date}
            />
          );
        })}
      </div>
    </div>
  );
}
