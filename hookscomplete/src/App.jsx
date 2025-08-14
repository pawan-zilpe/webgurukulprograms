import CallbackHook from "./components/Callback/CallbackHook";
import UserContext from "./components/ContextHook/UserContext";
import UseIdHook from "./components/UseIdHook";
import UseMemoHook from "./components/UseMemoHook";
import UseReducerHook from "./components/UseReducerHook";
import Datatable from "./program/Datatable";
import ParentComponent from "./components/Callback/CallbackHook";
const App = () => {
  return (
    <div>
      <CallbackHook/>
      <UseIdHook/>
      <UseMemoHook/>
      <UserContext/>
      <Datatable/>
      <UseReducerHook/>
      <ParentComponent/>
    </div>
  );
};

export default App;
