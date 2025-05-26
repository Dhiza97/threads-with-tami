import React from 'react'
import PostCard from './PostCard'
import { TPostModel } from '@/types/post'

type CategoryProps = {
  posts: TPostModel[];
};

const Category: React.FC<CategoryProps> = ({ posts }) => {
  return (
    <div className='px-5 lg:px-8 xl:px-[8%] py-4'>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}

export default Category