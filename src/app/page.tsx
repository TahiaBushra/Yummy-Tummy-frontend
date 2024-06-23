import About from "@/components/About";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Privacy from "@/components/Privacy";
import { Contact } from "lucide-react";

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
