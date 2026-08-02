import Hero from "@/components/grids/Hero";
import ExperienceAbout from "@/components/grids/ExperienceAbout";
import StackProjects from "@/components/grids/StackProjects";
import Testimonials from "@/components/grids/TestimonialCarousel";
import Contact from "@/components/grids/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceAbout />
      <StackProjects />
      <Testimonials />
      <Contact />
    </>
  );
}
