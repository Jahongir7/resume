import "./App.css";
import AboutMe from "./components/Aboutme";
import Carusel from "./components/Carusel";
import ContactUs from "./components/Email";
import Footer from "./components/Footer";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <Main />
      <AboutMe />
      <Carusel />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
