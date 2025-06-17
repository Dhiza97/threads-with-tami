const PostCardSkeleton = () => (
  <div className="rounded-lg shadow-lg bg-gray-100 dark:bg-gray-700 p-4 mb-6 animate-pulse">
    <div className="w-full h-48 bg-gray-300 dark:bg-gray-600 rounded mb-4" />
    <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2" />
    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-2" />
    <div className="flex items-center gap-2 mb-2">
      <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full" />
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4" />
    </div>
    <div className="flex gap-2 mb-2">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-10" />
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-10" />
    </div>
    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/3" />
  </div>
);

export default PostCardSkeleton;