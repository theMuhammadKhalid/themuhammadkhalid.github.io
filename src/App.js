import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
      </Switch>
    </Router>
  );
}

export default App;
