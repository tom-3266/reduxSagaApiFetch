import Counter from "./Counter/counter";
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import "./App.css";
import CountdownTimer from "./Timer/timer";
import PromiseRetry from "./Promise/promise";
import DataComponent from "./DataComponent/dataComponent";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <div> </div>
      <CountdownTimer />
      <PromiseRetry />
      <DataComponent />
    </Provider>
  );
}

export default App;
