import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  // console.log(props.users);
  return (
    <div id='right' className='h-full rounded-4xl p-6 w-2/3 flex flex-nowrap gap-10 overflow-x-auto'>
      {/* <RightCard /> */}
      {props.users.map(function(val,idx){
        return <RightCard key ={idx} id={idx} img={val.img} tag={val.tag} color={val.color}/>;
      })}
    </div>
  )
}

export default RightContent
