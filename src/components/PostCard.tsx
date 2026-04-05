import { Link } from 'react-router-dom';
import { Post } from '../data/posts';

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${post.imageSeed}/600/300`}
          alt={post.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3 text-xs font-medium text-gray-500">
          <span className="flex items-center gap-1">
            ⏱️ {post.readTime}
          </span>
          <span>•</span>
          <div className="flex gap-2">
            {post.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-secondary">#{tag}</span>
            ))}
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h2>
        
        <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="mt-auto">
          <Link 
            to={`/blog/${post.slug}`} 
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group/link"
          >
            Read Full Guide 
            <span className="text-xl leading-none group-hover/link:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
