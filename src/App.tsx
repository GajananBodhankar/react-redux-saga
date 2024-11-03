import "./App.css";
import { Provider } from "react-redux";
import Store from "./redux-saga/Store";
import View from "./redux-saga/View";

function App() {

  return (
    <Provider store={Store}>
      <View />
    </Provider>
  );
}

export default App;
