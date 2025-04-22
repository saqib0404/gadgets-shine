import React from 'react'
import vrImg from "../../assets/banner.jpg"

const Banner = () => {
    return (
        
        <section className="relative mb-36 sm:mb-52 md:mb-80">
            {/* Top Hero Content */}
            <div className='bg-purple-600 text-white rounded-b-3xl max-w-screen-2xl mx-auto text-center pb-72'>
            <h2 className="text-4xl pt-8  font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
            <p className='my-7'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <button className='text-purple-600 font-bold py-2 px-7 rounded-full bg-white'>Shop Now</button>
        </div>

            {/* VR Image (Floating effect) */}
            <div className="absolute inset-x-0 bottom-[-100px] sm:bottom-[-170px] md:bottom-[-250px] flex justify-center">
                <div className="border border-white bg-gray-100 bg-opacity-30  rounded-3xl shadow-xl p-2 md:p-4 w-[90%] max-w-3xl">
                    <img
                        src={vrImg}
                        alt="VR Headset"
                        className="rounded-3xl w-full object-cover"
                    />
                </div>
            </div>
        </section>

    )
}

export default Banner