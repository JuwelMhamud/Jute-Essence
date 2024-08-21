const Banner = () => {
  return (
    <div
      className="hero min-h-[70vh] rounded-lg"
      style={{
        backgroundImage: "url(https://i.ibb.co/zrNvJc3/wicker-3229896-960-720.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 ... inline-block text-transparent bg-clip-text">Modern Jute Craft</h1>
          <p className="mb-5">
            We offers contemporary, eco-friendly jute designs perfect for adding
            a stylish, natural touch to your home. Discover beautifully crafted
            pieces that blend traditional artistry with modern aesthetics,
            bringing warmth and elegance to any space.
          </p>
          <button className="btn bg-gradient-to-r from-amber-400 to-orange-400 border-none text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
