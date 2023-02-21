import { client } from "../lib/client";
import { Footer, HeroBanner, HomeIntro, InfoBox, SliderComponent, ProductPage } from "../components";
import { useEffect } from "react";

export default function Home({ ringsData, necklacesData, braceletsData }) {

  useEffect(() => {
    console.log('>>>>>>>>>>>>>>',necklacesData);
  },[])

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HeroBanner />
      <div className="max-w-6xl px-3 flex flex-col justify-center items-center w-full">
        <HomeIntro />
        <SliderComponent product={'rings'} productData={ringsData} />
        <SliderComponent product={'necklaces'} productData={necklacesData} />
        <SliderComponent product={'bracelets'} productData={braceletsData} />
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
          braceletsData
      }
  }
}
