
import './App.css'

import Dashboard1 from "./component/Dashboard/Dashboard1";
import Dashboard2 from "./component/Dashboard/ActivityGraph";
import Dashboard3 from "./component/Dashboard/Grid";
import Dashboard4 from "./component/Dashboard/RecentTransactions";
import Dashboard5 from "./component/Dashboard/StatCards";
import Dashboard6 from "./component/Dashboard/TopBar";
import Dashboard7 from "./component/Dashboard/UsageRadar";

import Sidebar1 from "./component/Sidebar/AccountToggle";
import Sidebar2 from "./component/Sidebar/Sidebar";
import Sidebar3 from "./component/Sidebar/Plan";
import Sidebar5 from "./component/Sidebar/RouteSelect";
import Sidebar6 from "./component/Sidebar/Search";




function App() {


  return (
    <>
    
      <Dashboard1 />
      <Dashboard2 />
      <Dashboard3 />
      <Dashboard4 />
      <Dashboard5 />
      <Dashboard6 />
      <Dashboard7 />

      <Sidebar1 />
      <Sidebar2 />
      <Sidebar3 />
      <Sidebar5 />
      <Sidebar6 />
    </>
  )
}

export default App;
