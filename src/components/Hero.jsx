import { Link } from 'react-router-dom'

const Hero = ({ 
  title = "NextGen Scholars Academy",
  subtitle = "Empowering Minds, Brightening Futures, and Transforming Lives",
  description = "Dedicated to advancing educational and career opportunities for young scholars from underserved and underrepresented communities, including refugees and immigrants.",
  primaryButton = { text: "Get Started", path: "/apply" },
  secondaryButton = { text: "Learn More", path: "/about" }
}) => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-2xl mb-4">{subtitle}</p>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link 
            to={primaryButton.path}
            className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 font-semibold transition-colors"
          >
            {primaryButton.text}
          </Link>
          <Link 
            to={secondaryButton.path}
            className="border-2 border-white px-8 py-3 rounded-md hover:bg-blue-700 font-semibold transition-colors"
          >
            {secondaryButton.text}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
