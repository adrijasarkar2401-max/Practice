import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {

  return (
    <div className="h-full overflow-hidden relative w-70 rounded-4xl">
      {/* <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
      <img className="w-full h-full object-cover" src={props.img} alt="" />
      <RightCardContent tag={props.tag} id={props.id} color={props.color}/>

    </div>
  )
}

export default RightCard

