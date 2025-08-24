import { useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import HomepageModal from "./components/homepage-modal";
import VideoPlayer from "./components/videos";
import "./index.css";

const App = () => {
  const links = [
    { href: "#", label: "Coffee 101" },
    { href: "#", label: "Brewing 101" },
    { href: "#", label: "Beans 101" },
    { href: "#", label: "Our Top Picks" },
  ];

  const VideoLinks = [
    {
      src: "https://assets.mixkit.co/videos/3576/3576-720.mp4",
      tag: "perfect the art of steaming milk and creating silky microfoams",
    },
    {
      src: "https://assets.mixkit.co/videos/41859/41859-720.mp4",
      tag: "Master the art of pouring your soul into every latte.",
    },
    {
      src: "https://assets.mixkit.co/videos/47954/47954-720.mp4",
      tag: "Brew the extravagant shot of espresso",
    },
    {
      src: "https://videos.pexels.com/video-files/7301092/7301092-uhd_2560_1440_25fps.mp4",
      tag: "Learn how to use a French press to make rich, full-bodied coffee and much more...",
    },
    {
      src: "https://videos.pexels.com/video-files/6280329/6280329-uhd_2560_1440_25fps.mp4",
      tag: "Explore the world of coffee beans, it's origin, roasting techniques and its types.",
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
    <>
      <div className="absolute montserrat flex items-center space-x-5 z-10 justify-evenly w-full bottom-10">
        <div>
          <HomepageModal />
        </div>

        <div className="group flex items-center space-x-2 cursor-pointer p-1">
          <span className="font-semibold text-white/70 group-hover:text-white transition-all ease-in-out duration-500">
            {currentVideoTag}
          </span>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 group-hover:text-white transition-all duration-500"
          >
            <FiExternalLink />
          </a>
        </div>
        <div></div>
        <div></div>
      </div>

      <main className="relative h-screen bg-black">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            backgroundVideo: `url(${currentVideoSrc})`,
          }}
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
        <section className="absolute w-full">
          <div className="flex justify-between items-center p-3 px-5 text-white/60">
            <div>
              <h3 className="text-5xl font-bold">
                caffeinehub
                <span className="text-sm font-semibold">.com</span>{" "}
              </h3>
              <h2 className="text-xl font-light">For Caffeinated Heads</h2>
            </div>

            <div>
              <ul className="flex flex-wrap justify-center gap-5 p-2 text-white">
                {links.map((link) => (
                  <li key={link.label} className="text-white">
                    <a
                      href={link.href}
                      className="hover:border-white/60 border-b border-transparent p-1 transition-all ease-in-out duration-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <VideoPlayer
          currentIndex={VideoLinks.findIndex((v) => v.src === currentVideoSrc)}
          VideoLinks={VideoLinks}
          onSelect={skipToIndex}
        />
      </main>
    </>
  );
};

export default App;
