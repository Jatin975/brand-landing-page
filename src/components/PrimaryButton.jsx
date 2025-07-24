import React from 'react'

export default function PrimaryButton({ className, children, ...props }) {
    return (
        <button type="button" {...props}
            className={`focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 h-8 cursor-pointer mr-20 ${className}`}
        >{children}
        </button>
    )
}
