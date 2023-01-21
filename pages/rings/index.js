import React, { useEffect } from 'react'
import { client } from "../../lib/client"
import { ProductPage } from '../../components/ProductPage';

export default function RingPage({ringsData}) {

    useEffect(() => {
        console.log('what is rings data', ringsData);
      }, [ringsData]);
    

    return (
        <ProductPage classification={'Rings'} data={ringsData}/>
    )
}

export const getServerSideProps = async () => {
    const ringsQuery = '*[_type == "rings"]';
    const ringsData = await client.fetch(ringsQuery);

    return {
        props: {
            ringsData,
        }
    }
}