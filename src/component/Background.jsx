import React, { useRef, useEffect } from 'react';

function Background({data}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const start = data.start;
    const end = data.end;

    const handleLoaded = () => {
      video.currentTime = start;
      video.play();
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= end) {
        video.currentTime = start; // Kembali ke detik 5
        video.play();              // Play lagi dari detik 5
      }
    };

    video.addEventListener('loadedmetadata', handleLoaded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const polkadotStyle = {
    backgroundImage: 'radial-gradient(rgba(0,0,0,0.2) 1px, transparent 1px)',
    backgroundSize: '6px 6px',
    pointerEvents: 'none',
  };

  return (
    <div className="absolute w-full h-screen -z-10">
      {/* VIDEO LOOP MANUAL 5s–10s */}
      <video
        ref={videoRef}
        src={data.src}
        className="fixed top-0 left-0 w-full h-full object-cover brightness-50 -z-20"
        muted
        playsInline
      ></video>

      {/* POLKADOT */}
      <div className="fixed inset-0 z-0" style={polkadotStyle}></div>

      {/* IMAGE */}
      <img
        src="./src/assets/more/kiri.png"
        className="w-[50%] md:w-auto md:h-[95vh] opacity-80 fixed top-8 -left-1 -z-10"
        alt=""
      />
      <img
        src="./src/assets/more/kanan.png"
        className="w-[50%] md:w-auto md:h-[95vh] opacity-80 fixed bottom-8 md:top-8 right-0 -z-10"
        alt=""
      />
    </div>
  );
}

export default Background;
