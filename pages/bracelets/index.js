import React, { useEffect } from 'react'
import { client } from "../../lib/client"
import { ProductPage } from '../../components/ProductPage';

export default function BraceletPage({braceletsData}) {

    useEffect(() => {
        console.log('what is bracelets data', braceletsData);
      }, [braceletsData]);
    

    return (
        <ProductPage classification={'Bracelets'} data={braceletsData}/>
    )
}

export const getServerSideProps = async () => {
    const braceletsQuery = '*[_type == "bracelets"]';
    const braceletsData = await client.fetch(braceletsQuery);

    return {
        props: {
            braceletsData,
        }
    }
}