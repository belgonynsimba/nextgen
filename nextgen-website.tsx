import React, { useState } from 'react';
import { Menu, X, ChevronRight, Users, BookOpen, Building, Heart, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">NEXTGEN</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#students" className="text-gray-600 hover:text-blue-600">Students</a>
            <a href="#training" className="text-gray-600 hover:text-blue-600">Training</a>
            <a href="#partners" className="text-gray-600 hover:text-blue-600">Partners</a>
            <a href="#get-involved" className="text-gray-600 hover:text-blue-600">Get Involved</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Apply Now
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</a>
            <a href="#students" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Students</a>
            <a href="#training" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Training</a>
            <a href="#partners" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Partners</a>
            <a href="#get-involved" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Get Involved</a>
            <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <div className="bg-blue-600 text-white pt-24 pb-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Empowering Minds, Brightening Futures
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Advancing educational and career opportunities for young scholars from underserved and underrepresented communities.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 font-semibold">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-blue-700 font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Feature = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="text-blue-600" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Feature 
          icon={Users}
          title="Student Success"
          description="Comprehensive support and mentorship to help students achieve their academic and career goals."
        />
        <Feature 
          icon={BookOpen}
          title="Quality Education"
          description="Industry-aligned curriculum and hands-on training in high-demand fields."
        />
        <Feature 
          icon={Building}
          title="Career Ready"
          description="Direct pathways to internships and job opportunities with leading companies."
        />
        <Feature 
          icon={Heart}
          title="Community Impact"
          description="Creating positive change through education and workforce development."
        />
      </div>
    </div>
  </div>
);

const Stats = () => (
  <div className="bg-blue-600 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 text-center text-white">
        <div>
          <div className="text-4xl font-bold mb-2">2,800+</div>
          <div className="text-blue-100">Students Trained</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">95%</div>
          <div className="text-blue-100">Job Placement</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">150+</div>
          <div className="text-blue-100">Corporate Partners</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">$75K</div>
          <div className="text-blue-100">Avg Starting Salary</div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">NEXTGEN</h3>
          <p className="text-gray-400">Empowering the next generation of leaders through education and opportunity.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Technical Training</li>
            <li>Career Development</li>
            <li>Mentorship</li>
            <li>Internships</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <div className="flex items-center text-gray-400 mb-2">
            <Mail size={16} className="mr-2" />
            info@nextgen.org
          </div>
          <p className="text-gray-400">
            33309 1st Way South A205<br />
            Federal Way, WA 98003
          </p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 NEXTGEN Scholars Academy. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
};

export default App;
