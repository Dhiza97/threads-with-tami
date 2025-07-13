"use client";

import AllPost from "@/components/AllPost";
import { TPostModel } from "@/types/post";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const posts = () => {
  const [active, setActive] = useState(false);
  const [posts, setPosts] = useState<TPostModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/post")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className="px-5 lg:px-8 xl:px-[8%] py-20 min-h-screen">
      <h1 className="text-[48px] font-light mt-10">Blog</h1>

      <div className="mt-8 mb-4 flex justify-between items-center">
        <Link href={"/posts"} className="text-sm">
          All Posts
        </Link>

        {/* animated expandable search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            onClick={() => setActive(true)}
            className={`rounded-none border-0 border-b text-sm transition-all duration-200 px-4 py-2 w-full max-w-xs focus:outline-none ${
              active ? "border-b-1 border" : "border-b-0"
            }`}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={() => setActive(true)}
          >
            <CiSearch />
          </button>
        </div>
      </div>

      <AllPost posts={posts} loading={false} />
    </div>
  );
};

export default posts;