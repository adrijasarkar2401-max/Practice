import React from 'react'

const User = (props) => {
  return (
    <div style={{color:'white'}}> 
    {/* inline styling--> create an object inside an object */}
      {props.name}
    </div>
  )
}

export default User
