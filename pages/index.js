import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Footer, HeroBanner, HomeIntro, InfoBox, SliderComponent, ProductPage } from "../components";
import { Navbar } from '../components/navbar'

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <HeroBanner />
      <div className="max-w-5xl px-3 flex flex-col justify-center items-center">
        <HomeIntro />
        <InfoBox />
        <SliderComponent />
      </div>
      <ProductPage classification={'Rings'} />
      <Footer />
    </div>
  );
}
