import React from 'react'
function SongInfo({ song }) {
  return (
    <section className="mb-6 text-center">
      <div className="mb-4 flex h-56 w-full items-center justify-center rounded-xl bg-gray-300">
        {/* <span className="text-6xl"></span> */}
      </div>

      <h2 className="text-2xl font-bold text-white">
        {song.title}
      </h2>

      <p className="mt-1 text-sm text-white">
        Now Playing
      </p>
    </section>
  );
}

export default SongInfo;