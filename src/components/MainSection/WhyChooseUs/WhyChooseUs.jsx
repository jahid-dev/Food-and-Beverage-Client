

const WhyChooseUs = () => {
  return (
    <section id="why">
      <div className="container mx-auto py-8 bg-opacity-60">
        <div className="text-center" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="700">
          <h2 className="text-4xl font-semibold text-primaryitemcolor">Why choose us</h2>
          <p className="text-base text-textcolor">This is what makes our product different</p>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white text-center flex flex-col items-center p-10 shadow-card_one m-4" data-aos="zoom-in" data-aos-easing="ease-out" data-aos-duration="700" data-aos-delay="100">
            <div className="card_image_div">
              <img src='https://i.ibb.co/fvvQtmZ/hamburger-9d6855e1535bd7831a905fe10a5ca642.png' alt="Hamburger" />
            </div>
            <div className="card_text_div mt-5">
              <h5 className="text-lg font-semibold">Easy to order</h5>
              <p className="text-base">Order food at a single click and select all food to order at any point in time and at ease and comfort</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 bg-white text-center flex flex-col items-center p-10 shadow-card_two m-4" data-aos="zoom-in" data-aos-easing="ease-out" data-aos-duration="700" data-aos-delay="200">
            <div className="card_image_div">
              <img src='https://i.ibb.co/Hzz6HLC/delivery-man-9a7ecb682383b4f41e7357b41fa3b117.png' alt="Delivery man" />
            </div>
            <div className="card_text_div mt-5">
              <h5 className="text-lg font-semibold">Fast delivery</h5>
              <p className="text-base">Food delivery fast and reliable and get delivered at delivery time and location any day, any time</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 bg-white text-center flex flex-col items-center p-10 shadow-card_three m-4" data-aos="zoom-in" data-aos-easing="ease-out" data-aos-duration="700" data-aos-delay="300">
            <div className="card_image_div">
              <img src='https://i.ibb.co/0DfN1N3/top-food-384057d3fd5154bb9f3a133bad70e3a5.png' alt="Thumbs up" />
            </div>
            <div className="card_text_div mt-5">
              <h5 className="text-lg font-semibold">100% quality</h5>
              <p className="text-base">We provide quality food for you and your loved ones for health and wellness.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
