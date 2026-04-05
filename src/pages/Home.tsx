import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';
import { motion } from 'motion/react';
import { ArrowRight, Rocket, Briefcase, Bot, Smartphone, CheckCircle2, TrendingUp, ShieldCheck, Mail } from 'lucide-react';

export default function Home() {
  // Section 3: Featured Articles (Top 3 for better focus)
  const featuredSlugs = [
    'how-to-make-money-online-for-beginners-with-no-experience',
    'how-to-make-money-using-ai-tools',
    'how-to-start-freelancing-with-no-experience'
  ];
  
  const featuredPosts = featuredSlugs.map(slug => posts.find(p => p.slug === slug)).filter(Boolean) as typeof posts;

  // Section 5: Popular Guides
  const popularSlugs = [
    'easy-online-jobs-without-investment',
    'best-ways-to-make-money-online-2026',
    'make-money-using-phone',
    'how-to-start-a-blog-and-make-money'
  ];
  const popularPosts = popularSlugs.map(slug => posts.find(p => p.slug === slug)).filter(Boolean) as typeof posts;

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="relative bg-primary text-white py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"
          ></motion.div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-white/20"
          >
            🚀 UPDATED FOR 2026
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight"
          >
            Start Making Money Online — Even With No Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Step-by-step guides, AI tools, freelancing strategies, and real methods that beginners can use today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-sm font-bold text-blue-200 uppercase tracking-widest"
          >
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span> Beginner-Friendly
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span> No Experience Required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span> Step-by-Step System
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <Link 
              to="/blog/how-to-make-money-online-for-beginners-with-no-experience" 
              className="group bg-accent text-white px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2"
            >
              Start Here <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/blog" 
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center"
            >
              Explore Guides
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1.5 — TRUST BAR */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          <div className="text-xl font-black tracking-tighter">FORBES</div>
          <div className="text-xl font-black tracking-tighter italic">Entrepreneur</div>
          <div className="text-xl font-black tracking-tighter">Business Insider</div>
          <div className="text-xl font-black tracking-tighter underline">WIRED</div>
          <div className="text-xl font-black tracking-tighter">TechCrunch</div>
        </div>
      </div>

      {/* SECTION 2 — START YOUR INCOME JOURNEY (START HERE) */}
      <section className="py-24 px-4 bg-bg-light relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-primary text-white px-6 py-2 rounded-full font-black uppercase tracking-[0.3em] text-sm mb-8 shadow-xl shadow-blue-900/20"
            >
              <Rocket size={20} className="animate-bounce" /> Start Here
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-gray-900">Choose Your Path to Freedom</h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
              Don't get overwhelmed. Pick <span className="text-primary font-black">ONE</span> path below and follow our verified, step-by-step blueprint to your first $1,000 online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Path 1: Freelancing Path */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-white p-12 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner relative z-10">
                <Briefcase size={48} />
              </div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Freelancing</h3>
              <p className="text-gray-600 mb-10 flex-grow leading-relaxed text-lg relative z-10">Trade your skills for dollars. Best for those who want to reach <span className="font-bold text-gray-900">$2,000+/month</span> quickly.</p>
              <Link 
                to="/blog/how-to-start-freelancing-with-no-experience" 
                className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary transition-all w-full shadow-xl shadow-blue-900/30 relative z-10 flex items-center justify-center gap-2 group/btn"
              >
                Start Freelancing <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Path 2: AI Income Path */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-white p-12 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-24 h-24 bg-amber-50 rounded-3xl flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner relative z-10">
                <Bot size={48} />
              </div>
              <h3 className="text-3xl font-black mb-6 relative z-10">AI Income</h3>
              <p className="text-gray-600 mb-10 flex-grow leading-relaxed text-lg relative z-10">Leverage AI to do the work for you. Best for those who want to <span className="font-bold text-gray-900">work smarter</span>, not harder.</p>
              <Link 
                to="/blog/how-to-make-money-using-ai-tools" 
                className="bg-accent text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all w-full shadow-xl shadow-amber-600/30 relative z-10 flex items-center justify-center gap-2 group/btn"
              >
                Explore AI <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
 
            {/* Path 3: Beginner Easy Methods */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-white p-12 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-24 h-24 bg-green-50 rounded-3xl flex items-center justify-center text-green-600 mb-10 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 shadow-inner relative z-10">
                <Smartphone size={48} />
              </div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Easy Methods</h3>
              <p className="text-gray-600 mb-10 flex-grow leading-relaxed text-lg relative z-10">Simple tasks using your phone. Best for <span className="font-bold text-gray-900">absolute beginners</span> who want a quick win.</p>
              <Link 
                to="/blog/make-money-using-phone" 
                className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-green-700 transition-all w-full shadow-xl shadow-green-900/30 relative z-10 flex items-center justify-center gap-2 group/btn"
              >
                Start Now <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURED ARTICLES */}
      <section className="py-32 px-4 bg-bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Expert-Verified Blueprints</h2>
              <p className="text-lg text-gray-600 font-medium">Our most comprehensive, step-by-step tutorials to get you started today.</p>
            </div>
            <Link to="/blog" className="text-primary font-black flex items-center gap-2 hover:gap-4 transition-all text-lg">
              View All 50+ Guides <span>&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — STEP-BY-STEP ROADMAP */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Your Roadmap to $1,000/Month</h2>
            <p className="text-lg text-gray-600 font-medium">Follow this exact sequence to go from zero to a stable online income.</p>
          </div>
          
          <div className="relative space-y-16">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-100 hidden md:block"></div>
            
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-10 group">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold z-10 shadow-xl shadow-blue-900/20 shrink-0 group-hover:scale-110 transition-transform">1</div>
              <Link to="/blog/how-to-make-money-online-for-beginners-with-no-experience" className="flex-grow p-10 bg-bg-light rounded-[2.5rem] border border-gray-100 hover:border-primary hover:bg-white hover:shadow-2xl transition-all group/card">
                <h3 className="text-2xl font-black mb-3 group-hover/card:text-primary transition-colors">Master the Foundations</h3>
                <p className="text-gray-600 leading-relaxed text-lg">Understand the online economy and set up your digital workspace for success.</p>
              </Link>
            </div>

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-10 group">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold z-10 shadow-xl shadow-blue-900/20 shrink-0 group-hover:scale-110 transition-transform">2</div>
              <div className="flex-grow p-10 bg-bg-light rounded-[2.5rem] border border-gray-100">
                <h3 className="text-2xl font-black mb-6">Choose Your Primary Vehicle</h3>
                <div className="flex flex-wrap gap-4">
                  <Link to="/blog/how-to-start-freelancing-with-no-experience" className="px-8 py-3 bg-white rounded-2xl border border-gray-200 hover:border-primary hover:text-primary font-black transition-all shadow-sm hover:shadow-md">Freelancing</Link>
                  <Link to="/blog/how-to-make-money-using-ai-tools" className="px-8 py-3 bg-white rounded-2xl border border-gray-200 hover:border-primary hover:text-primary font-black transition-all shadow-sm hover:shadow-md">AI Tools</Link>
                  <Link to="/blog/make-money-using-phone" className="px-8 py-3 bg-white rounded-2xl border border-gray-200 hover:border-primary hover:text-primary font-black transition-all shadow-sm hover:shadow-md">Mobile Apps</Link>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-10 group">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold z-10 shadow-xl shadow-blue-900/20 shrink-0 group-hover:scale-110 transition-transform">3</div>
              <Link to="/blog/how-to-get-first-freelance-client" className="flex-grow p-10 bg-bg-light rounded-[2.5rem] border border-gray-100 hover:border-primary hover:bg-white hover:shadow-2xl transition-all group/card">
                <h3 className="text-2xl font-black mb-3 group-hover/card:text-primary transition-colors">Land Your First Payout</h3>
                <p className="text-gray-600 leading-relaxed text-lg">Use our proven templates to get your first client or complete your first high-paying task.</p>
              </Link>
            </div>

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-10 group">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold z-10 shadow-xl shadow-blue-900/20 shrink-0 group-hover:scale-110 transition-transform">4</div>
              <Link to="/blog/how-to-start-a-blog-and-make-money" className="flex-grow p-10 bg-bg-light rounded-[2.5rem] border border-gray-100 hover:border-primary hover:bg-white hover:shadow-2xl transition-all group/card">
                <h3 className="text-2xl font-black mb-3 group-hover/card:text-primary transition-colors">Scale to Passive Income</h3>
                <p className="text-gray-600 leading-relaxed text-lg">Reinvest your earnings into long-term assets like blogging and affiliate marketing.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — POPULAR GUIDES */}
      <section className="py-24 px-4 bg-bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Trending Now</h2>
            <p className="text-lg text-gray-600 font-medium">The most read guides this week.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {popularPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary transition-all flex gap-6 items-center">
                <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden hidden sm:block">
                  <img src={`https://picsum.photos/seed/${post.imageSeed}/200/200`} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-secondary mb-2 uppercase tracking-wider">
                    <span>🔥 Popular</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — TRUST BLOCK */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-extrabold mb-6 leading-tight"
              >
                Why Thousands of Beginners Trust IncomePilot
              </motion.h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                We don't just share ideas; we provide actionable blueprints. Our mission is to make online income accessible to everyone, regardless of their background or budget.
              </p>
              <div className="space-y-4">
                {[
                  "100% Free Beginner-Friendly Methods",
                  "No Experience or Technical Skills Required",
                  "Step-by-Step Actionable Tutorials",
                  "Updated for the 2026 Digital Economy"
                ].map((item, idx) => (
                  <motion.div 
                    key={item} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 font-bold text-gray-800"
                  >
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                      <CheckCircle2 size={14} />
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-bg-light p-10 rounded-[3rem] border border-gray-100 relative"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white text-4xl shadow-xl">🏆</div>
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-5xl font-black text-primary mb-1">100+</div>
                  <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Detailed Guides</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-primary mb-1">50k+</div>
                  <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-primary mb-1">2026</div>
                  <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Latest Strategies</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — EMAIL / FOLLOW */}
      <section className="py-24 px-4 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Get Free Weekly Income Tips</h2>
          <p className="text-xl mb-12 text-blue-100 font-medium">Join 25,000+ subscribers getting the latest online income strategies delivered to their inbox.</p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-xl bg-white text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-accent/50"
              />
              <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-amber-600/20 shrink-0">
                Join Free
              </button>
            </div>
            <p className="text-sm text-blue-200 font-medium italic">No spam. Just pure value. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
