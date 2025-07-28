import shoeImage from '../assets/shoe_image.png';
import flipkartLogo from '../assets/flipKart_logo.png';
import amazonLogo from '../assets/amazon_logo.png';

export default function Home() {
  return (
    <main>
      <div className='flex justify-center items-center mt-20'>
        <div className='flex flex-col w-[200px] md:w-[600px] gap-9' >
          <h1 className='font-extrabold text-8xl'>YOUR FEET DESERVE THE BEST </h1>
          <p className='font-semibold text-lg text-gray-600'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className='flex gap-5'>
            <button type="button"
              className={"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-semibold rounded-sm text-xl dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 cursor-pointer py-2 px-5"}
            >
              Shop Now
            </button>
            <button type="button" class="text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-sm text-xl px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer">Category</button>
          </div>
          <p className='text-gray-600'>Also Available On</p>
          <div className='flex gap-4'>
            <a href="#">
              <img src={flipkartLogo} alt="Flipkart Logo" className='w-8 cursor-pointer' />
            </a>
            <a href="#">
              <img src={amazonLogo} alt="Flipkart Logo" className='w-8 cursor-pointer' />
            </a>
          </div>
        </div>

        <img src={shoeImage} className='w-3xl' alt='Shoe image' />
      </div>
    </main>
  )
}
