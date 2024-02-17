import React from 'react'
import homepageimg from '../assets/membership.jpg'
import second from '../assets/img1.jpg'
import second1 from '../assets/img2.jpg'
import second2 from '../assets/img3.jpg'
import { Carousel, Card } from 'flowbite-react';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  function clickHandler() {
    navigate('/login')
  }
  return (
    <>
    <Navbar />
    <div className='px-5 sm:px-32'>
      <h1 className=' pt-8 font-semibold text-3xl'>New Arrival</h1>
      <div className='flex  py-4 gap-2 font-semibold'>
        <div className='border-black border-b-2'>Join</div>
        <div>Now</div>
      </div>
      <div className='sm:flex w-full '>

        <div className='sm:w-7/12 w-full sm:h-screen h-auto flex flex-col  items-center pt-6 p-8'>
          <div>
            <img src={homepageimg} className='w-auto h-96 object-cover' alt="" />
          </div>
          <div className='w-full flex justify-center py-6'>
            <button className='w-72 h-auto p-1 rounded-[50px] bg-gray-300 text-blue-500 border-gray-400 border-2' onClick={clickHandler}>JOIN NOW</button>
          </div>
        </div>


        <div className='w-full h-screen flex flex-col  items-center'>
          <div className='text-3xl font-semibold text-green-400 pb-6'>Unlock Premium Features Now</div>
          <div className="h-64 w-full sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              {/* Display 3 cards in a row on screens larger than the small breakpoint */}
              <div className='sm:flex justify-center bg-white p-7'>
                {/* First Card */}
                <Card className="m-2" imgSrc={second}>
                <div className='flex flex-col items-center justify-center'>
                    <h1>Lower</h1>
                    <h1>Interest Rate</h1>
                  </div>
                </Card>
                {/* Second Card */}
                <Card className="m-2" imgSrc={second1}>
                  
                  <div className='flex flex-col items-center justify-center'>
                    <h1>Interest</h1>
                    <h1>Free Payments</h1>
                  </div>
                </Card>
                {/* Third Card */}
                <Card className="m-2" imgSrc={second2}>
                  <div className='flex flex-col items-center justify-center'>
                    <h1>Discount</h1>
                    <h1>On Materials</h1>
                  </div>
                </Card>
              </div>
              {/* Display only one card on mobile screens */}
              {/* <div className='flex justify-center bg-white sm:hidden'>
                <Card className="p-8" imgSrc={second}>
                  <div className='flex flex-col items-center justify-center'>
                    <h1>Lower</h1>
                    <h1>Interest Rate</h1>
                  </div>
                </Card>
              </div> */}
              <div className='sm:flex justify-center bg-white p-7'>
                {/* First Card */}
                <Card className="m-2" imgSrc={second}>
                <div className='flex flex-col items-center justify-center'>
                    <h1>Lower</h1>
                    <h1>Interest Rate</h1>
                  </div>
                </Card>
                {/* Second Card */}
                <Card className="m-2" imgSrc={second1}>
                  
                  <div className='flex flex-col items-center justify-center'>
                    <h1>Interest</h1>
                    <h1>Free Payments</h1>
                  </div>
                </Card>
                {/* Third Card */}
                <Card className="m-2" imgSrc={second2}>
                  
                  <div className='flex flex-col items-center justify-center'>
                    <h1>Discount</h1>
                    <h1>On Materials</h1>
                  </div>
                </Card>
              </div>
              <div className='sm:flex justify-center bg-white p-7'>
                {/* First Card */}
                <Card className="m-2" imgSrc={second}>
                <div className='flex flex-col items-center justify-center'>
                    <h1>Lower</h1>
                    <h1>Interest Rate</h1>
                  </div>
                </Card>
                {/* Second Card */}
                <Card className="m-2" imgSrc={second1}>
                  
                  <div className='flex flex-col items-center justify-center'>
                    <h1>Interest</h1>
                    <h1>Free Payments</h1>
                  </div>
                </Card>
                {/* Third Card */}
                <Card className="m-2" imgSrc={second2}>
                  
                  <div className='flex flex-col items-center justify-center'>
                    <h1>Discount</h1>
                    <h1>On Materials</h1>
                  </div>
                </Card>
              </div>
            </Carousel>

          </div>
          <div>
            <div className='w-full flex flex-col  items-center gap-5'>
              <button className='w-72 h-auto p-1 rounded-[50px] bg-green-600 text-white border-gray-400 border-2'>UNLOCK NOW</button>
              <button className='w-64 h-auto p-1 rounded-[50px] bg-green-600 text-white border-gray-400 border-2'>DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default HomePage