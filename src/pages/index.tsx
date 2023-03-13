import { HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"

import {stripe} from '../lib/stripe'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta3 from '../assets/camisetas/3.png'

import {useKeenSlider} from 'keen-slider/react'
import { GetServerSideProps } from "next"

import 'keen-slider/keen-slider.min.css'
import { useState } from "react"

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({products}: HomeProps) {

  const [list, setList] = useState([])

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    
    <HomeContainer ref={sliderRef}>
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt=""/>
            <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

// como o usuario nao tem acesso ao getServerSideProps, nao tem problema
// de conter informações sensiveis

export const getServerSideProps: GetServerSideProps = async() => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = response.data.map(product => {
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: product.default_price,
    }
  })
  return {
    props: {
      products,
    }
  }
}