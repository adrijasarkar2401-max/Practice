import React from 'react'

const RightCardContent = (props) => {
    return (
        <div>
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center hover:bg-gray-300'>{props.id + 1}</h2>
                {/* <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2> */}
                <div>
                    <p className='text-xl text-shadow-2xs leading-tight mt-30 text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laboriosam,
                        ipsa laborum tempora libero blanditiis.</p>
                </div>
                <div className='flex justify-between'>
                    {/* <button className='bg-blue-600 text-white font-medium rounded-full px-8 py-2'>Satisfied</button> */}
                    {/* <button className='bg-blue-600 text-white font-medium rounded-full px-8 py-2 hover:bg-blue-400'>{props.tag}</button> */}
                    {/* <button className='bg-blue-600 text-white font-medium rounded-full px-3 py-2 hover:bg-blue-400'><i className="ri-arrow-right-line"></i></button> */}

                    <button style={{backgroundColor:props.color}} className= 'text-white font-medium rounded-full px-8 py-2'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium rounded-full px-3 py-2' ><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
