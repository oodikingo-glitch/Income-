import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-blue-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2 group">
          <div className="p-1.5 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
            <TrendingUp className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <span className="tracking-tight">IncomePilot</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-gray-700">
          <Link to="/" className="hover:text-primary font-bold transition-colors">Home</Link>
          <Link to="/blog/how-to-make-money-online-for-beginners-with-no-experience" className="hover:text-primary font-bold transition-colors">Start Here</Link>
          <Link to="/blog" className="hover:text-primary font-bold transition-colors">Best Guides</Link>
          <Link to="/blog/how-to-earn-money-online-step-by-step" className="hover:text-primary font-bold transition-colors">Income Paths</Link>
        </div>
      </nav>
    </header>
  );
}
