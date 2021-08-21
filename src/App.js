import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";
import MusicPlayer from "./pages/project/projectdetails/MusicPlayer";
import FaceRecognition from "./pages/project/projectdetails/FaceRecognition";
import ZoomClone from "./pages/project/projectdetails/ZoomClone";
import Quiz from "./pages/project/projectdetails/QuizApp";
import Pilketos from "./pages/project/projectdetails/Pilketos";
import NotFound from "./components/NotFound";
import SpeedTest from "./pages/project/projectdetails/SpeedTest";
import Hangman from "./pages/project/projectdetails/Hangman";
import Markdown from "./pages/project/projectdetails/Markdown";
import Github from "./pages/project/projectdetails/GhUser";

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
        <Route path="/project/zoom-clone" exact component={ZoomClone} />
        <Route path="/project/quiz-app" exact component={Quiz} />
        <Route path="/project/pilketos-smktelkom" exact component={Pilketos} />
        <Route path="/project/website-speed-test" exact component={SpeedTest} />
        <Route path="/project/hangman" exact component={Hangman} />
        <Route path="/project/markdown-previewer" exact component={Markdown} />
        <Route path="/project/github-user-card" exact component={Github} />
        <Route path="/notfound" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
