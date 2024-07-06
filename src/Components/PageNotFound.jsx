import React, { useEffect } from 'react'

const PageNotFound = ({ setProgress,color }) => {
    useEffect(() => {
        setProgress(100)
    }, [])
    return (
        <div className={`flex flex-col gap-5 items-center text-${color=='white'?'black':'white'}`}>
            <h1 className='text-4xl font-bold mt-[20%]'>404</h1>
            <h1 className='text-4xl font-bold font-mono'>
                Page Not Found
            </h1>
        </div>
    )
}

export default PageNotFound
