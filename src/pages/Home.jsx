import shoeImage from '../assets/shoe_image.png';
import flipkartLogo from '../assets/flipKart_logo.png';
import amazonLogo from '../assets/amazon_logo.png';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const { isMobileView } = useOutletContext();

  return (
    <main>
      {!isMobileView ?
        <div className='flex justify-center items-center mt-20 px-20'>
          <div className='flex flex-col w-[200px] md:w-[600px] lg:gap-9 md:gap-6' >
            <h1 className='font-extrabold lg:text-8xl md:text-4xl'>YOUR FEET DESERVE THE BEST </h1>
            <p className='font-semibold lg:text-lg md:text-sm text-gray-600'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className='flex gap-5'>
              <button type="button"
                className={"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-semibold rounded-sm lg:text-xl md:text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 cursor-pointer py-2 px-5 md:w-30 lg:w-40"}
              >
                Shop Now
              </button>
              <button type="button" class="text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-sm lg:text-xl md:text-sm px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer md:w-30 lg:w-40">Category</button>
            </div>
            <p className='text-gray-600 md:text-sm lg:text-xl'>Also Available On</p>
            <div className='flex gap-4'>
              <a href="https://www.flipkart.com/">
                <img src={flipkartLogo} alt="Flipkart Logo" className='w-8 cursor-pointer' />
              </a>
              <a href="https://www.amazon.in/">
                <img src={amazonLogo} alt="Amazon Logo" className='w-8 cursor-pointer' />
              </a>
            </div>
          </div>

          <img src={shoeImage} className='lg:w-xl md:w-md' alt='Shoe image' />
        </div>
        :
        <div className='flex flex-col gap-8 justify-center items-center text-center mt-10 px-20'>
          <img src={shoeImage} className='w-sm' alt='Shoe image' />
          <h1 className='font-extrabold text-3xl'>YOUR FEET DESERVE THE BEST </h1>
          <p className='font-semibold text-sm text-gray-600'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className='flex flex-col items-center justify-center gap-3'>
            <button type="button"
              className={"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-semibold rounded-sm text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 cursor-pointer py-2 px-5 w-40"}
            >
              Shop Now
            </button>
            <button type="button" class="text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-sm text-sm px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer w-40">Category</button>
          </div>

          <p className='text-gray-600 text-sm'>Also Available On</p>
          <div className='flex justify-center gap-4 mb-5'>
            <a href="https://www.flipkart.com/">
              <img src={flipkartLogo} alt="Flipkart Logo" className='w-8 cursor-pointer' />
            </a>
            <a href="https://www.amazon.in/">
              <img src={amazonLogo} alt="Amazon Logo" className='w-8 cursor-pointer' />
            </a>
          </div>
        </div>
      }
    </main>
  )
}
