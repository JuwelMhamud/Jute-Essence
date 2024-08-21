const Newsletter = () => {
  return (
    <div className="container mx-auto mb-6" >
      <div
        className="hero min-h-72 rounded-lg"
        style={{
          backgroundImage: "url(https://i.ibb.co/92CmyHZ/rrr-10.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 ... inline-block text-transparent bg-clip-text">
              Get Our Latest Updates!
            </h1>
            <p className="mb-5">
              Subscribe our newsletter to get latest updates of our new
              discounts offers.
            </p>
            <div className="join">
              <input
                type="email"
                placeholder="username@gmail.com"
                className="input input-bordered join-item text-black"
              />
              <button className="btn bg-gradient-to-r from-amber-400 to-orange-400 border-none join-item text-white">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
