import Hero from "@/components/grids/Hero";
import ExperienceAbout from "@/components/grids/ExperienceAbout";
import StackProjects from "@/components/grids/StackProjects";
import Testimonials from "@/components/grids/TestimonialCarousel";
import Footer from "@/components/grids/Footer";
import Contact from "@/components/grids/Contact";
import ChatBot from "@/components/chatbot/Chatbot";

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
        <ChatBot />
      </div>
    </main>
  );
}
