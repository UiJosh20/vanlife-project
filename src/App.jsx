import { Navigate, Route, Routes } from "react-router-dom";
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
import Signin from "./Components/Signin";
import Notfound from "./Components/Notfound";
import Dashvandetails from "./Components/Dashvandetails";
import Details from "./Components/Details";
import Pricing from "./Components/Pricing";
import Photos from "./Components/Photos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/van" element={<Navigate to="/vans" />} />
          <Route path="/signup" element={<Navigate to="/signin" />} />
          <Route path="/host/van" element={<Navigate to="/host/vans" />} />
          <Route
            path="/host/review"
            element={<Navigate to="/host/reviews" />}
          />
          <Route
            path="/host/incomes"
            element={<Navigate to="/host/income" />}
          />

          <Route path="/host" element={<Host />}>
            <Route path="/host" element={<Navigate to="/host/dashboard" />} />
            <Route path="/host/dashboard" element={<Dashboard />} />
            <Route path="/host/income" element={<IncomePage />} />
            <Route path="/host/reviews" element={<ReviewDash />} />
            <Route path="/host/vans" element={<VanDash />} />
            <Route path="/host/vans/:id" element={<Dashvandetails />}>
              <Route path="/host/vans/:id" element={<Details />} />
              <Route path="/host/vans/:id/pricing" element={<Pricing />} />
              <Route path="/host/vans/:id/photos" element={<Photos />} />
            </Route>
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Van />} />
          <Route path="/api/vans/:id" element={<Vandetails />} />
          <Route path="*" element={<Notfound />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
