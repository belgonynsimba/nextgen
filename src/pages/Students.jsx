import { useState } from "react";
import Contact from "../components/Contact";
import studentHeroImage from "../assets/images/student_hero.png";
import {
  GraduationCap,
  Users,
  Award,
  Heart,
  Shield,
  Code,
  Network,
  Monitor,
  Laptop,
  BookOpen,
  Users2,
  MessageCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Students = () => {
  const [activePathway, setActivePathway] = useState(0);

  const studentBenefits = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Tuition-Free Training",
      description:
        "NextGen Scholars Academy is a 100% tuition-free program. We believe financial barriers should never stand in the way of a brighter future. Our students gain access to world-class training, mentorship, and career support — at no cost.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Eligible for Technical Certification Exam Vouchers",
      description:
        "To help students launch their careers with confidence, we provide access to industry-recognized certification exams at no cost. This includes vouchers for exams such as CompTIA A+, Network+, Security+, and other certifications aligned with your chosen pathway.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Alumni Network",
      description:
        "Upon graduation, you'll join our growing alumni community — a lifelong network of peers and professionals committed to helping one another succeed. Alumni have access to continued mentorship, professional development workshops, and networking opportunities.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Student Support Services",
      description:
        "We're committed to removing barriers that prevent students from focusing on their education and career. When funding permits, our support services can help with essentials like food and transportation so you can concentrate fully on your future.",
    },
  ];

  const careerPathways = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Help Desk (IT Support)",
      description:
        "Learn to be the first line of defense in tech support. This pathway prepares you to troubleshoot hardware and software issues, provide customer support, and maintain essential IT systems.",
      careers: "Help Desk Technician or IT Support Specialist",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "System Administration",
      description:
        "Gain the skills to manage and maintain computer systems, servers, and user accounts. You'll learn how to install, configure, and secure enterprise systems that keep organizations running smoothly.",
      careers: "System Administrator or IT Specialist",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description:
        "Protect organizations from digital threats. This pathway trains you in network defense, threat detection, and incident response. You'll gain the knowledge needed to help safeguard sensitive data and systems.",
      careers: "Security Analyst or SOC Analyst",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software & Web Development",
      description:
        "Bring ideas to life through code. This pathway teaches programming, web design, and application development so you can create software solutions and websites.",
      careers:
        "Junior Web Developers, Software Engineers, or Application Support Specialists",
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Network Administration",
      description:
        "Learn to design, configure, and secure networks that connect people and systems. This pathway covers routers, switches, and cloud-based networking solutions.",
      careers: "Network Administrator or Network Support Technician",
    },
  ];

  const programPhases = [
    {
      phase: "Phase 1",
      title: "Technical Training & Skill Development",
      description:
        "The journey begins with a combination of virtual and in-person instruction, where you'll gain technical expertise in your chosen career track and develop essential professional and personal skills such as communication, teamwork, and leadership.",
      features: [
        "Virtual & in-person instruction",
        "Hands-on projects",
        "Professional skills development",
        "Real-world simulations",
      ],
    },
    {
      phase: "Phase 2",
      title: "Professional Internship",
      description:
        "You'll participate in a high-quality internship with one of our partner companies. This practical experience allows you to apply your training in a professional environment, build your network, and gain invaluable insights into your chosen field.",
      features: [
        "Corporate partner internships",
        "Professional networking",
        "Real-world experience",
        "Industry insights",
      ],
    },
    {
      phase: "Phase 3",
      title: "Career Launch Support",
      description:
        "Our dedicated career services team will support you with resume building, interview coaching, and job placement assistance. Graduates leave the program equipped with the skills, confidence, and connections needed to secure meaningful employment.",
      features: [
        "Resume building",
        "Interview coaching",
        "Job placement assistance",
        "Alumni network access",
      ],
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Image Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={studentHeroImage}
            alt="Students working together"
            className="w-full h-full object-cover"
            style={{ filter: "contrast(70%)" }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                Transform Your Future with
                <span className="block text-blue-200 drop-shadow-lg">
                  NextGen Scholars Academy
                </span>
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-md font-medium">
                Join a community of learners and professionals committed to your
                success. Get the skills, mentorship, and support you need to
                launch your career in technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section - Moved from Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your future with comprehensive, tuition-free training
              designed to launch your career in technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#1e40af" }}
              >
                <Users2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Peer Learning
              </h3>
              <p className="text-gray-600">
                Collaborate with fellow students in a supportive learning
                environment.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#1e40af" }}
              >
                <Laptop className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hands-on Training
              </h3>
              <p className="text-gray-600">
                Get practical experience with real-world projects and tools.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#1e40af" }}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Certifications
              </h3>
              <p className="text-gray-600">
                Earn industry-recognized certifications to boost your career.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#1e40af" }}
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mentorship
              </h3>
              <p className="text-gray-600">
                Get guidance from industry professionals and alumni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Student Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed, completely free of charge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4" style={{ color: "#1e40af" }}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Career Pathways
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              NextGen Scholars Academy offers training across five in-demand
              career pathways tailored to meet the needs of today's job market
              and of our corporate partners. Whether you're interested in
              software, cybersecurity, or IT, we provide the training you need
              to excel.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our job training programs are designed to be inclusive and
              supportive, regardless of your background, income, or zip code.
              NextGen Scholars Academy is 100% tuition-free and provides you
              with the tools, resources, and support necessary to succeed in
              your desired career path.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6" style={{ color: "#1e40af" }}>
                  {pathway.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {pathway.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pathway.description}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-blue-800 mb-2">
                    Career Opportunities:
                  </p>
                  <p className="text-blue-700">{pathway.careers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Job Training Program Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              NextGen Scholars Academy's structured, three-phase job training
              program can be completed in a year.
            </p>
          </div>

          <div className="space-y-12">
            {programPhases.map((phase, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-8 items-center"
              >
                <div className="lg:w-1/3">
                  <div
                    className="text-white p-8 rounded-xl text-center"
                    style={{ backgroundColor: "#1e40af" }}
                  >
                    <div className="text-4xl font-bold mb-2">{phase.phase}</div>
                    <h3 className="text-2xl font-semibold">{phase.title}</h3>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle
                          className="w-5 h-5 mr-3 flex-shrink-0"
                          style={{ color: "#1e40af" }}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Student Services Support
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Student Services team partners with community organizations
                to help you access food and transportation resources, when
                funding is available and community organizations can provide
                support.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                You'll meet our Student Services staff before Orientation Day to
                ensure you have the guidance you need to start your program
                ready for success.
              </p>
              <div
                className="flex items-center font-semibold"
                style={{ color: "#1e40af" }}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                <span>Get personalized support from day one</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users2 className="w-8 h-8" style={{ color: "#1e40af" }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Student Services Team
                    </h3>
                    <p className="text-gray-600">
                      Here to support your journey
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <BookOpen
                      className="w-5 h-5 mr-3"
                      style={{ color: "#1e40af" }}
                    />
                    <span className="text-gray-700">
                      Academic guidance and support
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Heart
                      className="w-5 h-5 mr-3"
                      style={{ color: "#1e40af" }}
                    />
                    <span className="text-gray-700">
                      Food and transportation assistance
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle
                      className="w-5 h-5 mr-3"
                      style={{ color: "#1e40af" }}
                    />
                    <span className="text-gray-700">
                      Personal counseling and mentorship
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Award
                      className="w-5 h-5 mr-3"
                      style={{ color: "#1e40af" }}
                    />
                    <span className="text-gray-700">
                      Career development resources
                    </span>
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

export default Students;
