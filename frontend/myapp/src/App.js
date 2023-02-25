import "./App.css";
import Footer from "./components.js/footer";
import Navbar from "./components.js/navBar";
function App({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default App;
