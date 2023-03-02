import React, { useEffect, useState } from "react";
import { client } from "../../lib/client";
import { ProductPage } from "../../components/ProductPage";
import { useStoreState } from "../../context/context";
import LoadingSpinner from "../../components/shared/LoadingSpinner";

export default function RingPage({ ringsData }) {
  const { rings, setRings } = useStoreState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    //TODO: This simulates a delay fetching from sanity
    setTimeout(()=>{
      setRings(ringsData);
      setIsLoading(false);
    }, 2000)
  }, [ringsData]);

  return (
    <>
      {  isLoading ? <LoadingSpinner /> :  <ProductPage classification={"Rings"} data={rings} /> }
    </>
  );
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
