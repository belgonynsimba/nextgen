import Hero from '../components/Hero'
import Contact from '../components/Contact'

const Home = () => {
  const programs = [
    {
      title: "Technical Skills Training",
      items: [
        "IT and Cybersecurity",
        "Data Analytics", 
        "Software Development",
        "Digital Marketing"
      ]
    },
    {
      title: "Career Development",
      items: [
        "Resume Writing",
        "Interview Preparation",
        "Networking Skills",
        "Professional Etiquette"
      ]
    },
    {
      title: "Mentorship & Support",
      items: [
        "One-on-One Mentoring",
        "Industry Connections",
        "Career Guidance",
        "Alumni Network"
      ]
    }
  ]

  const objectives = [
    "Comprehensive training in technical and soft skills",
    "Professional development and career guidance",
    "High-quality internships with leading companies",
    "Strong alumni network for continued support"
  ]

  return (
    <div className="font-sans">
      <Hero />
      
      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                NextGen Scholars Academy is dedicated to equipping individuals with the skills, mentorship, and resources needed to excel in higher education and thrive in high-demand careers, especially in science, technology, engineering, and mathematics (STEM).
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through inclusive and comprehensive educational programs, workforce development initiatives, and leadership development, we aim to break down systemic barriers and create sustainable pathways to professional success.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Core Objectives</h3>
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {program.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default Home
