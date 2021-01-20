import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Test from "./components/Test";
import Login from "./components/Login";
import Home from "./components/Home";
import PublicNavbar from "./components/PublicNavbar";
import JobDetail from "./components/JobDetail";
import JobsList from "./components/JobsList";

function App() {
  return (
    <div className="App">
      <PublicNavbar />
      <Switch>
        <Route path="/test" component={Test} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/jobs" exact component={JobsList} />
        <Route path="/jobs/:id" component={JobDetail} />
      </Switch>
    </div>
  );
}

export default App;
