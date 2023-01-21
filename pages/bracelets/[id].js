import React from 'react'
import { client } from "../../lib/client"
import { ProductDetails } from '../../components/ProductDetails'

export default function BracletDetails({braceletsData}) {

    return (
        <ProductDetails data={braceletsData} />
    )}

export const getServerSideProps = async () => {
    const braceletsQuery = '*[_type == "bracelets"]';
    const braceletsData = await client.fetch(braceletsQuery);

return {
    props: {
        braceletsData,
    }
}
}
  