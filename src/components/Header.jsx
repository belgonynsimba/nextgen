import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "../assets/images/logo_noText.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/students", label: "Students" },
    { path: "/training", label: "Job Training" },
    { path: "/partners", label: "Corporate Partners" },
    { path: "/get-involved", label: "Get Involved" },
    { path: "/about", label: "About" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center -ml-4">
            <img
              src={logoImage}
              alt="NextGen Scholars Academy"
              className="h-8 w-auto mr-3"
            />
            <Link
              to="/"
              className="text-lg font-bold"
              style={{ color: "#1e40af" }}
            >
              NextGen Scholars Academy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-all duration-300 ${
                  isActive(item.path) ? "font-semibold" : "text-gray-600"
                }`}
                style={{
                  color: isActive(item.path) ? "#1e40af" : undefined,
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = "#1e40af";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = "#6b7280";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="text-white px-6 py-2 rounded-md transition-colors"
              style={{ backgroundColor: "#1e40af" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#1e3a8a";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#1e40af";
              }}
            >
              Apply Now
            </button>
            <Link
              to="/donate"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors inline-block"
            >
              Donate
            </Link>
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="flex justify-center mb-4">
              <img
                src={logoImage}
                alt="NextGen Scholars Academy"
                className="h-8 w-auto"
              />
            </div>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActive(item.path)
                    ? "bg-blue-50 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                style={{
                  color: isActive(item.path) ? "#1e40af" : undefined,
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = "#1e40af";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = "#6b7280";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="w-full mt-4 text-white px-6 py-2 rounded-md transition-colors"
              style={{ backgroundColor: "#1e40af" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#1e3a8a";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#1e40af";
              }}
            >
              Apply Now
            </button>
            <Link
              to="/donate"
              className="w-full mt-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
