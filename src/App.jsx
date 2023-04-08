import Info from "./components/info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App(){
  return(
    <div className="myContainer">
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}