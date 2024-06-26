import Featuredcouses from "@/components/Featuredcouses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-3xl text-center"></h1>
      < Herosection />
      < Featuredcouses />
      < WhyChooseUs />
      < TestimonialCards />
      < UpcomingWebinars />
      < Instructors />
      < Footer />
    </main>
  );
}
