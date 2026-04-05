import { Link } from 'react-router-dom';
import { Post } from '../data/posts';
import { Clock, ChevronRight } from 'lucide-react';

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500 overflow-hidden group flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${post.imageSeed}/600/300`}
          alt={post.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-5 left-5">
          <span className="bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.1em] shadow-xl">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <Clock size={12} className="text-primary" /> {post.readTime}
          </span>
          <span>•</span>
          <div className="flex gap-2">
            {post.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-secondary">#{tag}</span>
            ))}
          </div>
        </div>
        
        <h2 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h2>
        
        <p className="text-gray-500 mb-8 line-clamp-3 text-sm leading-relaxed font-medium">
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
          <Link 
            to={`/blog/${post.slug}`} 
            className="inline-flex items-center gap-2 text-primary font-black hover:gap-3 transition-all group/link"
          >
            Read Guide 
            <span className="text-xl leading-none group-hover/link:translate-x-1 transition-transform">&rarr;</span>
          </Link>
          <div className="w-8 h-8 rounded-full bg-bg-light flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors">
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
