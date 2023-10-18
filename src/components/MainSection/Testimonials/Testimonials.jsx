const Testimonials = () => {
    return (
      <section id="testimonials">
        <div className="container mx-auto py-8 bg-opacity-60">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
          >
            <h2 className="text-4xl font-semibold">Testimonials</h2>
            <p className="text-base text-black">This is what our clients are saying</p>
          </div>
  
          <div className="lg:flex lg:flex-row lg:justify-between lg:space-x-4 mt-8 space-y-6 lg:space-y-0">
            {/* Testimonial 1 */}
            <div
              className="lg:w-1/3 text-left"
              data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="700"
              data-aos-delay="150"
            >
              <div className="px-2">
                <h4 className="text-lg font-semibold">Paul James</h4>
                <p className="text-base text-black">Lagos state</p>
                <p className="text-base text-black">
                  With a Homely Eats meal, you can serve delectable, home-cooked
                  meals to your family and friends in any location, anytime, any day!
                </p>
              </div>
            </div>
  
            {/* Testimonial 2 */}
            <div
              className="lg:w-1/3 text-left"
              data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="700"
              data-aos-delay="300"
            >
              <div className="px-2">
                <h4 className="text-lg font-semibold">Mercy Jude</h4>
                <p className="text-base text-black">Kogi state</p>
                <p className="text-base text-black">
                  Be it a small gathering of friends or a large event with
                  hundreds of people, you'll always be prepared, whether you're at
                  home or on the go.
                </p>
              </div>
            </div>
  
            {/* Testimonial 3 */}
            <div
              className="lg:w-1/3 text-left"
              data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="700"
              data-aos-delay="450"
            >
              <div className="px-2">
                <h4 className="text-lg font-semibold">Lara One</h4>
                <p className="text-base text-black">Imo state</p>
                <p className="text-base text-black">
                  No need to worry about any of this anymore with your app. Homely
                  Eats are made with the highest quality ingredients for you and
                  your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  