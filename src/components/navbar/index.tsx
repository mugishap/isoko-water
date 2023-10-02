import { INavbarLink } from '@/types'
import { navbarLinks } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import { BiCart, BiSearch } from 'react-icons/bi'

const Navbar = () => {
    return (
        <div className='w-full bg-primary text-white flex justify-between items-center h-14 px-12'>
            <span className='font-bold text-lg'>Isoko Water</span>
            <div className='flex items-center h-full justify-center'>
                {
                    navbarLinks.map((link: INavbarLink, index: number) => (
                        <Link href={link.path} key={index} className='mx-4 border-b-white border-b-2 h-full flex items-center justify-center'>{link.name}</Link>
                    ))
                }
                <Link href={"/cart"} className='mx-4 border-b-white border-b-2 h-full flex items-center justify-center'><BiCart /></Link>

                <Link href={"/search"} className='mx-4 border-b-white border-b-2 h-full flex items-center justify-center'><BiSearch /></Link>

            </div>
        </div>
    )
}

export default Navbar