import Hero from '../components/Hero'
import Contact from '../components/Contact'

const Students = () => {
  return (
    <div className="font-sans">
      <Hero 
        title="Student Resources"
        subtitle="Supporting Your Educational Journey"
        description="Access resources, support services, and information to help you succeed in your educational and career goals."
        primaryButton={{ text: "Student Portal", path: "/portal" }}
        secondaryButton={{ text: "Get Support", path: "/contact" }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Student Resources</h2>
          <p className="text-gray-600 text-lg">
            This page is under development. Student resources and portal access will be available soon.
          </p>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default Students
