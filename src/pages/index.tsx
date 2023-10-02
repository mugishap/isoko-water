import { Case } from '@/assets'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { solutions } from '@/utils/data'
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
        <span className='font-light text-lg text-slate-700 my-4'>We're overcoming global water inequality by breaking barriers to reliable bacterial testing.</span>
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
              To tackle this problem, WaterScope® has developed an innovative water testing system, enabling
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

        <div className='w-full flex px-24 items-center'></div>

      </div>
      <Footer />
    </div>
  )
}

export default index