import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";
import MusicPlayer from "./pages/project/project-details/MusicPlayer";
import TodoList from "./pages/project/project-details/TodoList";
import FaceRecognition from "./pages/project/project-details/FaceRecognition";
import Card from "./pages/project/project-details/Card";
import ZoomClone from "./pages/project/project-details/ZoomClone";
import RCRPLanding from "./pages/project/project-details/RCRPLanding";

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
        <Route path="/project/todo-list" exact component={TodoList} />
        <Route path="/project/face-recognition" exact component={FaceRecognition} />
        <Route path="/project/3d-card-animation" exact component={Card} />
        <Route path="/project/zoom-clone" exact component={ZoomClone} />
        <Route path="/project/rcrp-landing-page" exact component={RCRPLanding} />
      </Switch>
    </Router>
  );
}

export default App;
