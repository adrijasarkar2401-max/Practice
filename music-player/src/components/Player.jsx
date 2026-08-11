import { useRef } from 'react'
import playlist from '../data/playlist';
import SongInfo from './SongInfo';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

const Player = () => {
    const currentSongIndex = 0;
    const currentSong = playlist[currentSongIndex];
    const audioRef = useRef(null);
    return (
        <div className="w-full max-w-md rounded-2xl bg-blue-200 p-6 shadow-2xl">
            <h1 className="mb-8 text-center text-2xl font-bold text-gray-900">Music Player</h1>
            <SongInfo song={currentSong} />
            <ProgressBar  />
            <Controls audioRef={audioRef} />
            <audio
                ref={audioRef}
                src={currentSong.src} />
            {/* <audio controls src={currentSong.src}></audio> */}
        </div>
    )
}

export default Player
