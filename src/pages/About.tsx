import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Users, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">About IncomePilot</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          The world's leading resource for beginners to master the digital economy and build sustainable online income.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At IncomePilot, we believe that the opportunity to earn a living online should be accessible to everyone, regardless of their background, location, or technical skills.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We bridge the gap between "wanting to earn" and "knowing how to earn" by providing the most comprehensive, step-by-step blueprints in the industry.
          </p>
        </div>
        <div className="bg-primary text-white p-10 rounded-[3rem] shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">What Sets Us Apart</h3>
          <ul className="space-y-4">
            {[
              "Actionable Blueprints, Not Just Ideas",
              "100% Free, High-Quality Education",
              "Focused on Beginner-Friendly Methods",
              "Updated for the 2026 Digital Landscape"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-bold">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-bg-light rounded-[3rem] p-12 md:p-20 mb-24 border border-gray-100">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">Integrity</h3>
            <p className="text-gray-600 leading-relaxed">We only recommend legitimate, safe, and proven methods. No "get rich quick" schemes here.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-xl font-bold mb-3">Quality</h3>
            <p className="text-gray-600 leading-relaxed">Every guide is researched, tested, and written to be the best resource on the topic.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3">Accessibility</h3>
            <p className="text-gray-600 leading-relaxed">We simplify complex topics so that anyone can understand and take action immediately.</p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Whether you're looking for a side hustle or a full-time career change, IncomePilot is here to guide you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/blog" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary transition-all shadow-lg shadow-blue-900/20">
            Explore Our Guides
          </Link>
          <Link to="/contact" className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
