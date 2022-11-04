import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./components/UserDetails";
import Repos from "./components/Repos";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:login" element={<UserDetails />}>
          <Route path="" element={<Overview />} />
          <Route path="repos" element={<Repos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
