import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.png";

const Hero = ({
  title = "NextGen Scholars Academy",
  subtitle = "Empowering Minds, Brightening Futures, and Transforming Lives",
  description = "Dedicated to advancing educational and career opportunities for young scholars from underserved and underrepresented communities, including refugees and immigrants.",
  primaryButton = { text: "Get Started", path: "/about" },
  secondaryButton = { text: "Learn More", path: "/about" },
}) => {
  return (
    <section className="text-gray-800 pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid layout: Logo left, Text right */}
        <div className="grid grid-cols-12 gap-2.5 items-center min-h-[40vh]">
          {/* Logo section - Left side */}
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 flex items-center justify-center lg:justify-start">
            <div className="flex items-center justify-center w-full -ml-8 lg:-ml-16 xl:-ml-24">
              <img
                src={logoImage}
                alt="NextGen Scholars Academy"
                className="h-96 sm:h-[28rem] lg:h-[32rem] xl:h-[36rem] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Text content section - Right side */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 -ml-8 lg:-ml-16 xl:-ml-24">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                {title}
              </h1>
              <p className="text-lg sm:text-xl lg:text-xl text-gray-700 mb-8 sm:mb-10 font-medium leading-relaxed">
                {subtitle}
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center lg:justify-start">
                <Link
                  to={primaryButton.path}
                  className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
                >
                  {primaryButton.text}
                </Link>
                <Link
                  to={secondaryButton.path}
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
                >
                  {secondaryButton.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
