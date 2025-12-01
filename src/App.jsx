import { useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Link, Route, HashRouter as Router, Routes } from "react-router-dom";
import BeansPg from "./beans-101";
import BrewPg from "./brewing-101";
import CoffeePg from "./coffee-101";
import HomepageModal from "./components/homepage-modal";
import VideoPlayer from "./components/videos";
import "./index.css";

const App = () => {
  const links = [
    { href: "coffee-101", label: "Coffee 101" },
    { href: "brewing-101", label: "Brewing 101" },
  ];

  const VideoLinks = [
    {
      src: "https://assets.mixkit.co/videos/3576/3576-720.mp4",
      tag: "Keep the wand just under the surface until it 'hisses', then bury it to heat without making bubbles explode everywhere",
    },
    {
      src: "https://assets.mixkit.co/videos/41859/41859-720.mp4",
      tag: "Pour steady and low. Control the flow, don’t splash like a maniac.",
    },
    {
      src: "https://assets.mixkit.co/videos/47954/47954-720.mp4",
      tag: "use fine grind + 18–20g coffee and aim for ~25–30 sec. TOO fast = weak, TOO slow = bitter.",
    },
    {
      src: "https://videos.pexels.com/video-files/7301092/7301092-uhd_2560_1440_25fps.mp4",
      tag: "Use coarse grounds, pour hot water, wait 4 min, then press down slow and smooth for a clean, rich cup.",
    },
    {
      src: "https://videos.pexels.com/video-files/6280329/6280329-uhd_2560_1440_25fps.mp4",
      tag: "Light = bright & fruity, Medium = balanced & sweet, Dark = bold & smoky.",
    },
  ];

  const [currentVideoSrc, setCurrentVideoSrc] = useState(VideoLinks[0].src);
  const [currentVideoTag, setCurrentVideoTag] = useState(VideoLinks[0].tag);

  const videoRef = useRef(null);

  const skipToIndex = (index) => {
    const next = VideoLinks[index];
    setCurrentVideoSrc(next.src);
    setCurrentVideoTag(next.tag);
    setTimeout(() => {
      videoRef.current?.play?.().catch(() => {});
    }, 0);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="relative h-screen bg-black">
                <video
                  ref={videoRef}
                  className="absolute object-center top-0 left-0 w-full h-full object-cover"
                  src={currentVideoSrc}
                  muted
                  autoPlay
                  playsInline
                  onEnded={() => {
                    const currentIndex = VideoLinks.findIndex(
                      (v) => v.src === currentVideoSrc
                    );
                    const nextIndex = (currentIndex + 1) % VideoLinks.length;
                    setCurrentVideoSrc(VideoLinks[nextIndex].src);
                    setCurrentVideoTag(VideoLinks[nextIndex].tag);
                    setTimeout(() => {
                      videoRef.current?.play?.().catch(() => {});
                    }, 0);
                  }}
                />

                {/* nav n header */}
                <section className="absolute w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-center p-3 text-white/60">
                    <div className="text-center sm:text-left mb-2 sm:mb-0">
                      <h3 className="text-3xl sm:text-5xl font-bold">
                        caffeinehub
                        <span className="text-sm sm:text-base font-semibold">
                          .com
                        </span>
                      </h3>
                      <h2 className="text-lg lg:text-xl sm:text-xl font-light">
                        For Caffeinated Heads
                      </h2>
                    </div>
                    <div>
                      <ul className="flex flex-wrap justify-center montserrat gap-3 sm:gap-5 p-2 text-white">
                        {links.map((link) => (
                          <li key={link.label} className="text-white">
                            <Link
                              to={link.href}
                              className="hover:border-white/60 border-b border-transparent p-1 transition-all ease-in-out duration-500 text-sm underline lg:no-underline sm:text-base"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* bottom info */}
                <div className="absolute montserrat flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-5 z-10 justify-around w-full bottom-4 sm:bottom-10 px-4">
                  <HomepageModal />
                  <div className="group flex justify-center items-center h-[30px] lg:w-[600px] space-x-2 cursor-pointer p-1 text-center sm:text-left">
                    <div className="font-semibold text-white/70 m-auto group-hover:text-white transition-all ease-in-out duration-500 text-xs md:text-md sm:text-base">
                      {currentVideoTag}
                    </div>
                  </div>
                    <div></div>
                    <div></div>
                </div>

                <VideoPlayer
                  currentIndex={VideoLinks.findIndex(
                    (v) => v.src === currentVideoSrc
                  )}
                  VideoLinks={VideoLinks}
                  onSelect={skipToIndex}
                />
              </main>
            </>
          }
        />
        <Route path="/coffee-101" element={<CoffeePg />} />
        <Route path="/brewing-101" element={<BrewPg />} />
      </Routes>
    </Router>
  );
};

export default App;
