import React, { useEffect, useRef, useState } from 'react';

const Philosophy: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Option to switch between display modes
  const [displayMode, setDisplayMode] = useState<'cover' | 'contain' | 'artistic'>('artistic');
  
  useEffect(() => {
    // Ensure video plays after load
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.onloadeddata = () => {
        videoElement.play().catch(err => {
          console.error("Error playing video:", err);
        });
      };
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden font-display">
      {/* Video Background with different styling options */}
      <div className="absolute inset-0">
        {displayMode === 'cover' && (
          <video 
            ref={videoRef}
            className="absolute inset-0 object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/philosophy-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {displayMode === 'contain' && (
          <video 
            ref={videoRef}
            className="absolute inset-0 object-contain w-full h-full bg-black"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/philosophy-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {displayMode === 'artistic' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="relative w-auto h-full max-w-full flex items-center justify-center">
              <video 
                ref={videoRef}
                className="h-full max-h-full w-auto"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/philosophy-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Blurred duplicate video for background fill effect */}
              <video 
                className="absolute inset-0 w-full h-full object-cover filter blur-lg opacity-50 scale-110"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/philosophy-background.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </div>
      
      {/* Content with text shadow for better readability - positioned lower on the screen */}
      <div className="relative z-10 flex flex-col items-center justify-end w-full h-full px-10 text-center pb-32">
        <h1 className="text-5xl font-bold tracking-tighter text-white leading-tight mb-6 max-w-3xl mx-auto max-md:text-4xl max-md:leading-[54px] max-sm:text-3xl max-sm:leading-10"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
        >
          Our philosophy: joy in creation
        </h1>
        
        {/* Display mode toggle - remove in production */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button 
            onClick={() => setDisplayMode('cover')}
            className={`px-3 py-1 text-xs rounded ${displayMode === 'cover' ? 'bg-white text-black' : 'bg-black bg-opacity-50 text-white'}`}
          >
            Cover
          </button>
          <button 
            onClick={() => setDisplayMode('contain')}
            className={`px-3 py-1 text-xs rounded ${displayMode === 'contain' ? 'bg-white text-black' : 'bg-black bg-opacity-50 text-white'}`}
          >
            Contain
          </button>
          <button 
            onClick={() => setDisplayMode('artistic')}
            className={`px-3 py-1 text-xs rounded ${displayMode === 'artistic' ? 'bg-white text-black' : 'bg-black bg-opacity-50 text-white'}`}
          >
            Artistic
          </button>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
