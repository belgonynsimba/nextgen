import { useState } from "react";
import {
  Users,
  Lightbulb,
  Target,
  Scale,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Building2,
  Handshake,
  Award,
  Clock,
  UserCheck,
  Star,
  Globe,
  Zap,
} from "lucide-react";

const Partners = () => {
  const [activeStep, setActiveStep] = useState(0);

  const valuePropositions = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "A Broader Pipeline of Talent",
      description:
        "Gain access to a diverse pool of candidates you won't find through traditional recruitment channels. Our scholars are trained, motivated, and ready to contribute in fields such as IT Support, System Administration, Cybersecurity, Software & Web Development, and Network Administration.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Diversity that Drives Innovation",
      description:
        "Our students bring unique perspectives and lived experiences that fuel creativity and innovation. By building inclusive teams, you strengthen your organization's ability to adapt, grow, and lead in a rapidly evolving marketplace.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "In-Demand Training Solutions",
      description:
        "Our curriculum is designed with employer input and aligned with industry standards. Scholars graduate with both technical certifications and professional skills, ensuring they are ready for entry-level roles and career advancement.",
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Flexible, Scalable Partnership",
      description:
        "Whether you need to fill positions immediately or build a long-term hiring pipeline, NextGen Scholars Academy offers flexible solutions tailored to your business needs.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Stronger, More Productive Teams",
      description:
        "Beyond technical expertise, our scholars are equipped with essential professional skills such as communication, teamwork, problem-solving, adaptability, and time management — making them confident, accountable contributors from day one.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Effective Screening, Lower Hiring Risk",
      description:
        "Through internships and project collaborations, you get to work directly with potential hires before extending a full-time offer. This hands-on engagement reduces hiring risk and allows training to be shaped by your organization's needs.",
    },
  ];

  const careerPathways = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "IT Support",
      description: "Help Desk Technicians, IT Support Specialists",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "System Administration",
      description: "System Administrators, IT Specialists",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Security Analysts, SOC Analysts",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Software & Web Development",
      description: "Front-End, Back-End, Full-Stack Developers",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Network Administration",
      description: "Network Administrators, Network Engineers",
    },
  ];

  const partnerProcess = [
    {
      step: "1",
      title: "Fill Out the Interest Form",
      description:
        "Join other forward-thinking businesses! Complete our partner interest form to begin shaping the future of work. By partnering with NextGen Scholars Academy, your company gains access to a smarter hiring strategy and a pipeline of motivated, career-ready talent.",
      icon: <Handshake className="w-8 h-8" />,
    },
    {
      step: "2",
      title: "Align Needs",
      description:
        "We kick off the partnership by identifying your company's specific workforce needs. Together, we align commitments, define internship roles, and build a timeline that ensures our scholars' training matches your business goals.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      step: "3",
      title: "Train + Match",
      description:
        "Our scholars undergo rigorous training in both professional and technical skills across five Career Pathways: IT Support, System Administration, Cybersecurity, Software & Web Development, and Network Administration. Each student is carefully assessed and matched with the company where they can contribute most effectively.",
      icon: <Award className="w-8 h-8" />,
    },
    {
      step: "4",
      title: "Internship Begins",
      description:
        'Gain valuable "try-before-you-hire" experience. During internships, employers have direct access to coach and evaluate interns, while our staff provides wraparound support to ensure performance meets company expectations.',
      icon: <UserCheck className="w-8 h-8" />,
    },
    {
      step: "5",
      title: "Hire a Graduate",
      description:
        "At the end of the internship, you'll have the opportunity to hire your NextGen Scholar — with no placement fee. This reduces recruitment time and onboarding costs, while supporting career advancement for talented, diverse professionals.",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">Corporate Partners</h1>
            <p className="text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Reshape the Future of Work with NextGen Scholars Academy
            </p>
            <p className="text-lg text-blue-100 max-w-5xl mx-auto leading-relaxed">
              Partnering with NextGen Scholars Academy gives companies access to
              a diverse, motivated, and skilled pipeline of talent. Together, we
              can close the opportunity gap and prepare the next generation of
              professionals to meet today's workforce demands.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Become a Partner Today
            </button>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How NextGen Scholars Academy Adds Value to Your Company
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your hiring strategy with access to diverse, skilled
              talent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropositions.map((proposition, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6">{proposition.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {proposition.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {proposition.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Solutions Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              In-Demand Training Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              NextGen Scholars Academy delivers skills-first training across
              five Career Pathways; each designed with employer-driven and
              market-responsive curriculum. Our programs align with industry
              standards and prepare scholars for real-world roles in high-demand
              fields.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              To strengthen their employability, scholars also prepare for
              industry-recognized certifications, ensuring they meet the
              technical and professional standards employers value most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {careerPathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {pathway.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  {pathway.title}
                </h3>
                <p className="text-sm text-gray-600">{pathway.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Career Pathways Partner Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined 5-step process to connect you with top talent
            </p>
          </div>

          <div className="space-y-12">
            {partnerProcess.map((step, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-8 items-center"
              >
                <div className="lg:w-1/3">
                  <div className="bg-blue-600 text-white p-8 rounded-xl text-center relative">
                    <div className="absolute -top-4 left-8">
                      <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="text-blue-100 mb-4">{step.icon}</div>
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Find Untapped Talent</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              NextGen Scholars Academy is ready to meet your company's growing
              talent needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                Become a Partner Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
