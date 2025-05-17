"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
// import { motion } from "framer-motion"



export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    return (
        <div className="backdrop-blur-2xl w-full fixed top-0 z-50">
            <div className="flex justify-between items-center text-center text-dark-green font-semibold">
                <div className={`${isOpen ? "bg-dark-green md:bg-transparent" : "bg-transparent md"} transition-all duration-300 ease-in-out flex justify-between w-full md:w-auto py-2 px-6 z-10`}>
                    <Image src={'/images/logo.png'} alt="logo" width={200} height={200} />
                    <button 
                        onClick={(() => setIsOpen(!isOpen))} 
                        className={`md:hidden font-bold text-4xl text-lime z-50 cursor-pointer`}
                    >
                        {isOpen ? "x" : "="}
                    </button>
                </div>
                <ul className={isOpen ? `absolute top-20 transition-all duration-600 ease-in-out right-0 flex flex-col gap-10 w-full py-4 bg-white/50` : `-top-52 md:flex md:space-x-6 space-y-4 md:space-y-0 absolute md:static w-full left-0 md:w-auto md:flex-row flex-col items-center text-center py-6 transition-all duration-300 ease-in-out`}>
                    <li>
                        <Link 
                            href={'/'}
                            className={pathName === "/" ? "font-bold text-lime" : ""}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href={'/services'}
                            className={pathName === "/services" ? "font-bold text-lime" : ""}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href={'/prices'}
                            className={pathName === "/prices" ? "font-bold text-lime" : ""}
                        >
                            Pricing
                        </Link>
                    </li>
                    
                </ul>
                <div className="hidden md:flex gap-10 justify-center items-center">
                    <Link 
                        href={'/'}
                        className="bg-lime p-2 rounded-xl w-40 text-center font-semibold text-white hover:bg-dark-lime">Sign Up</Link>    
                    <Link 
                        href={'/'}
                        className=" p-2 rounded-xl w-40 text-center font-semibold text-dark-green hover:bg-dark-lime hover:text-white">Login</Link>    
                </div>
                
            </div>


        </div>
    )
}

export const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row space-y-2 justify-between p-4 shadow-2xl shadow-black/50 bg-dark-green text-white">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-start w-full">
                    <Image src={"/images/logo.png"} alt={"logo"} width={350} height={350} className="w-1/2 md:w-1/2.5 object-contain" />
                    <p className="italic text-sm">CF Laundry hadir untuk memenuhi kebutuhan laundry kiloan atau satuan terbaik bagi masyarakat Gresik-Surabaya. Dengan jaminan kualitas kebersihan dan keharuman yang terbaik, kami berkomitmen untuk memberikan layanan laundry yang memuaskan dan memberikan rasa nyaman kepada pelanggan.</p>
                </div>
                <ul className="space-y-4 my-10">
                    <h1 className="font-bold text-3xl">Kontak Kami</h1>
                    <li>
                        <h2 className="font-semibold">Alamat</h2>
                        <p className="italic">Cerme Lor, Cerme, Kec. Cerme, Kabupaten Gresik, Jawa Timur 61171</p>
                    </li>
                    <li>
                        <h2 className="font-semibold">HP & WA:</h2>
                        <p className="italic">087855850591</p>
                    </li>
                    {/* <li>
                        <h2>Email:</h2>
                        <p></p>
                    </li> */}
                </ul>                
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3958.125718541669!2d112.5614103!3d-7.2264985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78015e434f901d%3A0x80e380e3b3ea0853!2sCF%20LAUNDRY%20CERME!5e0!3m2!1sid!2sid!4v1746679263061!5m2!1sid!2sid" 
                width="300" 
                height="300"
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full md:h-auto object-contain rounded-md"
            >    
            </iframe>
        </div>
    )
}