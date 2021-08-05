import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import "./App.css";
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
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Skills" exact component={Skills} />
        <Route path="/Work" exact component={Work} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
