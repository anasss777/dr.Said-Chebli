import BlogsSection from "@/components/BlogsSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import VideosSection from "@/components/VideosSection";

export default function Home() {
  return (
    <main className="space-y-10">
      <Hero />
      <BlogsSection />
      <VideosSection />
      <Footer />
    </main>
  );
}
