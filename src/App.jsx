import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <About />
        <Service />
        <Testimonials />
        <ContactUs />
      </main>
      <footer className="bg-blueMarine h-[5vh] py-[10px] ">
        <h1 className="text-center text-white ">
          Created by{" "}
          <a className="hover:text-blueSky text-blue-300" href="#">
            {" "}
            Michael Diaz{" "}
          </a>
        </h1>
      </footer>
    </>
  );
}

export default App;
