import React from "react";
import { client } from "../../lib/client";
import { ProductPage } from "../../components/ProductPage";

export default function RingPage({ ringsData }) {
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
