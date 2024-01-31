import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Van from "./Components/Van";
import Vandetails from "./Components/Vandetails";
import Host from "./Components/Host";
import Dashboard from "./Components/Dashboard";
import IncomePage from "./Components/IncomePage";
import VanDash from "./Components/VanDash";
import ReviewDash from "./Components/ReviewDash";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/host" element={<Host />}>
              <Route path="/host" element={<Dashboard/>}/>
              <Route path="/host/income" element={<IncomePage/>}/>
              <Route path="/host/vans" element={<VanDash/>}/>
              <Route path="/host/reviews" element={<ReviewDash/>}/>
          </Route>
  
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Van />} />
          <Route path="/api/vans/:id" element={<Vandetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
