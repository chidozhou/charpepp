import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQs/Faqs";
import Pricing from "./components/Pricing/Pricing";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Choose from "./components/Choose/Choose";

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About setPlayState={setPlayState} />
        <Choose />
        <Title subTitle="OUR SERVICES" title="What We Offer" />
        <Services />

        {/* <Title subTitle="Gallery" title="Our Work" />
        <Gallery /> */}
        <Title
          subTitle="OUR CARE PACKAGES"
          title="Choose A Plan That Fits Your Loved One's Needs."
        />
        <Pricing />
        <Title subTitle="TESTIMONIALS" title="What Our Clients Say" />
        <Testimonials />
        <Title subTitle="FAQs" title="Questions You Might Have" />
        <FAQ />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
