import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
export default function Home() {
  return (
   <>
    <Navbar />

    <main>

           <Hero />
           <Services />
           <Results />
           <Testimonials />
           <Pricing />
           <Contact />


    </main>

   
   
   
   <Footer />
   </>
  );
}
