import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

export default App;
