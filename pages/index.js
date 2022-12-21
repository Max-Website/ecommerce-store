import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ProductPage } from '../components/ProductPage'
import { Navbar } from '../components/navbar'

export default function Home() {
  return (<>
        <Navbar />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <ProductPage classification={'Rings'} />
        </>
      )
    }
