import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router'

const ProductDetail = () => {
    const { id } = useParams();
    const products = useLoaderData();
    const desiredProduct = products.find(product => product.id === Number(id));
    const { name, img, price, rating, specs, status, description, category } = desiredProduct;
    // console.log(name, img, price, rating, specs, status, description);



    return (
        <section className="relative">
            <Helmet>
                <title>Details | Gadgets Shine</title>
            </Helmet>
            {/* Purple background half-height */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-purple-600 z-0"></div>

            {/* Content */}
            <div className="relative z-10">
                <h2 className="text-4xl pb-4 text-center pt-7 font-bold text-white">Product Details</h2>
                <p className="text-lg pb-8 text-center text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                </p>

                <div className="hero bg-white max-w-screen-lg mx-auto mb-20 rounded-xl px-2">
                    <div className="hero-content flex-col lg:flex-row ">
                        <img
                            src={img}
                            alt={category}
                            className="max-w-sm sm:max-w-lg md:max-w-md rounded-xl md:mr-2"
                        />
                        <div>
                            <h1 className="text-4xl font-bold">{name}</h1>
                            <p className="text-lg py-2 font-medium">Price: ${price}</p>
                            <span className="px-4 rounded-full py-1 border-2 font-medium border-[#3b921b] text-[#3b921b] bg-[#d0ebc6be]">
                                {status}
                            </span>
                            <p className="py-2 max-w-3xl">{description}</p>
                            <div>
                                <span className="font-medium">Specification:</span>
                                <ol className="list-decimal list-inside">
                                    {specs.map((spec, idx) => (
                                        <li key={idx}>{spec}</li>
                                    ))}
                                </ol>
                            </div>
                            <div className="py-4 flex items-center gap-4">
                                <button className="bg-purple-600 border-purple-600 border-2 text-white flex items-center text-xl px-4 py-1 rounded-full gap-2 hover:bg-white hover:text-purple-600 hover:border-purple-600 duration-200">
                                    Add to Cart <MdOutlineShoppingCart />
                                </button>
                                <button className="text-xl border-2 border-gray-300 bg-base-200 rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 duration-200">
                                    <MdOutlineFavoriteBorder className="m-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail