import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { lora, playfairDisplay } from "@/fonts";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <hr />
   <Category />
   </>
  )
}