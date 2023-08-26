import "./App.css";
import Body from "./component/Body";
import Bottom from "./component/Bottom";
import FixedButton from "./component/FixedButton";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <Navbar />
      <Body />
      <Bottom />
      <Footer />
      <FixedButton />
    </div>
  );
}

export default App;
