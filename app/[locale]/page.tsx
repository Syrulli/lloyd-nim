import Hero from "@/components/Hero";
import ExperienceAbout from "@/components/ExperienceAbout";
import StackProjects from "@/components/StackProjects";
import Testimonials from "@/components/TestimonialCarousel";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink py-8 sm:py-14 px-4">
      <div className="mx-auto max-w-5xl flex flex-col gap-4">
        <Hero />
        <ExperienceAbout />
        <StackProjects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
