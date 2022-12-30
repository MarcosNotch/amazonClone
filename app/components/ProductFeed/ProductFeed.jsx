import useGetProducts from "../../../utils/hooks/useGetProducts"
import Product from "../Product/Product"

export default async function ProductFeed(){

    const { products } = await useGetProducts()

    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 md:-mt-52 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
        )

}