import { useState } from "react";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Award,
  Shield,
  Globe,
  Building2,
  Handshake,
  Network,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  BookOpen,
  GraduationCap,
  Briefcase,
  UserCheck,
} from "lucide-react";

const About = () => {
  const [activeValue, setActiveValue] = useState(0);

  const coreValues = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We are committed to delivering high-quality programs and services that empower our scholars to achieve their full potential.",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusivity",
      description:
        "We create equitable opportunities and actively embrace diversity in all its forms, ensuring every scholar feels valued and supported.",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We champion forward-thinking, evidence-based approaches to education and workforce development to meet the evolving needs of our scholars.",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community",
      description:
        "We foster collaborative networks of support among students, alumni, educators, and partners, nurturing lasting connections beyond the classroom.",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  const ecosystemComponents = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Employer Partnerships: Building Inclusive Workplaces",
      description:
        "We collaborate with employers to implement skills-first hiring practices that recognize potential beyond degrees. This ensures our graduates are job-ready while helping companies access diverse, motivated talent.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "NextGen Connect: Driving Workforce Innovation",
      description:
        "Our platform unites employers, educators, and community partners to share resources, best practices, and collaborative solutions that foster inclusive workforce growth.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Community Partnerships: Expanding Support",
      description:
        "Through partnerships with local organizations, we help provide students with wraparound services like housing, transportation, and childcare, removing barriers that limit access to education and career opportunities.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Alumni Network: Leading by Example",
      description:
        "Our alumni demonstrate the impact of opportunity in action. With continued mentorship, networking, and leadership development, alumni not only thrive in their careers but also return as mentors and partners to uplift future cohorts.",
    },
  ];

  const approachFeatures = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Career Pathways Training",
      description:
        "IT Support, System Administration, Cybersecurity, Software & Web Development, and Network Administration",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Mentorship & Coaching",
      description: "Professional development and career readiness preparation",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Certifications",
      description: "CompTIA, CCNA, Security+ and other in-demand credentials",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Corporate Internships",
      description: "Meaningful, hands-on experience with real employers",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Educational Stipends",
      description: "Financial support to remove barriers to education",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Alumni Network",
      description: "Ongoing professional support and pathways to give back",
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">ABOUT</h1>
            <h2 className="text-3xl font-bold mb-6">
              About NextGen Scholars Academy
            </h2>
            <p className="text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Empowering Dreams. Building Futures.
            </p>
            <p className="text-lg text-blue-100 max-w-5xl mx-auto leading-relaxed">
              At NextGen Scholars Academy, we believe talent is everywhere, but
              opportunity is not. Our mission is to bridge that gap by equipping
              young adults with the skills, resources, and mentorship they need
              to thrive in education, launch successful careers, and uplift
              their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              NextGen Scholars Academy is a nonprofit workforce development
              program dedicated to empowering underserved and underrepresented
              young adults who may not have access to a traditional four-year
              degree. Our one-year program combines intensive technical training
              in high-demand fields with professional development, mentorship,
              educational stipends, and hands-on corporate internships, ensuring
              scholars graduate with the skills, credentials, and confidence
              needed to pursue meaningful and successful careers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                NextGen Scholars Academy is dedicated to creating pathways for
                economic mobility by equipping individuals with the skills,
                mentorship, and resources needed to succeed in higher education
                and thrive in the workforce, with a focus on STEM and
                technology-driven careers. Through inclusive educational
                programs, workforce development initiatives, and leadership
                training, we work to break down systemic barriers and provide
                all scholars, regardless of socio-economic or cultural
                background, with the tools and opportunities to succeed. By
                fostering innovation, resilience, and social mobility, we
                empower the next generation of diverse leaders to drive
                meaningful change in their communities and across the global
                economy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                NextGen Scholars Academy envisions a future where all young
                adults, regardless of background, have equitable access to
                quality education and meaningful career opportunities. We are
                committed to preparing motivated students from underserved
                communities for high-demand careers and connecting them with
                employers who value talent, innovation, and resilience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By 2030, we aim to empower over 10,000 students to achieve their
                educational and professional goals, fostering generational
                impact, strengthening communities, and contributing to a more
                inclusive and dynamic workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At NextGen Scholars Academy, our core values guide every decision
              we make and define how we serve our students, partners, and
              communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mx-auto mb-6`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our NextGen Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our NextGen Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              At NextGen Scholars Academy, we believe opportunity must be
              practical, inclusive, and connected to real careers. Our holistic
              model integrates career pathways training in IT Support, System
              Administration, Cybersecurity, Software & Web Development, and
              Network Administration with mentorship, coaching, and career
              readiness preparation.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              To remove barriers, we provide educational stipends and connect
              scholars with corporate internships that offer meaningful,
              hands-on experience. We also prepare students for in-demand
              certifications such as CompTIA, CCNA, and Security+, equipping
              them with industry-recognized credentials. Beyond graduation, our
              alumni network ensures ongoing professional support and creates
              pathways for scholars to give back to future generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem of Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Beyond Career Pathways: Our Ecosystem of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              NextGen Scholars Academy is more than a training program. We are
              building a comprehensive ecosystem of solutions that expands
              opportunity, strengthens communities, and connects talent with the
              workforce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ecosystemComponents.map((component, index) => (
              <div
                key={index}
                className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6">{component.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {component.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
