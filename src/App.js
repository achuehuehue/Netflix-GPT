import Header from "./components/header";
import Body from "./components/body";
import { Provider } from "react-redux";
import appstore from "./utils/appStore";

function App() {
  return (
    <Provider store={appstore}>
      <Body></Body>
    </Provider>
  );
}

export default App;
