import ContactForm from '../components/ContactForm'
import ServiceImg from '../assets/Service.svg'

export default function Contact() {
  return (
    <div className='mx-10 md:mr-0 md:ml-24 xl:ml-40 mt-16'>
      <h1 className="font-extrabold text-5xl mb-5">CONTACT US</h1>
      <p className="font-semibold text-sm md:text-base text-gray-600 mb-10 md:pr-40 lg:pr-96">LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-start'>
        <ContactForm />
        <img src={ServiceImg} className='mb-14 md:mb-0 w-80 lg:w-[460px] xl:w-fit order-1 md:order-2' alt='Customer support' />
      </div>
    </div>
  )
}
