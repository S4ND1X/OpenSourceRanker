// Libraries
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// Component imports
import Home from "./pages/Home";
import RepoScore from "./pages/RepoScore";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("osranker-likes"))
      localStorage.setItem("osranker-likes", JSON.stringify([]));
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/repo/:url" component={RepoScore} />
        <Route path="/repo">
          <Redirect to="/" />
        </Route>
        <Route component={() => <h1>404 page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
