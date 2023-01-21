import React from 'react'
import { client } from "../../lib/client"
import { ProductDetails } from '../../components/ProductDetails'

export default function BracletDetails({necklacesData}) {

    return (
        <ProductDetails data={necklacesData} />
    )}

export const getServerSideProps = async () => {
    const necklacesQuery = '*[_type == "necklaces"]';
    const necklacesData = await client.fetch(necklacesQuery);

return {
    props: {
        necklacesData,
    }
}
}