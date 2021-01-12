import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Test from "./components/Test";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/test" component={Test} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
