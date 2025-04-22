import React from 'react'
import { Link } from 'react-router'

const Product = ({ product }) => {
    const { name, id, price, img } = product
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Gadget"
                    className="rounded-xl" />
            </figure>
            <div className="card-body pl-10">
                <h2 className="card-title font-semibold text-2xl">{name}</h2>
                <p className='text-lg text-gray-500 font-normal'>Price: {price}</p>
                <div className="card-actions">
                    <Link className="hover:bg-purple-700 duration-300 hover:text-white hover:border-white border-2 border-purple-700 text-purple-700 font-semibold text-xl px-4 py-1 rounded-full">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Product