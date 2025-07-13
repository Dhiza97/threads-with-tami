import React from 'react'
import { TPostModel } from "@/types/post";
import Link from 'next/link';
import PostCard from './PostCard';
import PostCardSkeleton from './PostCardSkeleton';

type AllPostProps = {
  posts: TPostModel[];
  loading?: boolean;
};

const AllPost: React.FC<AllPostProps> = ({ posts, loading }) => {
  return (
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
  )
}

export default AllPost