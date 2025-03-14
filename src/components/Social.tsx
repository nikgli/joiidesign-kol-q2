import React, { useEffect } from 'react';
import '../app.css';

// Placeholder images - replace with your actual social media video thumbnails/embeds
import socialImage1 from "../assets/glowing-mushroom-lamp-ig.jpg";
import socialImage2 from "../assets/origami-stool-tk.jpg";

interface SocialVideo {
  platform: 'tiktok' | 'instagram';
  thumbnail?: string; // Made optional since we might generate it
  title: string;
  description: string;
  views: string;
  link: string;
  videoId?: string; // Added videoId property for embedding
}

function Social() {
  // Sample data with more realistic metrics and added videoId for the featured video
  const popularVideos: SocialVideo[] = [
    {
      platform: 'tiktok',
      thumbnail: socialImage1,
      title: "Soft lights, bold impact",
      description: "The perfect ambient lighting for your evening relaxation",
      views: "1.3K",
      link: "https://www.tiktok.com/@joii.design/video/7478346414293011734",
      videoId: "7478346414293011734" // Extracted from the URL
    },
    {
      platform: 'instagram',
      thumbnail: socialImage1,
      title: "Glowing Mushroom Lamp in Action",
      description: "Makes your space feel cozy and inviting.",
      views: "1.7K",
      link: "https://www.instagram.com/reel/DEfWl6UIZcZ"
    },
    {
      platform: 'tiktok',
      thumbnail: socialImage2, // Using socialImage2 for the TikTok video thumbnail
      title: "Joii Origami Stool",
      description: "A simple, elegant stool that folds up to save space.",
      views: "1k",
      link: "https://www.tiktok.com/@joii.design/video/7472403774640819478",
      videoId: "7472403774640819478" // Extracted from the URL
    }
  ];

  const featuredVideo = popularVideos[0]; // First video is the featured one

  // Effect to load TikTok embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section data-theme="joiidesign" className="overflow-hidden font-display pt-2 pb-10 px-10 max-md:px-5 max-md:pt-2 max-md:pb-4 max-sm:p-4">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight leading-9 text-black max-sm:text-3xl max-sm:leading-8">
            Connect with us
          </h2>
          <p className="text-xl tracking-tight leading-8 text-black text-opacity-80 mt-4 max-sm:text-base max-sm:leading-6">
            Discover our design journey and get inspired by following us on social media
          </p>
        </div>

        {/* Featured Video Section - Using DaisyUI Phone Mockup */}
        <div className="flex flex-col lg:flex-row font-display gap-10 lg:p-6 mx-auto mb-16 bg-white">
          {/* Featured Video - Phone mockup for lg screens and up, normal embed for smaller screens */}
          <div className="lg:w-1/2 flex justify-center items-center">
            {/* Phone mockup for larger screens (lg and up) */}
            <div className="hidden lg:block w-full">
              <div className="mockup-phone border-primary mx-auto ml-12">
                <div className="mockup-phone-camera"></div>
                <div className="mockup-phone-display pt-4 px-0 pb-0 overflow-hidden">
                  {featuredVideo.videoId && (
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${featuredVideo.videoId}?autoplay=0`}
                      style={{
                        width: '100%',
                        height: 'calc(100% - 16px)',
                        border: 'none',
                        display: 'block'
                      }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  )}
                </div>
              </div>
            </div>

            {/* Regular video embed for smaller screens (md and below) */}
            <div className="lg:hidden w-full mx-auto">
              {featuredVideo.videoId && (
                <div className="relative w-full max-w-[320px] md:max-w-[380px] mx-auto overflow-hidden">
                  {/* Use padding-bottom for aspect ratio (9:16 = 56.25% × 16/9 = 177.78%) */}
                  <div className="pb-[177.78%]"></div>
                  <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${featuredVideo.videoId}?autoplay=0`}
                      className="absolute inset-0 w-full h-full border-0 overflow-hidden"
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Featured Video Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tighter text-black max-md:text-2xl max-sm:text-xl">
                {featuredVideo.title}
              </h3>
              <p className="text-xl tracking-tight leading-8 text-black text-opacity-80 max-sm:text-base max-sm:leading-6">
                {featuredVideo.description}
              </p>
              <div className="flex items-center text-black text-opacity-60 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>{featuredVideo.views} views</span>
              </div>
              <div className="pt-4">
                <a 
                  href={featuredVideo.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-accent text-lg font-medium tracking-tight h-[52px] px-8"
                >
                  Watch on {featuredVideo.platform === 'tiktok' ? 'TikTok' : 'Instagram'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* More Content Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold tracking-tighter text-black mb-6 max-md:text-xl max-sm:text-lg">
            More from Joii Design
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {popularVideos.slice(1).map((video, index) => (
              <div key={index} className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Thumbnail */}
                <div className="relative w-full sm:w-40 md:w-48 xl:w-64 aspect-square sm:aspect-auto sm:h-40 md:h-48 xl:h-64 flex-shrink-0 group overflow-hidden">
                  {video.thumbnail ? (
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">No thumbnail</span>
                    </div>
                  )}
                  <div className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-white text-xs ${video.platform === 'tiktok' ? 'bg-black' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}>
                    {video.platform === 'tiktok' ? 'TikTok' : 'Instagram'}
                  </div>
                  
                  {/* Play button overlay */}
                  <a 
                    href={video.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex justify-center items-center"
                  >
                    <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center transform opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 delay-75 ease-out">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 xl:h-8 xl:w-8 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 ease-out" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </a>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold tracking-tighter text-black mb-2 max-sm:text-base">
                      {video.title}
                    </h4>
                    <p className="text-sm tracking-tight leading-5 text-black text-opacity-80 mb-2">
                      {video.description}
                    </p>
                    <div className="flex items-center text-black text-opacity-60 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>{video.views} views</span>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Social;
