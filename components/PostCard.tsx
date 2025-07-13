import { TPostModel } from "@/types/post";
import Image from "next/image";
import { FaUserSecret } from "react-icons/fa";
import { TfiComment, TfiHeart } from "react-icons/tfi";

type PostCardProps = {
  post: TPostModel;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <div
    className="
    rounded-lg shadow-lg dark:bg-gray-800 
    p-0 mb-6 hover:shadow-2xl hover:-translate-y-1 transition cursor-pointer
    flex flex-col
    w-full sm:w-[320px] md:w-[350px] lg:w-[370px]
    sm:h-[420px] md:h-[440px] lg:h-[460px]
    max-w-full
    overflow-hidden
  "
    style={{ minWidth: 0 }}
  >
    {/* Cover image */}
    {post.coverImage && (
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-48 object-cover rounded"
      />
    )}

    <div className="mt-4 flex flex-col flex-1 overflow-hidden px-4">
      {/* Author, date & read time */}
      <div className="flex items-center gap-2 mb-2">
        <div>
          {post.author.image ? (
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={32}
              height={32}
              className="w-10 h-10 rounded-full bg-amber-200"
            />
          ) : (
            <FaUserSecret />
          )}
        </div>

        <div className="text-[.7rem] font-extralight">
          <p className=" mb-1">{post.author.name}</p>

          <div className="text-gray-400">
            <span>
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>・</span>
            <span>5 mins read</span>
          </div>
        </div>
      </div>

      {/* Title, excerpt & tags */}
      <h2 className="text-2xl font-extralight mb-2">{post.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
        {post.excerpt}
      </p>

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
    </div>

    <div className="px-4 pb-1">
      <hr className="text-gray-300" />

      <div className="flex items-center justify-between mt-2 text-[.7rem] pb-4">
        <p className="">20 views</p>

        <div className="flex items-center gap-2">
          <span className="flex items-center justify-between gap-1">
            {post.likedBy.length} <TfiHeart className="text-red-600" />
          </span>
          <span className="flex items-center justify-between text-xs ml-2 gap-1">
            {post.comments.length} <TfiComment />
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default PostCard;
