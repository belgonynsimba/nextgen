import { Link } from 'react-router-dom'

const Footer = () => {
  const footerLinks = {
    programs: [
      { label: 'Technical Training', path: '/training' },
      { label: 'Career Development', path: '/training' },
      { label: 'Mentorship', path: '/about' },
      { label: 'Internships', path: '/training' },
    ],
    quickLinks: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Partners', path: '/partners' },
      { label: 'Contact', path: '/contact' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NextGen Scholars Academy</h3>
            <p className="text-gray-400">
              Empowering the next generation of leaders through education and opportunity.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>33309 1st Way South A205</li>
              <li>Federal Way, WA 98003</li>
              <li>Phone: (206) 823-4047</li>
              <li>Email: belgonynsimba@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NextGen Scholars Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
