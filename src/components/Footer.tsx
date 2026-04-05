import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <span className="text-xl font-bold text-gray-900 tracking-tight">IncomePilot</span>
        </div>
        <p className="text-gray-600">&copy; 2026 IncomePilot. All rights reserved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/about" className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-all shadow-sm">About</Link>
          <Link to="/contact" className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-all shadow-sm">Contact</Link>
          <Link to="/privacy-policy" className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-all shadow-sm">Privacy Policy</Link>
          <Link to="/terms-of-service" className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-all shadow-sm">Terms of Service</Link>
          <Link to="/disclaimer" className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-all shadow-sm">Disclaimer</Link>
          <Link to="/cookie-policy" className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-all shadow-sm">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
