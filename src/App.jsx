import { Route, Routes } from "react-router-dom";
import "./App.css";
import ReferralHome from "./pages/ReferralHome";
import ReferralDetails from "./pages/ReferralDetails";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ReferralHome />}></Route>
        <Route path="/referral-details" element={<ReferralDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
