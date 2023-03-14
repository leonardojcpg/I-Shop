import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
export default function Product(){
    const {query} = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>

            <ProductDetails>
                <h1>camiseta</h1>
                <span>R$ 79,90</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque incidunt, temporibus, ducimus non eveniet commodi quidem aspernatur quasi nisi molestias id. Id enim cum sed dignissimos quis numquam, omnis sequi!</p>
                <button>Comprar Agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}