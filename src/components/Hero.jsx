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
    <section className="text-gray-800 pt-32 pb-20 relative bg-white">
      {/* Logo positioned at top-left of hero section */}
      <div className="absolute top-16 left-0 bottom-0 flex items-start">
        <img
          src={logoImage}
          alt="NextGen Scholars Academy"
          className="h-full w-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Main content centered */}
        <div className="text-center pt-16">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-2xl mb-4">{subtitle}</p>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{description}</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to={primaryButton.path}
              className="text-white px-8 py-3 rounded-md font-semibold transition-colors"
              style={{ backgroundColor: "#1e40af" }}
            >
              {primaryButton.text}
            </Link>
            <Link
              to={secondaryButton.path}
              className="border-2 px-8 py-3 rounded-md font-semibold transition-colors"
              style={{ borderColor: "#1e40af", color: "#1e40af" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#1e40af";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#1e40af";
              }}
            >
              {secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
