import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Info, Play } from "lucide-react";

const HomeScreen = () => {
  return (
    <>
      <div className="w-full realtive h-screen">
        <Navbar />

        <img
          src="/extraction.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover -z-50"
          alt="Hero img"
        />

        <div
          className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50"
          aria-hidden="true"
        />

        <div className="text-white absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
          <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10" />

          <div className="max-w-2xl">
            <h1 className="mt-4 text-6xl font-extrabold text-balance">
              Extraction
            </h1>
            <p className="mt-2 text-lg">2014 | +18</p>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              eligendi labore, ea odit corrupti inventore laudantium odio
              accusantium omnis quaerat?
            </p>
          </div>

          <div className="flex mt-8">
            <Link
              to="/watch/123"
              className="bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded-sm  mr-4 flex items-center transition-all"
            >
              <Play className="size-6 inline-block mr-2 fill-black" />
              Play
            </Link>
            <Link
              to="/watch/123"
              className="bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center transition-all"
            >
              <Info className="size-6 mr-2 " />
              More Info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
