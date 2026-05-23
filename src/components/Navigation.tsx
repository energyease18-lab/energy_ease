import Logo from '../assets/Logo.png';

interface NavigationProps {
  onHomeClick: () => void;
}

export default function Navigation({ onHomeClick }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={onHomeClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={Logo} alt="ENERGY & EASE" className="w-64 h-10 sm:w-48 sm:h-12" />
          </button>

          <div className="hidden md:flex gap-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-sm"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-sm"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-sm"
            >
              Contact
            </a>
          </div>

          <a
            href="https://clients.mindbodyonline.com/classic/ws?studioid=5753304&stype=-2&subTab=info"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
