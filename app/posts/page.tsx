import React from 'react'

const posts = () => {
  return (
    <div className='px-5 lg:px-8 xl:px-[8%] py-4'>
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <p className="text-gray-600 mb-8">
            This is the posts page. You can add your posts here.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Post cards will go here */}
            {/* Example post card */}
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Post Title</h2>
            <p className="text-gray-700">This is a brief description of the post.</p>
            </div>
        </div>
    </div>
  )
}

export default posts
