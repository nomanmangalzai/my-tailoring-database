import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/CustomerDetails";
import About from "./components/About";
import Navbar from "./components/Navbar";
import FetchCustomers from "./components/FetchCustomers";
import ContactUs from "./components/ContactUs";
import FetchOneNaaf from "./components/FetchOneNaaf";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-12 min-h-screen">
        <Routes>
          <Route path="/save-customer" element={<Home />} />
          <Route path="/get-one-naaf" element={<FetchOneNaaf />} />
          <Route path="/about" element={<About />} />
          <Route path="/fetch-customer" element={<FetchCustomers />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
