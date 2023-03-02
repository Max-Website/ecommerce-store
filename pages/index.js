import { useEffect } from "react";
import {
  Footer,
  HeroBanner,
  HomeIntro,
  InfoBox,
  SliderComponent
} from "../components";
import { client } from "../lib/client";

import { useStoreState } from "../context/context";

export default function Home({ ringsData, necklacesData, braceletsData }) {
  const { rings, setRings, necklaces, setNecklaces, bracelets, setBracelets } = useStoreState();

  useEffect(() => {
    setRings(ringsData);
    setNecklaces(necklacesData);
    setBracelets(braceletsData);
  }, [ringsData, necklacesData, braceletsData]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HeroBanner />
      <div className="max-w-6xl px-3 flex flex-col justify-center items-center w-full">
        <HomeIntro />
        <SliderComponent product={"rings"} productData={rings} />
        <SliderComponent product={"necklaces"} productData={necklaces} />
        <SliderComponent product={"bracelets"} productData={bracelets} />
      </div>

      <InfoBox />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const ringsQuery = '*[_type == "rings"]';
  const ringsData = await client.fetch(ringsQuery);

  const necklacesQuery = '*[_type == "necklaces"]';
  const necklacesData = await client.fetch(necklacesQuery);

  const braceletsQuery = '*[_type == "bracelets"]';
  const braceletsData = await client.fetch(braceletsQuery);

  return {
    props: {
      ringsData,
      necklacesData,
      braceletsData,
    },
  };
};
