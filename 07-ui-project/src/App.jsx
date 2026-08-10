import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'n',
      color: 'blue',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'i',
      color: 'green',
      tag: 'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: 'l',
      color: 'orange',
      tag: 'underbanked'
    }

  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
// feature based vs atomic-ready structures
// breaking the website into components/features like in a website when the whole navbar is considered a component
// and furthur breaking down the navbar into further components like the logo(comp1) home(comp2) about(comp3) ia atomic based architecture