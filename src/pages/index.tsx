import { Case, SDGs, Web6 } from '@/assets'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { partners, solutions } from '@/utils/data'
import Head from 'next/head'
import Image from 'next/image'

const index = () => {
  return (
    <div className='w-full flex flex-col bg-white justify-between'>
      <Head>
        <title>Welcome to Isoko Water</title>
      </Head>
      <Navbar />
      <div className='flex flex-col min-h-screen w-screen bg-blue-600 bg-radial items-center justify-end'>
        <div className='flex flex-col items-center mb-20'>
          <span className='font-bold text-8xl text-white'>Isooko Water</span>
          <span className='font-light text-3xl text-white'>Smart, simple water testing - for all.</span>
        </div>
      </div>
      <div className='w-full flex flex-col bg-white py-6 items-center'>
        <span className='font-bold text-4xl my-4'>One in ten people do not have access to clean water</span>
        <span className='font-semibold text-lg text-slate-700 my-4'>Isooko Water wants to change this.</span>
        <span className='font-light text-lg text-slate-700 my-4'>We&apos;re overcoming global water inequality by breaking barriers to reliable bacterial testing.</span>
        <span className='font-light text-lg text-slate-700 my-4'>Smart, simple water testing - for all.</span>

        <div className='w-full flex text-white items-center bg-video p-24'>
          <div className='w-[55%] flex items-center justify-center'>
            <iframe src="https://youtube.com/embed/uDomwUPPzkw" className='w-7/12 h-72' />
          </div>
          <div className='w-[45%] flex flex-col'>
            <span className='text-2xl font-bold my-4'>The Problem</span>
            <span className='text-xl text-light my-3'>
              Globally, water-borne bacterial infections lead to half a million diarrhoeal-related deaths each
              year—more than 2,000 deaths every day. This is more than malaria and HIV-related deaths combined.
            </span>
            <span className='text-lg text-light my-3'>
              Testing water supplies for bacterial presence is therefore crucial, especially in remote and
              low-resource communities. Unfortunately, current water testing equipment is bulky, expensive, and
              takes at least a day to deliver results.
            </span>
          </div>
        </div>

        <div className='w-full flex items-center p-24'>
          <div className='flex flex-col w-1/2 text-xl'>
            <span className='font-semibold text-3xl'>Our Solution</span>
            <span className='my-2'>
              To tackle this problem, IsokoWater® has developed an innovative water testing system, enabling
              inclusive access to smart, easy-to-use, and reliable testing for bacterial presence in drinking
              water.
            </span>
            <span className='my-2'>
              Using robust materials and machine learning technology which automatically counts bacterial
              colonies such as E.coli, the testing system can be used anywhere—from the lab to the field—and can
              return results in less than 18 hours.
            </span>
            <button className='my-2 bg-primary w-fit px-4 py-2 text-white'>Learn More</button>
          </div>
          <div className='w-1/2 flex items-center justify-center'>
            <Image alt="case" src={Case} className='w-96' />
          </div>
        </div>

        <div className='w-full bg-gray-100 flex flex-col pb-24 pt-12 px-12 items-center'>
          <span className='font-semibold text-4xl my-6'>Our Technology</span>
          <div className='w-full flex justify-center'>
            {
              solutions.map((solution, index) => (
                <div key={index} className='w-1/3 mx-3 my-4 flex flex-col items-center'>
                  <Image src={solution.image} className='w-36' alt={solution.description} />
                  <span className='text-xl font-light my-4'>
                    {solution.description}
                  </span>
                </div>
              ))
            }
          </div>
          <button className='w-fit px-4 py-2 rounded bg-primary text-white my-6'>Read more about our technology</button>
        </div>

        <div className='w-full flex p-24 items-center justify-between'>
          <div className='mx-4 bg-design w-1/2 flex items-center justify-center h-96'></div>
          <div className='flex flex-col w-4/12 mx-4'>
            <span className='text-2xl font-semibold my-6'>User-Centred Design</span>
            <span className='my-4 font-light text-xl text-center'>
              We believe in a bottom-up approach, encouraging communities in low- and middle-income countries to
              test their water autonomously, allowing for education, job creation, inclusive participation and
              community development.
            </span>
            <span className='my-4 font-light text-xl text-center px-16'>
              Our user-centred design is simple—from sample collection to data processing—and can be used by
              anyone, anywhere in the world.
            </span>
          </div>
        </div>

        <div className='flex flex-col w-full items-center'>
          <div className="w-full flex px-24">
            <div className="w-1/3">
              <Image src={SDGs} alt='SDGs' className='object-cover' />
            </div>
            <div className="w-1/3">
              <Image src={Web6} alt='Web 6' className='object-cover' />
            </div>
            <div className="w-1/3 flex flex-col border-l-4 border-l-gray-400 pl-12 items-center justify0center">
              <span className="text-xl font-light">
                Sustainable Development Goal (SDG) number 6 is to &apos;ensure availability and sustainable
                management of water and sanitation for all.&apos;
                IsokoWater® wants to play our part in this global initiative.
              </span>
            </div>
          </div>
          <button className='bg-primary px-4 py-2 my-6 rounded text-white'>Read more about the SDGs</button>
        </div>


        <div className='flex flex-col items-center p-24'>
          <span className='text-2xl font-bold my-6'>Our Partners</span>
          <span className='text-xl font-light'>IsokoWater is proud to work with NGOs, governments, and
            corporate partners to share and spread its impact around the world.
          </span>
          <div className='w-full grid grid-cols-4'>
            {
              partners.map((partner, index) => (
                <div className='flex items-center justify-center w-8/12 mx-auto' key={index}>
                  <Image className='w-10/12' src={partner.image} alt={partner.name} />
                </div>
              ))
            }
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default index