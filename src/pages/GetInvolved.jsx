import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Target,
  Users,
  Lightbulb,
  Award,
  Star,
  Crown,
  Gem,
  Diamond,
  Gift,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
  Zap,
  Building2,
} from "lucide-react";

const GetInvolved = () => {
  const [selectedTier, setSelectedTier] = useState(null);

  const whyDonateReasons = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Deliver a Big Impact",
      description:
        "Your gift creates a measurable and lasting impact. NextGen equips students with the technical skills, industry certifications, and career support needed to secure jobs in fields like IT Support, Cybersecurity, and Software Development. Every donation directly funds tuition-free training, certification exam vouchers, mentorship, and internships.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Make Communities Stronger",
      description:
        "Your support helps build stronger, more resilient communities. By empowering underserved young adults to achieve professional success, you help them secure better jobs, support their families, and reinvest in their communities. Donating to NextGen means putting your values into action by backing a nonprofit that drives real change at the local and national level.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Enjoy a Powerful Way to Give Back",
      description:
        "Every dollar you contribute has a direct and transformative effect. Your generosity provides motivated young adults with access to training, mentorship, and the resources they need to launch meaningful careers. You're not just giving back — you're paving the way for the next generation of leaders.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Open Doors for Deserving Young People",
      description:
        "Millions of talented young adults remain disconnected from career opportunities despite their drive to succeed. Your donation helps bridge that gap by removing financial barriers, funding certifications, and connecting students with pathways into the workforce. Together, we can unlock opportunity and create a brighter future for all.",
    },
  ];

  const donorTiers = [
    {
      name: "Member",
      range: "$1,000 – $4,999",
      icon: <Award className="w-6 h-6" />,
      color: "bg-gray-100 text-gray-800",
      benefits: [
        "Recognition in the Annual Impact Report",
        "Quarterly updates on Academy milestones and scholar achievements",
        "Invitations to graduation ceremonies and select student showcases",
      ],
    },
    {
      name: "Bronze",
      range: "$5,000 – $9,999",
      icon: <Star className="w-6 h-6" />,
      color: "bg-amber-100 text-amber-800",
      benefits: [
        "Recognition in the Annual Impact Report",
        "Quarterly updates highlighting student projects and success stories",
        "Invitations to graduation ceremonies and select student showcases",
        "Invitation to Local Academy Tours",
      ],
    },
    {
      name: "Silver",
      range: "$10,000 – $24,999",
      icon: <Award className="w-6 h-6" />,
      color: "bg-gray-100 text-gray-800",
      benefits: [
        "Recognition in the Annual Impact Report",
        "Quarterly updates highlighting student projects and success stories",
        "Invitation to Local Academy Tours",
        "Personalized Letter from a NextGen Scholar expressing impact",
      ],
    },
    {
      name: "Gold",
      range: "$25,000 – $49,999",
      icon: <Crown className="w-6 h-6" />,
      color: "bg-yellow-100 text-yellow-800",
      benefits: [
        "Recognition in the Annual Impact Report",
        "Quarterly updates highlighting student projects and success stories",
        "Invitation to Local Academy Tours",
        "Personalized Letter from a NextGen Scholar expressing impact",
        "Invitation to Exclusive Scholar & Donor Appreciation Reception",
        "Recognition on NextGen's online Donor Spotlight page",
        "Opportunity to connect with Academy leadership and faculty",
      ],
    },
    {
      name: "Platinum",
      range: "$50,000 – $99,999",
      icon: <Gem className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
      benefits: [
        "Recognition in Annual Impact Report and Quarterly Updates",
        "Invitations to local events, workshops, and Academy tours",
        "Personalized Scholar Impact Letter",
        "Invitation to Donor Appreciation Reception",
        "Access to Leadership Briefing Calls with Academy Executives",
      ],
    },
    {
      name: "Sapphire",
      range: "$100,000 – $249,999",
      icon: <Diamond className="w-6 h-6" />,
      color: "bg-indigo-100 text-indigo-800",
      benefits: [
        "Recognition in Annual Impact Report and Quarterly Updates",
        "Special invitations to Academy events and graduations",
        "Invitations to local tours and student project showcases",
        "Personalized Scholar Impact Letter",
        "Invitation to Donor Appreciation Reception",
        "Annual NextGen Leadership & Impact Tour",
      ],
    },
    {
      name: "Diamond",
      range: "$250,000+",
      icon: <Diamond className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-800",
      benefits: [
        "Recognition in Annual Impact Report and Quarterly Updates",
        "Special invitations to Academy events and graduations",
        "Invitations to local tours and student project showcases",
        "Personalized Scholar Impact Letter",
        "Invitation to Donor Appreciation Reception",
        "Annual NextGen Leadership & Impact Tour",
        "Custom Stewardship and Recognition Opportunities (e.g., naming a program or scholarship)",
      ],
    },
    {
      name: "Founder's Circle",
      range: "$1,000,000+",
      icon: <Crown className="w-6 h-6" />,
      color: "bg-red-100 text-red-800",
      benefits: [
        "Recognition in Annual Impact Report and Quarterly Updates",
        "Special invitations to Academy events and graduations",
        "Invitations to local tours and student project showcases",
        "Personalized Scholar Impact Letter",
        "Invitation to Donor Appreciation Reception",
        "Annual NextGen Leadership & Impact Tour",
        "Custom Stewardship and Recognition Opportunities",
        "Exclusive engagement with thought leaders in STEM education, workforce development, and social impact initiatives",
      ],
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">Get Involved</h1>
            <h2 className="text-3xl font-bold mb-6">Become a Donor</h2>
            <p className="text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Make Real Opportunity Possible
            </p>
            <p className="text-lg text-blue-100 max-w-5xl mx-auto leading-relaxed">
              NextGen Scholars Academy empowers untapped talent to gain the
              skills needed for high-demand jobs and transform the future of
              work. Donors like you make it possible.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/donate"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
            >
              Donate Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Donate to NextGen Scholars Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your support creates lasting impact and transforms lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyDonateReasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6">{reason.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Opportunity Society Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Opportunity Society
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              A community of visionary donors dedicated to empowering the next
              generation of leaders.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The Opportunity Society brings together philanthropic individuals,
              families, and organizations who believe in breaking barriers and
              expanding access to education and career opportunities. We welcome
              any donor giving $1,000 or more annually into this leadership
              circle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donorTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedTier === index ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() =>
                  setSelectedTier(selectedTier === index ? null : index)
                }
              >
                <div className="text-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${tier.color} flex items-center justify-center mx-auto mb-3`}
                  >
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {tier.name}
                  </h3>
                  <p className="text-blue-600 font-semibold">{tier.range}</p>
                </div>

                {selectedTier === index && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-gray-800 mb-3">
                      Benefits:
                    </p>
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                {selectedTier !== index && (
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Click to view benefits
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Help us close the Opportunity Divide
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your support empowers the next generation of technology and STEM
                leaders. Every donation helps us provide tuition-free training,
                industry certifications, and career support to underserved young
                adults.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    100% tuition-free training programs
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Industry-recognized certifications
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Professional mentorship and support
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Career placement assistance
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Make Your Impact
                  </h3>
                  <p className="text-gray-600">
                    Every dollar makes a difference
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$50</div>
                    <p className="text-sm text-gray-600">
                      Certification voucher
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$500</div>
                    <p className="text-sm text-gray-600">
                      Student support services
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      $1,000
                    </div>
                    <p className="text-sm text-gray-600">
                      Full program scholarship
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      $5,000
                    </div>
                    <p className="text-sm text-gray-600">Cohort sponsorship</p>
                  </div>
                </div>
                <Link
                  to="/donate"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Donate Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
