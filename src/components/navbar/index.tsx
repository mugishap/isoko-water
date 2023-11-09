import { INavbarLink } from '@/types'
import { navbarLinks } from '@/utils/data'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiCart, BiMenu, BiSearch, BiX } from 'react-icons/bi'

const Navbar = () => {

    const [viewNavbar, setViewNavbar] = useState(false);

    return (
        <div className='relative w-full bg-primary text-white flex justify-between items-center h-14 px-12'>
            <span className='font-bold text-lg'>Isoko Water</span>
            <div className='hidden md:flex items-center h-full justify-center'>
                {
                    navbarLinks.map((link: INavbarLink, index: number) => (
                        <Link href={link.path} key={index} className='mx-4 border-b-white border-b-2 h-full flex items-center justify-center'>{link.name}</Link>
                    ))
                }
                <Link href={"/cart"} className='mx-4 border-b-white border-b-2 h-full flex items-center justify-center'><BiCart /></Link>

                <Link href={"/search"} className='mx-4 border-b-white border-b-2 h-full flex items-center justify-center'><BiSearch /></Link>

            </div>
            <div className={`bg-white w-full absolute top-0 right-0 ${viewNavbar ? "flex" : "hidden"} flex-col`}>
                <div className='px-4 flex flex-col'>
                    <div className='w-full flex items-center justify-end'>
                        <BiX className="text-primary " size={45} onClick={() => setViewNavbar(false)} />
                    </div>
                    {
                        navbarLinks.map((link: INavbarLink, index: number) => (
                            <Link href={link.path} key={index} className='my-4 text-lg text-primary '>{link.name}</Link>
                        ))
                    }
                </div>
                <Link href={"/cart"} className='m-4 border-primary p-1 border-2 h-10 w-10 rounded-full flex items-center justify-center'><BiCart className="text-primary" /></Link>

                <Link href={"/search"} className='m-4 border-primary p-1 border-2 h-10 w-10 rounded-full flex items-center justify-center'><BiSearch className="text-primary" /></Link>
            </div>
            <BiMenu className="md:hidden flex cursor-pointer" size={30} onClick={() => setViewNavbar(true)} />
        </div>
    )
}

export default Navbar