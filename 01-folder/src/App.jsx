/*function App(){
  return <h1>kaise ho app log</h1>
}
export default App */

import React from 'react'

const App = () => {
  return (
    <div>
      <div id="parent">
        <h1 id="child1">hello</h1>
        <h2 id="child2">hello</h2>
      </div>
      <div id="uncle">
      </div>
    </div>
  )
}

// we cannot pass multiple divs

export default App 

// or
const App2 = () => {
  return (
    <>
      <div id="parent">
        <h1 id="child1">hello</h1>
        <h2 id="child2">hello</h2>
      </div>
      <div id="uncle">
      </div>
    </>// empty tags(wrapper)
  )
}

/* import React from 'react'

const App = () => {
  return (
    <div>
      App
    </div>
  )
}

export default App*/

