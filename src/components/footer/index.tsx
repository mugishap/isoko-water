import { Logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='w-full bg-primary flex py-10 px-32 justify-between text-white text-lg'>
      <Image src={Logo} alt='Logo' className='w-20 h-fit' />
      <div className='flex flex-col items-center'>
        <span className='font-bold text-xl mb-8'>Site Pages</span>
        <div className='flex items-center'>
          {["Home", "About", "Cookie Policy", "Contact"].map((link, index) => (
            <Link href={"#"} className='mx-4 border-b-2 border-b-white py-1' key={index}>{link}</Link>
          ))}
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-lg mt-8'>Contact</span>
          <span className='my-3'>info@isokowater.org</span>
          <div className='flex items-center'>
            {
              [
                { path: "https://twitter.com/isoko_water", icon: BiLogoTwitter },
                { path: "https://facebook.com/isoko_water", icon: BiLogoFacebook },
                { path: "https://www.instagram.com/isoko_water/", icon: BiLogoInstagram },
                { path: "https://linkedin.com/in/isoko_water", icon: BiLogoLinkedin },
                { path: "https://www.youtube.com/@isokowater", icon: BiLogoYoutube },
              ].map((link, index) => (
                <a href={link.path} key={index}><link.icon className="text-white mx-4" size={35} /></a>
              ))
            }
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-xl mb-8 font-semibold'>Join Our Mailing List</span>
        <div className='flex items-center my-2 w-full justify-between'>
          <label htmlFor='email'>Email:</label> <input type="text" id="email" className="outline-none p-3 py-2 w-64 rounded ml-3" />
        </div>
        <div className='flex items-center my-2 w-full justify-between'>
          <label htmlFor='email'>First Name:</label> <input type="text" id="email" className="outline-none p-3 py-2 w-64 rounded ml-3" />
        </div>
        <div className='flex items-center my-2 w-full justify-between'>
          <label htmlFor='email'>Last Name:</label> <input type="text" id="email" className="outline-none p-3 py-2 w-64 rounded ml-3" />
        </div>
        <div className="my-2 flex items-center">
          <input type="checkbox" id='consent' className='w-6 h-6 mr-3' />
          <label htmlFor="consent">I consent to receiving occasional emails from IsokoWater.</label>
        </div>
        <button className='bg-white text-primary px-8 py-2 rounded my-4'>Subscribe</button>
      </div>
    </div>
  )
}

export default Footer