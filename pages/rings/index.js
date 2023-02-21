import React, { useEffect } from "react";
import { client } from "../../lib/client";
import { ProductPage } from "../../components/ProductPage";
import { useStoreState } from "../../context/context";

export default function RingPage({ ringsData }) {
  const { rings, setRings, necklaces, setNecklaces, bracelets, setBracelets } = useStoreState();

  useEffect(() => {
    setRings(ringsData);
    console.log('ssssss', rings);
  }, [ringsData]);

  return <ProductPage classification={"Rings"} data={ringsData} />;
}

export const getServerSideProps = async () => {
  const ringsQuery = '*[_type == "rings"]';
  const ringsData = await client.fetch(ringsQuery);

  return {
    props: {
      ringsData,
    },
  };
};
