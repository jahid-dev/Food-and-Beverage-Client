const HeroSection = () => {
    return (
      <section id="hero" className="bg-white">
        <div className="container mx-auto py-16 px-4">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 md:pr-10">
              <div className="text__div text-black">
                <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-6">
                  Enjoy <span>home-made meals</span> far away from home
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-6">
                  Helping you enjoy comfortable and healthy food anywhere and anytime on the go
                </p>
                <a href="#dishes" className="bg-primaryitemcolor text-white py-3 px-6 rounded-full text-lg md:text-xl lg:text-2xl hover:text-white hover:bg-primaryitemcolor">Order Now</a>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="https://i.ibb.co/3SWpWL2/Food-Image-ccbc8a18b3ce6a6bf1f5.webp"
                alt="Food pic"
                className="transition-transform transform hover:scale-105 mx-auto md:ml-auto w-full md:w-10/12 lg:w-9/12"
              />
            </div>
          </div>
          <div className="number__properties text-center mt-8 flex flex-wrap items-center justify-center">
            <div className="mb-4 md:mb-0 md:mr-8">
              <p className="text-2xl md:text-3xl font-semibold">500+</p>
              <p className="text-lg md:text-xl font-semibold text-gray-500">Food partners</p>
            </div>
            <div className="mb-4 md:mb-0 md:mx-8">
              <p className="text-2xl md:text-3xl font-semibold">1k+</p>
              <p className="text-lg md:text-xl font-semibold text-gray-500">orders delivered</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold">12k+</p>
              <p className="text-lg md:text-xl font-semibold text-gray-500">Clients</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  