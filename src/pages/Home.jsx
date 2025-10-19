import Hero from "../components/Hero";
import Contact from "../components/Contact";

const Home = () => {
  const programs = [
    {
      title: "Technical Skills Training",
      items: [
        "Help Desk (IT Support)",
        "System Administration",
        "Cybersecurity",
        "Software & Web Development",
        "Network Administration",
      ],
    },
    {
      title: "Career Development",
      items: [
        "Resume Writing",
        "Interview Preparation",
        "Networking Skills",
        "Professional Etiquette",
      ],
    },
    {
      title: "Mentorship & Support",
      items: [
        "One-on-One Mentoring",
        "Industry Connections",
        "Career Guidance",
        "Alumni Network",
      ],
    },
  ];

  const provenPathSteps = [
    {
      number: "1",
      title: "Train",
      description:
        "Through skills-first training across our five Career Pathways — students build both technical expertise and essential soft skills. Training is delivered through a combination of virtual learning, in-person sessions, and hands-on projects, ensuring students are prepared for real-world challenges.",
    },
    {
      number: "2",
      title: "Experience",
      description:
        "Students put their learning into practice through internships and projects with our corporate partners. These opportunities provide practical, real-world exposure to professional environments, giving students the confidence and experience they need to thrive.",
    },
    {
      number: "3",
      title: "Access",
      description:
        "Graduates leave NextGen Scholars Academy ready to take the next step — whether pursuing higher education, securing certifications, or entering the workforce. With personalized coaching, career placement support, and a strong alumni network, our scholars gain the connections, confidence, and access to opportunities that lead to lasting success.",
    },
  ];

  return (
    <div className="font-sans">
      <Hero />

      {/* Mission Section */}
      <section
        className="py-8 text-white"
        style={{
          background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg leading-relaxed">
            NextGen Scholars Academy is a nonprofit dedicated to unlocking
            opportunities for underserved and underrepresented youth including
            immigrants and refugees. Through career pathways, mentorship, and
            hands-on learning, we prepare tomorrow's leaders for success in
            higher education and high-demand careers.
          </p>
        </div>
      </section>

      {/* Our Proven Path Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#1e40af" }}
            >
              Our Proven Path
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reimagine your future in three steps with NextGen Scholars
              Academy's Career Pathways.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {provenPathSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 left-8">
                  <div
                    className="w-12 h-12 text-white rounded-full flex items-center justify-center text-xl font-bold"
                    style={{ backgroundColor: "#1e40af" }}
                  >
                    {step.number}
                  </div>
                </div>
                <div className="pt-6">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "#1e40af" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition-all duration-300"
              >
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
  );
};

export default Home;
