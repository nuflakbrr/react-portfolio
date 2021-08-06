import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";
import MusicPlayer from "./pages/project/project-details/MusicPlayer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/project" exact component={Project} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/Project/music-player" exact component={MusicPlayer} />
      </Switch>
    </Router>
  );
}

export default App;
