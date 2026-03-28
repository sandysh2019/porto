import { Hero } from '@/sections/Hero';
import { Projects } from '@/sections/Projects';
import { Services } from '@/sections/Services';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

export function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
