import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Head from 'next/head'

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

        <div className='w-full'></div>

      </div>
      <Footer />
    </div>
  )
}

export default index