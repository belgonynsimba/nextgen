import Hero from '../components/Hero'
import Contact from '../components/Contact'

const GetInvolved = () => {
  return (
    <div className="font-sans">
      <Hero 
        title="Get Involved"
        subtitle="Join Our Mission to Transform Lives"
        description="There are many ways to support our mission and help create opportunities for the next generation of scholars."
        primaryButton={{ text: "Volunteer", path: "/contact" }}
        secondaryButton={{ text: "Donate", path: "/donate" }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ways to Get Involved</h2>
          <p className="text-gray-600 text-lg">
            This page is under development. Information about volunteering, donating, and other ways to get involved will be available soon.
          </p>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default GetInvolved
