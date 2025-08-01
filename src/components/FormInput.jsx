import { twMerge } from "tailwind-merge";


export default function FormInput({ labelText, name, type = "text", className = "", isTextArea = false, ...props }) {
    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{labelText}</label>
            {isTextArea ?
                <textarea
                    id={name} 
                    name={name}
                    className={twMerge("block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", className)}
                    {...props}
                />
                :
                <input
                    type={type}
                    id={name}
                    name={name}
                    className={twMerge("border border-black text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", className)}
                    {...props}
                />
            }
        </div>
    )
}
