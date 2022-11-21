import Head from "next/head";
import Image from "next/image";
import { Footer, HeroBanner, HomeIntro } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HeroBanner />
      <div className="max-w-5xl px-3 flex flex-col justify-center items-center">
        <HomeIntro />
      </div>
      <Footer />
    </div>
  );
}
