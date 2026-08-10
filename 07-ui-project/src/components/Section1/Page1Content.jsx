import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  // console.log(props.users)
  return (
    <div className='pb-20 pt-6 gap-10 flex items-center justify-between h-[90vh]  px-18'>
        <LeftContent />
        <RightContent users={props.users}/>
      
    </div>
  )
}

export default Page1Content
