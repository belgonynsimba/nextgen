import Hero from '../components/Hero'
import Contact from '../components/Contact'
import { Code, Shield, BarChart3, Megaphone, Users, BookOpen, Briefcase, Award } from 'lucide-react'

const Training = () => {
  const programs = [
    {
      icon: Code,
      title: "Software Development",
      duration: "12 weeks",
      description: "Learn modern programming languages and frameworks including JavaScript, React, Node.js, and Python.",
      skills: ["JavaScript", "React", "Node.js", "Python", "Git", "Agile"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      duration: "10 weeks",
      description: "Master the fundamentals of cybersecurity, ethical hacking, and network security.",
      skills: ["Network Security", "Ethical Hacking", "Cryptography", "Incident Response", "Compliance"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      duration: "8 weeks",
      description: "Develop skills in data analysis, visualization, and statistical modeling.",
      skills: ["SQL", "Python", "Tableau", "Statistics", "Machine Learning", "Excel"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      duration: "6 weeks",
      description: "Learn digital marketing strategies, SEO, social media, and content creation.",
      skills: ["SEO", "Social Media", "Content Marketing", "Google Ads", "Analytics", "Email Marketing"]
    }
  ]

  const careerServices = [
    {
      icon: BookOpen,
      title: "Resume Writing",
      description: "Professional resume crafting tailored to your industry and experience level."
    },
    {
      icon: Users,
      title: "Interview Preparation",
      description: "Mock interviews and coaching to help you ace your job interviews."
    },
    {
      icon: Briefcase,
      title: "Networking Skills",
      description: "Learn how to build and maintain professional relationships in your industry."
    },
    {
      icon: Award,
      title: "Professional Etiquette",
      description: "Master workplace communication and professional behavior."
    }
  ]

  return (
    <div className="font-sans">
      <Hero 
        title="Training Programs"
        subtitle="Build Your Future with Industry-Relevant Skills"
        description="Our comprehensive training programs are designed to prepare you for high-demand careers in technology and business."
        primaryButton={{ text: "Apply Now", path: "/apply" }}
        secondaryButton={{ text: "View Schedule", path: "/schedule" }}
      />

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Training Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <program.icon className="text-blue-600 mr-3" size={32} />
                  <div>
                    <h3 className="text-xl font-semibold">{program.title}</h3>
                    <p className="text-blue-600 font-medium">{program.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Skills You'll Learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Development Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Career Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <service.icon className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Programs?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$75K</div>
              <div className="text-blue-100">Average Starting Salary</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Corporate Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Apply</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
              <p className="text-gray-600">Complete our online application form with your personal and educational information.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Interview</h3>
              <p className="text-gray-600">Meet with our team to discuss your goals and determine the best program fit.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Enrollment</h3>
              <p className="text-gray-600">Complete enrollment paperwork and prepare for your program start date.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
              <p className="text-gray-600">Begin your journey toward a successful career in technology.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default Training
