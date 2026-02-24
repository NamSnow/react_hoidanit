import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/js/MyComponent.js";

const App = () => {
  return (
    <div className="app-container">
      <MyComponent />
    </div>
  );
};

export default App;
