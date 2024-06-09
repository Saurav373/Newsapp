import React from 'react'
import News1 from '/News1.jpg'


const Card = ({ title, content, ImageUrl, sourceUrl, color }) => {
    const DefaultUrl = News1
    return (
        <div>
            <div
                className={`max-w-sm h-auto ${(color == "white" ? "bg-white" : "bg-black")} border border-gray-200 rounded-lg shadow-lg`}>
                <div className="object-cover h-52">
                    <img className="rounded-t-lg object-center w-full h-full" src={(ImageUrl) ? ImageUrl : DefaultUrl} alt="Loading..." />
                </div>
                <div className="p-4">

                    <h1 className={`mb-2 text-xl font-bold tracking-tight  ${(color == "white" ? "text-black" : "text-white")} `}>{title}</h1>

                    <p className={`mb-3 font-normal ${(color == "white" ? "text-black" : "text-white")}`}>{content}</p>
                    <a href={sourceUrl} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Card
