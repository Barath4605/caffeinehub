const VideoPlayer = ({ currentIndex, VideoLinks }) => {
  const nextIndex = (currentIndex + 1) % VideoLinks.length;

  return (
    <div className="absolute top-1/5 right-2 flex justify-end w-full">
      <div className="flex flex-col items-center">
        <video
          className="w-[330px] h-[180px] grayscale object-cover"
          src={VideoLinks[nextIndex].src}
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
