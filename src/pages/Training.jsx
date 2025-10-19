import { useState } from "react";
import Contact from "../components/Contact";
import {
  Code,
  Shield,
  Network,
  Monitor,
  Laptop,
  Server,
  Database,
  Lock,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Download,
  ExternalLink,
} from "lucide-react";

const Training = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const itPathways = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "IT Support",
      description:
        "First line of defense in tech support, troubleshooting hardware and software issues.",
      careers: [
        "Help Desk Technician",
        "IT Support Specialist",
        "Desktop Support",
      ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "System Administration",
      description:
        "Manage and maintain computer systems, servers, and user accounts.",
      careers: [
        "System Administrator",
        "IT Specialist",
        "Cloud Systems Support",
      ],
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Administration",
      description:
        "Design, configure, and secure networks that connect people and systems.",
      careers: [
        "Network Administrator",
        "Network Support Specialist",
        "Network Engineer",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description:
        "Protect organizations from digital threats and secure sensitive data.",
      careers: ["Security Analyst", "SOC Analyst", "Cybersecurity Specialist"],
    },
  ];

  const softwarePathways = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Front-End Development",
      description:
        "Create interactive, user-friendly websites and applications.",
      careers: ["Front-End Developer", "Web Designer", "UI/UX Developer"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Back-End Development",
      description:
        "Build server-side logic and manage databases for applications.",
      careers: ["Back-End Developer", "API Developer", "Database Developer"],
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Full-Stack Development",
      description:
        "Master both front-end and back-end development for complete applications.",
      careers: [
        "Full-Stack Developer",
        "Software Engineer",
        "Web Application Developer",
      ],
    },
  ];

  const programBenefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Certifications",
      description:
        "Earn recognized certifications like CompTIA A+, Network+, Security+",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Mentorship",
      description: "Learn from industry professionals and build your network",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Hands-on Experience",
      description: "Real-world projects and internship opportunities",
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Career Placement",
      description: "Job placement support and interview preparation",
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">Job Training</h1>
            <p className="text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform Your Future with Career Pathways from NextGen Scholars
              Academy
            </p>
            <p className="text-lg text-blue-100 max-w-5xl mx-auto leading-relaxed">
              At NextGen Scholars Academy, you'll receive immersive job
              training, gain professional experience to build your resume, and
              grow your network to jumpstart your career in IT, cybersecurity,
              software & web development, or network administration. Our four
              Career Pathways combine technical and professional training with
              access to internships and job placement support through our
              employer and industry partners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Become a Student
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Become a Partner
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download Our Training Offerings Catalog
            </button>
          </div>
        </div>
      </section>

      {/* IT Pathways Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IT Career Pathways
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the technical skills needed to excel in IT infrastructure
              and support roles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itPathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6">{pathway.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {pathway.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pathway.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-blue-800 mb-2">
                    Career Opportunities:
                  </p>
                  {pathway.careers.map((career, careerIndex) => (
                    <div key={careerIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">{career}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Web Development Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Software & Web Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create the digital experiences that power our connected world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {softwarePathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6">{pathway.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {pathway.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pathway.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-blue-800 mb-2">
                    Career Opportunities:
                  </p>
                  {pathway.careers.map((career, careerIndex) => (
                    <div key={careerIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">{career}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose NextGen Scholars Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed for young adults who may face barriers to accessing
              education and job opportunities, you'll learn in a supportive and
              inclusive environment with experienced staff and mentors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Support
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In addition to virtual and in-person training and internship
                opportunities, you'll have access to career development
                workshops, resume and interview preparation, and job placement
                support — all aimed at ensuring you are well-prepared to launch
                a successful career.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're just starting your career or looking to make a
                change, NextGen Scholars Academy can help you achieve your
                goals.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <ArrowRight className="w-5 h-5 mr-2" />
                <span>Start your journey today</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Mentorship</h4>
                    <p className="text-sm text-gray-600">
                      Industry professionals
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Certifications
                    </h4>
                    <p className="text-sm text-gray-600">Industry recognized</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Hands-on Labs
                    </h4>
                    <p className="text-sm text-gray-600">
                      Real-world experience
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Job Placement
                    </h4>
                    <p className="text-sm text-gray-600">Career support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
