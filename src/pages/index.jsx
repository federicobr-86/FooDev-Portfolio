import React from "react";
import Hero from "../components/Hero/index";
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <ContactForm />
      </main>
    </>
  );
};

export default Home;
