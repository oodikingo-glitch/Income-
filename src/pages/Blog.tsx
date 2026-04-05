import { useState, useMemo } from 'react';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';
import { Search, Filter, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(() => {
    const cats = new Set(posts.map(p => p.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = posts.find(p => p.slug === 'how-to-make-money-online-for-beginners-with-no-experience');

  return (
    <div className="bg-bg-light min-h-screen">
      {/* Blog Hero */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">IncomePilot Knowledge Base</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Master the art of online income with our comprehensive, step-by-step guides updated for 2026.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search for guides (e.g. 'AI', 'Freelancing')..." 
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white text-gray-900 shadow-xl focus:outline-none focus:ring-4 focus:ring-accent/30 transition-all font-medium text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Post (Only if no search/filter active) */}
        {searchQuery === '' && selectedCategory === 'all' && featuredPost && (
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="text-accent" /> Featured Guide
            </h2>
            <Link to={`/blog/${featuredPost.slug}`} className="group block bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${featuredPost.imageSeed}/1200/800`} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[300px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Must Read</span>
                    <span className="text-gray-400 text-sm font-bold">• {featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-6 group-hover:text-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-primary font-black text-lg group/link">
                    Read This Guide <span className="text-2xl group-hover/link:translate-x-2 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            <Filter className="text-gray-400 shrink-0" size={20} />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border-2 ${
                  selectedCategory === cat 
                    ? 'bg-primary border-primary text-white shadow-lg shadow-blue-900/20' 
                    : 'bg-white border-gray-100 text-gray-500 hover:border-primary hover:text-primary'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="text-gray-400 font-bold text-sm shrink-0">
            Showing {filteredPosts.length} Guides
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No guides found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}
              className="mt-6 text-primary font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Never Miss a Strategy</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Get our latest income blueprints, AI tools, and case studies delivered to your inbox every Tuesday.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-grow px-6 py-4 rounded-xl bg-white text-gray-900 font-bold focus:outline-none focus:ring-4 focus:ring-accent/50"
              />
              <button className="bg-accent text-white px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-lg shadow-amber-600/20">
                Subscribe
              </button>
            </div>
            <p className="mt-6 text-sm text-blue-200 italic">Join 25,000+ digital entrepreneurs. No spam, ever.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
