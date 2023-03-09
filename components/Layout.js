import Link from "next/link";
import Image from "next/image"

import facebook from '../public/images/facebook.png'
import insta from '../public/images/instagram.png'
import linkedin from '../public/images/linkedin.png'
import bordureTop from '../public/images/bandeau-top.png'

export default function Layout({ children }) {
  return (
    <>
      <div className='border-b border-text md:border-0'>
        <Link href="/"><h1 className='text-6xl md:text-7xl font-title text-center my-4 text-peach'>Marilyn Virassamy</h1></Link>
        <p className='text-sm md:text-2xl lg:text-3xl font-text text-center mt-2 text-text mb-4'>Une histoire immobilière à écrire ensemble</p>
      </div>
      <main>{children}</main>
      <footer className='m-0 p-0'>
        <Image
          className='m-0 p-0'
          src={bordureTop}
          width="100%"
          alt="bordure top"
        />
        <div className='bg-darkbg m-0 pt-4 pb-20 md:pb-0'>
          <h2 className='text-peach font-title text-5xl md:text-7xl text-center hidden md:block'>Marilyn Virassamy</h2>
          <div className='flex justify-center md:mt-6'>
            <Image
              className='h-6 w-6 md:h-10 md:w-10 lg:h-14 lg:w-14'
              src={facebook}
              alt="icone facebook"
            />
            <Image
              className=' h-6 w-6 md:h-10 md:w-10 lg:h-14 lg:w-14 ml-12 mr-12'
              src={insta}
              alt="icone instagram"
            />
            <a href="https://www.linkedin.com/in/marilyn-virassamy-975422110/" target="_blank" rel="noreferrer"><Image
              className='h-6 w-6 md:h-10 md:w-10 lg:h-14 lg:w-14'
              src={linkedin}
              alt="icone linkedin"
            />
            </a>
          </div>
          <p className='text-center text-text mt-4 md:mt-8 hover:underline font-text md:text-2xl'>mentions Légales</p>
          <p className='text-center text-text mt-4 md:mt-8 font-text md:text-2xl'>© 2023 Cloudbusting - All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}