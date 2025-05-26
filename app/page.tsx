import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <Hero />
      <hr />
      <Category posts={posts} />
    </>
  );
}
