import React from 'react'

const Category = ({ category }) => {
    return (
        <ul>
            <li className='hover:bg-purple-700 cursor-pointer hover:text-white bg-base-300 px-8 py-2 my-2 rounded-full font-bold'>{category}</li>
        </ul>
    )
}

export default Category