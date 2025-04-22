import React, { useEffect, useState } from 'react'
import Category from '../Category/Category'
import Product from '../Product/Product';

const Gadgets = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("categories.js")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    useEffect(() => {
        fetch("products.js")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    return (
        <div className=' max-w-screen-2xl md:px-20 mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-bold mb-10'>Explore Cutting-Edge Gadgets</h2>
            <div className='md:flex gap-5'>
                <div className='md:w-2/6 lg:w-1/6 bg-white border shadow-xl rounded-xl p-6 self-start'>
                    {
                        categories.map((category, idx) => <Category key={idx} category={category} />)
                    }
                </div>
                <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-4 md:w-4/6 lg:w-5/6'>
                    {
                        products.map(product => <Product key={product.id} product={product} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Gadgets