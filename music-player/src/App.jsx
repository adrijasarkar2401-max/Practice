import React from 'react'
import playlist from './data/playlist';
import Player from './components/Player';
const App = () => {
  return (
    <div className='flex item-center justify-center p-3'>
      <Player />
    </div>
  )
}

export default App
