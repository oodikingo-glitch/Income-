import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';

export default function Home() {
  // Section 3: Featured Articles (Top 5)
  const featuredSlugs = [
    'how-to-make-money-online-for-beginners-with-no-experience',
    'how-to-start-freelancing-with-no-experience',
    'how-to-make-money-using-ai-tools',
    'best-apps-to-make-money-online',
    'how-to-start-a-blog-and-make-money'
  ];
  
  const featuredPosts = featuredSlugs.map(slug => posts.find(p => p.slug === slug)).filter(Boolean) as typeof posts;

  // Section 5: Popular Guides
  const popularSlugs = [
    'easy-online-jobs-without-investment',
    'best-ways-to-make-money-online-2026',
    'how-to-add-website-to-google-search-console',
    'survey-apps-that-pay'
  ];
  const popularPosts = popularSlugs.map(slug => posts.find(p => p.slug === slug)).filter(Boolean) as typeof posts;

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="bg-primary text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Start Making Money Online as a Beginner
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 font-light">
            No experience. No investment. Step-by-step guides to help you earn online.
          </p>
          <Link 
            to="/blog/how-to-make-money-online-for-beginners-with-no-experience" 
            className="inline-block bg-accent text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-green-500 transition shadow-lg"
          >
            Start Here
          </Link>
        </div>
      </section>

      {/* SECTION 2 — 3 PATH SYSTEM */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Path 1: Freelancing */}
            <div className="bg-bg-light p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-3">Freelancing</h3>
              <p className="text-gray-600 mb-6 flex-grow">Work online and get paid for simple tasks</p>
              <Link 
                to="/blog/how-to-start-freelancing-with-no-experience" 
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition w-full"
              >
                Start Freelancing
              </Link>
            </div>
            
            {/* Path 2: AI Income */}
            <div className="bg-bg-light p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-3">AI Income</h3>
              <p className="text-gray-600 mb-6 flex-grow">Use AI tools to earn money online</p>
              <Link 
                to="/blog/how-to-make-money-using-ai-tools" 
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition w-full"
              >
                Explore AI Methods
              </Link>
            </div>

            {/* Path 3: Mobile Income */}
            <div className="bg-bg-light p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">Mobile Income</h3>
              <p className="text-gray-600 mb-6 flex-grow">Earn using apps and your phone</p>
              <Link 
                to="/blog/best-apps-to-make-money-online" 
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition w-full"
              >
                Start With Apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURED ARTICLES */}
      <section className="py-16 px-4 bg-bg-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — STEP-BY-STEP ROADMAP */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Your Step-by-Step Roadmap</h2>
          <div className="space-y-6">
            <Link to="/blog/how-to-make-money-online-for-beginners-with-no-experience" className="flex items-center p-6 bg-bg-light rounded-xl border border-gray-200 hover:border-primary transition group">
              <div className="text-4xl mr-6">1️⃣</div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition">Learn basics</h3>
                <p className="text-gray-600">Start with the beginner guide</p>
              </div>
            </Link>
            <div className="flex items-center p-6 bg-bg-light rounded-xl border border-gray-200">
              <div className="text-4xl mr-6">2️⃣</div>
              <div>
                <h3 className="text-xl font-bold">Choose a method</h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  <Link to="/blog/how-to-start-freelancing-with-no-experience" className="text-sm bg-white px-3 py-1 rounded border hover:border-primary text-primary font-medium">Freelancing</Link>
                  <Link to="/blog/how-to-make-money-using-ai-tools" className="text-sm bg-white px-3 py-1 rounded border hover:border-primary text-primary font-medium">AI Tools</Link>
                  <Link to="/blog/best-apps-to-make-money-online" className="text-sm bg-white px-3 py-1 rounded border hover:border-primary text-primary font-medium">Apps</Link>
                </div>
              </div>
            </div>
            <Link to="/blog/how-to-get-first-freelance-client" className="flex items-center p-6 bg-bg-light rounded-xl border border-gray-200 hover:border-primary transition group">
              <div className="text-4xl mr-6">3️⃣</div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition">Start earning</h3>
                <p className="text-gray-600">Action-based guides to get your first client or payout</p>
              </div>
            </Link>
            <Link to="/blog/how-to-start-a-blog-and-make-money" className="flex items-center p-6 bg-bg-light rounded-xl border border-gray-200 hover:border-primary transition group">
              <div className="text-4xl mr-6">4️⃣</div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition">Grow income</h3>
                <p className="text-gray-600">Scale your earnings with blogging and passive income</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — POPULAR GUIDES */}
      <section className="py-16 px-4 bg-bg-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {popularPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-primary transition flex flex-col justify-center">
                <h3 className="text-lg font-bold text-primary mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — TRUST BLOCK */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Why Start Here?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="text-accent text-3xl mb-2">✔</div>
              <p className="font-semibold text-gray-700">Beginner-friendly</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-accent text-3xl mb-2">✔</div>
              <p className="font-semibold text-gray-700">No experience needed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-accent text-3xl mb-2">✔</div>
              <p className="font-semibold text-gray-700">Free methods</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-accent text-3xl mb-2">✔</div>
              <p className="font-semibold text-gray-700">Real step-by-step guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — EMAIL / FOLLOW */}
      <section className="py-20 px-4 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get free tips to start earning online</h2>
          <p className="text-lg mb-8 opacity-90">Join our community and get the latest strategies sent directly to you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-500 transition shadow-lg">
              Join Email List
            </button>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Join Telegram
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
