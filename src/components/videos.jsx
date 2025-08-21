const VideoPlayer = ({ currentIndex, VideoLinks, onSelect }) => {
  const nextIndex = (currentIndex + 1) % VideoLinks.length;

  return (
    <div className="absolute top-1/5 right-2 flex justify-end w-full">
      <div className="group flex flex-col items-center">
        <video
          className="w-[330px] h-[180px] grayscale rounded object-cover group-hover:grayscale-0 transition-all ease-in-out duration-400 cursor-pointer"
          src={VideoLinks[nextIndex].src}
          onClick={() => onSelect(nextIndex)}
          muted
          playsInline
        />
        <p className="text-white/60">tap to play next &rarr;</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
