import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'

const ProductDetail = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/products.json"); // <- Note the leading slash
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    if (products) {
        const desiredProduct = products.find(product => product.id === Number(id));
        console.log(desiredProduct);
    }


    return (
        <section className='bg-purple-600'>
            <h2 className="text-4xl pb-4 text-center pt-7 font-bold text-white">Product Details</h2>
            <p className="text-lg pb-8 text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <div>

            </div>
        </section>
    )
}

export default ProductDetail