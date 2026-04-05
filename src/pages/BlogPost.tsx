import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';
import { Clock, Tag, ChevronRight, User, Calendar, ArrowLeft, Share2, MessageCircle, TrendingUp } from 'lucide-react';
import { useMemo } from 'react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return posts
      .filter(p => p.category === post.category && p.slug !== post.slug)
      .slice(0, 2);
  }, [post]);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-gray-600 mb-8">The guide you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="text-primary font-bold hover:underline">Back to Knowledge Base</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-b border-gray-100 py-4">
        <div className="max-w-5xl mx-auto px-4 flex items-center gap-2 text-sm font-bold text-gray-400">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <ChevronRight size={14} />
          <span className="text-gray-600 truncate">{post.title}</span>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-gray-400 font-bold text-sm flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                <User size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-900">IncomePilot Editorial Team</div>
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar size={12} /> Updated April 2026
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2.5 rounded-full bg-bg-light text-gray-500 hover:text-primary hover:bg-blue-50 transition-all">
                <Share2 size={20} />
              </button>
              <button className="p-2.5 rounded-full bg-bg-light text-gray-500 hover:text-primary hover:bg-blue-50 transition-all">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <img
            src={`https://picsum.photos/seed/${post.imageSeed}/1200/600`}
            alt={post.title}
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary prose-a:font-bold prose-img:rounded-3xl text-gray-700 leading-relaxed">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
              <Tag size={20} className="text-gray-400 mr-2" />
              {post.tags.map(tag => (
                <span key={tag} className="bg-bg-light text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-8 md:p-12 bg-bg-light rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-primary shadow-lg shrink-0">
                <User size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3">About IncomePilot Editorial</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our mission is to provide the most accurate, up-to-date, and actionable online income strategies for beginners. Every guide is researched and verified by our team of digital entrepreneurs.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-primary font-bold hover:underline">Follow on Twitter</a>
                  <a href="#" className="text-primary font-bold hover:underline">Join Community</a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-12">
            {/* Newsletter Widget */}
            <div className="bg-primary text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">Master Your Income</h3>
                <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                  Join 25,000+ others getting weekly blueprints to earn online.
                </p>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full px-5 py-3 rounded-xl bg-white text-gray-900 font-bold mb-4 focus:outline-none"
                />
                <button className="w-full bg-accent text-white py-3 rounded-xl font-black hover:scale-105 transition-all">
                  Join Free
                </button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                  <TrendingUp className="text-primary" size={20} /> Related Guides
                </h3>
                <div className="space-y-6">
                  {relatedPosts.map(rp => (
                    <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group flex gap-4 items-center">
                      <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden">
                        <img src={`https://picsum.photos/seed/${rp.imageSeed}/200/200`} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {rp.title}
                        </h4>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{rp.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <Link to="/blog" className="flex items-center gap-2 text-gray-400 font-bold hover:text-primary transition-colors">
              <ArrowLeft size={18} /> Back to all guides
            </Link>
          </aside>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="bg-bg-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to take action?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Don't just read. Start your journey today with our beginner-friendly roadmap.
          </p>
          <Link to="/" className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-blue-900/20">
            View Success Roadmap
          </Link>
        </div>
      </section>
    </div>
  );
}
