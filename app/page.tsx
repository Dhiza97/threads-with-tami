import RecentPost from "@/components/RecentPost";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxQuote from "@/components/ParallaxQuote";
import SubscriptionForm from "@/components/SubscriptionForm";

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
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
      <RecentPost posts={posts} />
      <ParallaxQuote />
      <SubscriptionForm />
      <Footer />
    </>
  );
}
