import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import "./style/landingpage.css";
import Superhero from "./components/Superhero";

function App() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
