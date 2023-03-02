import React from "react";
import { client } from "../../lib/client";
import { ProductPage } from "../../components/ProductPage";

export default function NecklacePage({ necklacesData }) {
  return <ProductPage classification={"Necklaces"} data={necklacesData} />;
}

export const getServerSideProps = async () => {
  const necklacesQuery = '*[_type == "necklaces"]';
  const necklacesData = await client.fetch(necklacesQuery);

  return {
    props: {
      necklacesData,
    },
  };
};
