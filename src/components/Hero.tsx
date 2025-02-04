import { Play, Info } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="Featured"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
      
      <div className="absolute bottom-[20%] left-4 md:left-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">
          Stranger Things
        </h1>
        <p className="text-white text-lg md:text-xl max-w-xl">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        <div className="flex space-x-4">
          <button className="flex items-center px-6 py-2 bg-white text-black rounded hover:bg-white/90 transition">
            <Play className="w-6 h-6 mr-2" />
            Play
          </button>
          <button className="flex items-center px-6 py-2 bg-gray-500/70 text-white rounded hover:bg-gray-500/50 transition">
            <Info className="w-6 h-6 mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;