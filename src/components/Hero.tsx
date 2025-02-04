import { Play, Info } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[95vh]">
      <div className="absolute w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a56f-c56e215ac65a/PK-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Featured"
          className="w-full h-full object-cover brightness-[60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent" />
      </div>
      
      <div className="absolute bottom-[25%] left-4 md:left-16 space-y-4 max-w-xl">
        <img 
          src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcZdjwbOuc_lYGrXDPCB_Rx0LT3KKbhUHww0e0kq7mQHk14uS1IZKTGDzV_yg0Hs_Qz9cG8EKmQGl1n7mQUFN_TLhHQXhPtlYKch.png?r=2c8"
          alt="Title"
          className="w-[90%] md:w-[60%] drop-shadow-xl"
        />
        <p className="text-white text-sm md:text-lg max-w-xl drop-shadow-lg">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        <div className="flex items-center space-x-3">
          <button className="flex items-center gap-2 bg-white text-black px-4 md:px-8 py-2 rounded font-semibold hover:bg-white/90 transition">
            <Play className="w-6 h-6" />
            Play
          </button>
          <button className="flex items-center gap-2 bg-gray-500/70 text-white px-4 md:px-8 py-2 rounded font-semibold hover:bg-gray-500/50 transition">
            <Info className="w-6 h-6" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;