import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Contact />
    </Layout>
  );
}
