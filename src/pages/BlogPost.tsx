import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="max-w-7xl mx-auto px-4 py-12">Post not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">{post.title}</h1>
      <img
        src={`https://picsum.photos/seed/${post.imageSeed}/1200/600`}
        alt={post.title}
        className="w-full h-96 object-cover rounded-2xl shadow-md mb-8"
        referrerPolicy="no-referrer"
      />
      
      <div className="prose prose-lg max-w-none text-text-main">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      {/* Tip Box */}
      <div className="bg-blue-50 border-l-4 border-primary p-4 my-8 rounded-r-lg">
        <p className="font-bold text-primary">💡 Tip:</p>
        <p>Consistency is key. Try to dedicate at least 30 minutes a day to your chosen method.</p>
      </div>

      {/* Warning Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-8 rounded-r-lg">
        <p className="font-bold text-yellow-700">⚠️ Warning:</p>
        <p>Be wary of any site that asks for upfront payment to "start working".</p>
      </div>

      {/* Next Step */}
      <div className="bg-green-50 border-l-4 border-accent p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-accent mb-2">🧭 Ready for the next step?</h3>
        <p className="mb-4">You've learned the basics. Now it's time to choose your path.</p>
        <a href="/blog/how-to-earn-money-online-step-by-step" className="text-primary font-bold hover:underline">Next lesson: How to Earn Money Online Step by Step →</a>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-100 p-6 my-8 rounded-2xl">
        <h3 className="text-xl font-bold mb-2">🔔 Get free beginner earning tips</h3>
        <p className="mb-4">Join our newsletter to get the latest beginner-friendly tips delivered straight to your inbox.</p>
        <input type="email" placeholder="Enter your email" className="w-full p-2 mb-2 border rounded" />
        <button className="bg-primary text-white px-4 py-2 rounded">Join Now</button>
      </div>

      {/* Recommended for you */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">📚 Recommended for you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/blog/easy-online-jobs-without-investment" className="block p-4 border rounded-lg hover:border-primary">Easy Online Jobs Without Investment</a>
          <a href="/blog/make-money-using-phone" className="block p-4 border rounded-lg hover:border-primary">Make Money Using Phone</a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <p><strong>Q: Is this legit?</strong> Yes, we only recommend proven methods.</p>
          <p><strong>Q: How much can I earn?</strong> It varies based on effort.</p>
        </div>
      </div>
    </div>
  );
}
