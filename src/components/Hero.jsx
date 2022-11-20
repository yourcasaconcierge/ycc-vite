import headerImg from "../assets/images/header-img.jpg";
import HeroForm from "./contact/HeroForm";
import { motion as m } from "framer-motion";
import MailChimpForm from "./contact/MailChimpForm";

const Hero = () => {
  const styles = {
    backgroundImage: `url(${headerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <header
      id="home"
      className="relative lg:bg-fixed w-full flex flex-col justify-center h-screen text-white"
      style={styles}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#000] opacity-90 z-20" />
      <div className="relative container garamond layout-padding flex flex-col gap-3 xl:block z-30">
        <h2 className="text-xl xl:text-2xl">Lightening your load</h2>
        <h1 className="text-5xl xl:text-8xl">With great service</h1>
        <button className="xl:hidden border border-white py-2 px-4 self-start">
          <a href="#contact">Contact Us</a>
        </button>
      </div>
      <MailChimpForm />
    </header>
  );
};

export default Hero;
