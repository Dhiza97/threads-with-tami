import React from "react";
import PostCard from "./PostCard";
import { TPostModel } from "@/types/post";
import PostCardSkeleton from "./PostCardSkeleton";
import Link from "next/link";

type RecentPostProps = {
  posts: TPostModel[];
  loading?: boolean;
};

const RecentPost: React.FC<RecentPostProps> = ({ posts, loading }) => {
  return (
    <div className="px-5 lg:px-8 xl:px-[8%] py-20">
      <h2 className="text-4xl mb-4">Recent Posts</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Discover the latest articles and insights from our community.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {
          loading
          ? Array.from({ length: 6 }).map((_, i) => <PostCardSkeleton key={i} />)
          : posts.map((post) => (
            <Link key={post.slug} href={`post/${post.slug}`} className="block">
              <PostCard post={post} />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default RecentPost;