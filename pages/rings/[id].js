import React from 'react'
import { client } from "../../lib/client"
import { ProductDetails } from '../../components/ProductDetails'

export default function BracletDetails({ringsData}) {

    return (
        <ProductDetails data={ringsData} />
    )}

export const getServerSideProps = async () => {
    const ringsQuery = '*[_type == "rings"]';
    const ringsData = await client.fetch(ringsQuery);

return {
    props: {
        ringsData,
    }
}
}