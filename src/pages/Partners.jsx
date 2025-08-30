import Hero from '../components/Hero'
import Contact from '../components/Contact'

const Partners = () => {
  return (
    <div className="font-sans">
      <Hero 
        title="Our Partners"
        subtitle="Building Strong Partnerships for Success"
        description="We collaborate with leading companies and organizations to provide our students with the best opportunities and resources."
        primaryButton={{ text: "Become a Partner", path: "/contact" }}
        secondaryButton={{ text: "Learn More", path: "/about" }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Partnership Opportunities</h2>
          <p className="text-gray-600 text-lg">
            This page is under development. Information about our corporate partners and partnership opportunities will be available soon.
          </p>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default Partners
