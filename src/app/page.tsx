import About from "@/components/About";
import Contact from "@/components/Contact";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Privacy from "@/components/Privacy";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <GetStarted />
      <Privacy />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
