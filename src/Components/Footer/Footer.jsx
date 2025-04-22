import React from 'react'

const Footer = () => {
    return (
        <footer className=' mt-16 mb-5 '>
            <h3 className='font-bold text-2xl mb-1 text-center'>Gadget Heaven</h3>
            <p className='font-lg mb-3 text-center'>Leading the way in cutting-edge technology and innovation.</p>
            <div className='divider max-w-5xl mx-auto mb-5'></div>
            <div className='footer bg-white md:flex flex-wrap p-2 md:justify-center md:gap-48 '>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer