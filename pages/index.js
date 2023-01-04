import { client } from "../lib/client";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Footer, HeroBanner, HomeIntro, InfoBox, SliderComponent, ProductPage } from "../components";
import { Navbar } from '../components/navbar'
import { useEffect } from "react";

export default function Home({ ringsData, necklacesData, braceletsData }) {

  useEffect(() => {
    console.log('what is rings data', braceletsData);
  }, [braceletsData]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <HeroBanner />
      <div className="max-w-5xl px-3 flex flex-col justify-center items-center">
        <HomeIntro />
        <InfoBox />
        <SliderComponent />
      </div>
      <ProductPage classification={'Rings'} data={ringsData}/>
      <ProductPage classification={'Necklaces'} data={necklacesData}/>
      <ProductPage classification={'Bracelets'} data={braceletsData}/>
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
