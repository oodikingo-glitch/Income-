import { Link } from 'react-router-dom';
import { Post } from '../data/posts';

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <img
        src={`https://picsum.photos/seed/${post.imageSeed}/600/300`}
        alt={post.title}
        className="w-full h-48 object-cover rounded-md mb-4"
        referrerPolicy="no-referrer"
      />
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Link to={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
        Read more &rarr;
      </Link>
    </div>
  );
}
