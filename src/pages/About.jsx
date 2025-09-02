import Hero from '../components/Hero'
import Contact from '../components/Contact'

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our educational programs to our student support services."
    },
    {
      title: "Inclusivity",
      description: "We believe in creating opportunities for all, regardless of background, ethnicity, or socioeconomic status."
    },
    {
      title: "Innovation",
      description: "We embrace innovative approaches to education and career development to meet the evolving needs of our students."
    },
    {
      title: "Community",
      description: "We foster a strong sense of community and support among our students, alumni, and partners."
    }
  ]

  const team = [
    {
      name: "Belgony Nsimba ",
      role: "Founder and Executive Director",
      bio: "Leading our mission to empower the next generation of scholars through innovative educational programs."
    },
    {
      name: "Isabelle Mudimbe",
      role: "Program Director",
      bio: "Overseeing our technical training and career development initiatives."
    },
    {
      name: "Ferdinand Tembo",
      role: "Student Success Coordinator",
      bio: "Ensuring every student receives the support they need to achieve their goals."
    }
  ]

  return (
    <div className="font-sans">
      <Hero 
        title="About NextGen Scholars Academy"
        subtitle="Empowering Dreams, Building Futures"
        description="Learn about our mission, values, and the dedicated team working to transform lives through education and opportunity."
        primaryButton={{ text: "Our Programs", path: "/training" }}
        secondaryButton={{ text: "Get Involved", path: "/get-involved" }}
      />

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                NextGen Scholars Academy is dedicated to equipping individuals with the skills, mentorship, and resources needed to excel in higher education and thrive in high-demand careers, especially in science, technology, engineering, and mathematics (STEM).
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through inclusive and comprehensive educational programs, workforce development initiatives, and leadership development, we aim to break down systemic barriers and create sustainable pathways to professional success.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We envision a world where every individual, regardless of their background, has access to quality education and the opportunity to build a successful career in their chosen field.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By 2030, we aim to have helped over 10,000 students from underserved communities achieve their educational and career goals, creating a ripple effect of positive change in their families and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">2,800+</div>
              <div className="text-blue-100">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Corporate Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$75K</div>
              <div className="text-blue-100">Average Starting Salary</div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default About
