function Hero() {
  return (
    <div className="hero-content">
      <video
        className="hero-video"
        autoPlay="autoplay"
        id="coverVideo"
        loop="loop"
        muted="muted"
        playsInline="playsinline"
        poster="https://static.spotapps.co/web/formasantamonica--com/custom/video_poster.jpg"
      >
        <source
          src="https://static.spotapps.co/website_videos/Forma%20V1%20Edited_Vimeo%20720p30.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Hero;
