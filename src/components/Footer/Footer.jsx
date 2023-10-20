import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="container mx-auto py-6 lg:py-12">
        <div className="lg:flex lg:justify-between lg:items-start flex-wrap"> {/* Allow content to wrap on smaller screens */}
          <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left lg:text-lg"> {/* Adjusted margins and text size */}
            <div className="flex items-center ">
              <Link to="/" className="flex items-center">
                <img className="w-14" src="https://i.ibb.co/C51GJcr/m2i8-Z5-N4-H7-N4b1-K9.png" alt="logo" />
                <div className="text-3xl font-semibold ml-2">TastyTwirl</div>
              </Link>
            </div>
            <div className="text-gray-600 mt-4 lg:mt-0">
              <p className="mb-4">
                Solution for easy and flexible meal solutions for households. <br /> You can trust us anywhere through this platform.
              </p>
              <p>
                &copy; 2023 Made with <i className="bi bi-heart-fill text-red-500"></i> by&nbsp;
                <a href="" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primaryitemcolor">
                  JahidCodes
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-1 justify-between">
            <div className="lg:w-1/4 mt-6 lg:mt-0 lg:text-lg"> {/* Adjusted margins and text size */}
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="mb-2">Our Company</p>
              <p className="mb-2">Career</p>
              <p className="mb-2">Investors Relations</p>
              <p>Social Impact</p>
            </div>
            <div className="lg:w-1/4 mt-6 lg:mt-0 lg:text-lg "> {/* Adjusted margins and text size */}
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <div className="mb-4">
                <div> {/* Use flex layout to control the icon arrangement */}
                  <a href="" target="_blank" rel="noreferrer" className="inline-block lg:mr-4 lg:mb-0 mb-4">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a href="" target="_blank" rel="noreferrer" className="inline-block lg:mr-4 lg:mb-0 mb-4">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="" target="_blank" rel="noreferrer" className="inline-block">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-600 py-4">
        &copy; 2022 Made with <i className="bi bi-heart-fill text-red-500"></i> by&nbsp;
        <a href="" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primaryitemcolor">
          JahidCodes
        </a>
      </p>
    </div>
  );
};

export default Footer;
