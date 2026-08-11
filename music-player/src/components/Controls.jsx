import React from 'react'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'
const Controls = ({audioRef}) => {
        const handlePlay = () => {
            audioRef.current.play();
        };

        const handlePause = () => {
            audioRef.current.pause();
        };

        return (
            <div className='flex items-center justify-center gap-4'>
                <button className='text-white hover:text-gray-300'><SkipBack size={28} /></button>
                <button onClick={handlePlay} className='text-white hover:text-gray-300'><Play size={32} /></button>
                <button onClick={handlePause} className='text-white hover:text-gray-300'><Pause size={32} /></button>
                <button className="text-white hover:text-gray-300"><SkipForward size={28} /></button>
            </div>
        )
    }

    export default Controls
