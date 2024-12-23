import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AuthScreen = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="hero-bg relative">
      {/* navbar */}

      <header className="w-full  h-auto flex justify-around py-4 items-center">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="" className="w-40 mt-2" />
        </Link>
        <button className="bg-red-500 rounded-sm p-1 tracking-wider text-white font-semibold text-sm">
          Sign In
        </button>
      </header>

      {/* hero section */}

      <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-lg mb-4">Watch anywhere. Cancel anytime.</p>
        <p className="mb-4">
          Ready to watch? Enter your email to create or restart membership.
        </p>

        <form className="flex flex-col md:flex-row gap-4 w-1/2">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
          />
          <button className="bg-red-600   px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
            Get Started <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>

      {/* separator */}

      <div className="h-2 w-full bg-[#232323]" />

      {/* 1st section */}

      <div className="py-10 px-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center md:flex-row flex-col px-4 md:px-2 gap-4">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Enjoy on your TV
            </h2>
            <p className="text-lg md:text-xl">
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>

          {/* right side */}
          <div className="flex-1 relative">
            <img
              src="/tv.png"
              alt="TV image"
              className="relative z-10 w-full h-auto"
            />

            <video
              loop
              playsInline
              autoPlay
              muted
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%]"
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="h-2 w-full bg-[#232323]" />

      {/* 2nd section */}

      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          {/* left side */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="/stranger-things-lg.png"
                alt="str things image"
                className="mt-4"
              />

              <div className="flex items-center gap-2 absolute bottom-5 left-1/2  -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
                <img
                  src="/stranger-things-sm.png"
                  alt="image"
                  className="h-full"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <span className="text-md lg:text-lg font-bold">
                      Stranger Things
                    </span>
                    <span className="text-sm text-blue-500">
                      Downloading...
                    </span>
                  </div>
                  <img src="/download-icon.gif" alt="" className="h-12" />
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Enjoy on your TV
            </h2>
            <p className="text-lg md:text-xl">
              Watch on Smart Tvs, PlayStation, Xbox, Chromecast, Apple TV,
              Blue-ray players, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="h-2 w-full bg-[#232323]" />

      {/* 3rd section */}

      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center md:flex-row flex-col px-4 md:px-2 gap-4">
          {/* Left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Watch everywhere
            </h2>
            <p className="text-lg md:text-xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>

          {/* Right side */}
          <div className="flex-1 relative overflow-hidden">
            {/* Image */}
            <img
              src="/device-pile.png"
              alt="device"
              className="relative z-50 w-full h-auto"
            />

            {/* Video */}
            <video
              loop
              playsInline
              autoPlay
              muted
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10rem] w-[63%] h-auto z-20"
            >
              <source src="/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="h-2 w-full bg-[#232323]" />

      {/* 4th section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2">
          {/* left */}
          <div className="flex-1 relative">
            <img src="/kids.png" alt="kids" className="mt-4" />
          </div>
          {/* right */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-xl font-extrabold mb-4">
              Create profiles for kids
            </h2>
            <p className="text-lg md:text-xl">
              Send kids on adventures with their favorite characters in a space
              made just for them-free with your membership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
