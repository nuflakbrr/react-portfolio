import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";
import MusicPlayer from "./pages/project/projectdetails/MusicPlayer";
import FaceRecognition from "./pages/project/projectdetails/FaceRecognition";
import Card from "./pages/project/projectdetails/Card";
import ZoomClone from "./pages/project/projectdetails/ZoomClone";
import RCRPLanding from "./pages/project/projectdetails/RCRPLanding";
import Pilketos from "./pages/project/projectdetails/Pilketos";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/skill" exact component={Skills} />
        <Route path="/project" exact component={Project} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/project/music-player" exact component={MusicPlayer} />
        <Route path="/project/face-recognition" exact component={FaceRecognition} />
        <Route path="/project/3d-card-animation" exact component={Card} />
        <Route path="/project/zoom-clone" exact component={ZoomClone} />
        <Route path="/project/rcrp-landing-page" exact component={RCRPLanding} />
        <Route path="/project/pilketos-smktelkom" exact component={Pilketos} />
      </Switch>
    </Router>
  );
}

export default App;
