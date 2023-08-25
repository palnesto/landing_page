import "./App.css";
import Body from "./component/Body";
import Bottom from "./component/Bottom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="h-screen overflow-x-hidden">
      <Navbar />
      <Body />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
