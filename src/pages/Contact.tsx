export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">Get In Touch</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Have a question about a specific income method? Or just want to say hello? We're here to help you on your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
          <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center text-3xl mb-8">📧</div>
          <h2 className="text-2xl font-bold mb-4">Email Us</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">For general inquiries, feedback, or partnership opportunities, please email us directly.</p>
          <a href="mailto:odananegero@gmail.com" className="text-xl font-bold text-primary hover:text-secondary transition-colors break-all">
            odananegero@gmail.com
          </a>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
          <div className="w-16 h-16 bg-amber-50 text-accent rounded-2xl flex items-center justify-center text-3xl mb-8">💬</div>
          <h2 className="text-2xl font-bold mb-4">Community Support</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">Join our Telegram community for real-time updates and support from fellow beginners.</p>
          <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-amber-600/20">
            Join Telegram Group
          </button>
        </div>
      </div>

      <div className="bg-bg-light rounded-[3rem] p-12 md:p-16 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">How long does it take to get a reply?</h3>
            <p className="text-gray-600 leading-relaxed">We aim to respond to all emails within 24-48 hours during business days.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Can you help me choose a method?</h3>
            <p className="text-gray-600 leading-relaxed">Absolutely! Feel free to describe your situation, and we'll point you toward the best starting guide.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Do you offer 1-on-1 coaching?</h3>
            <p className="text-gray-600 leading-relaxed">Currently, we focus on providing high-quality free content for everyone. We do not offer private coaching at this time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
