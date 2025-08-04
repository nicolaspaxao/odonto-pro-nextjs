import { FunctionComponent } from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Professionals from "./_components/Professionals";
import Footer from "./_components/Footer";

const Home: FunctionComponent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div >
        <Hero />
        <Professionals />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
