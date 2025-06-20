import { TPostModel } from "@/types/post";
import Image from "next/image";
import { FaUserSecret } from "react-icons/fa";

type PostCardProps = {
  post: TPostModel;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <div className="rounded-lg shadow-lg bg-white dark:bg-gray-800 p-4 mb-6 hover:shadow-2xl hover:-translate-y-1 transition cursor-pointer">
    {post.coverImage && (
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-48 object-cover rounded"
      />
    )}
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{post.excerpt}</p>
      <div className="flex items-center gap-2 mb-2">
        {post.author.image ?
          <Image
            src={post.author.image}
            alt={post.author.name}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
        : <FaUserSecret />}
        <span className="text-sm">{post.author.name}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        {post.tags?.map((tag) => (
          <span
            key={tag}
            className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="text-xs text-gray-400">
        {new Date(post.createdAt).toLocaleDateString()}
      </span>
    </div>
  </div>
);

export default PostCard;