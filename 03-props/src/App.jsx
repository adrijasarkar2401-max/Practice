import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className="parent">
       <Card user="Jyotishka" age={16} img="https://plus.unsplash.com/premium_photo-1742455147775-4f5f6c09011b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
       <Card user="Andolan" age={26} img="https://images.unsplash.com/photo-1781186854345-3df2fb9fcbfb?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
       {/* props-->properties */}
    </div>
  )
}
export default App
// app is the parent and card is the child
// you can send/pass data from parent to child not the other way round
// age is a number so it is passed using curly braces
