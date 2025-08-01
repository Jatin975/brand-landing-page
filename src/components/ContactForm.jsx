import chatWhite from '../assets/chat_white.png';
import chatBlack from '../assets/chat_black.png';
import phone from '../assets/phone.png';
import FormInput from './FormInput';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
    const navigate = useNavigate();
    const formData = useRef({
        email: "",
        name: "",
        feedback: ""
    });

    function handleFormDataChange(name, event) {
        let inputValue = event.target.value;
        formData.current[name] = inputValue;
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log("form data", formData.current);
        navigate("/");
    }
    
    return (
        <div className='md:w-[500px] order-2 md:order-1'>
            <div className='flex flex-col md:flex-row gap-5 mb-3'>
                <button type="button" className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 md:w-1/2 flex justify-center gap-2 cursor-pointer items-center mr-0"><img src={chatWhite} alt='chat icon' /> VIA SUPPORT CHAT</button>
                <button type="button" className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 md:w-1/2 flex justify-center gap-2 cursor-pointer mr-0 items-center"><img src={phone} alt='phone icon' /> VIA CALL</button>
            </div>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full flex justify-center gap-2"><img src={chatBlack} alt='phone icon' /> VIA EMAIL FORM</button>
            <form className='mt-8 flex flex-col justify-center items-center gap-6' onSubmit={handleFormSubmit}>
                <div className='w-full flex flex-col gap-4'>
                    <FormInput name={"name"} type={"text"} labelText={"Name"} onChange={(e) => handleFormDataChange("name", e)} placeholder="John Doe" required />
                    <FormInput name={"email"} type={"email"} labelText={"E-Mail"} onChange={(e) => handleFormDataChange("email", e)} placeholder="johndoe@gmail.com" required />
                    <FormInput name={"feedback"} labelText={"Feedback"} isTextArea rows={5} onChange={(e) => handleFormDataChange("feedback", e)} placeholder="Write your thoughts" required />
                </div>
                <button type="submit" className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full md:w-1/2 flex justify-center gap-2 cursor-pointer mr-0">Submit</button>
            </form>
        </div>
    )
}
