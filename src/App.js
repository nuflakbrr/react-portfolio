import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Work from "./pages/project/Work";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Navbars />
        <Route path="/" exact components={Home} />
        <Route path="/About" exact components={About} />
        <Route path="/Skills" exact components={Skills} />
        <Route path="/Work" exact componens={Work} />
        <Route path="/Contact" exact components={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
