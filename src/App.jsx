import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import Login from "./component/login";
import Signup from "./component/signup";  // Import the Signup component
import Dashboard from "./component/dashboard";
import Period from "./component/period";
import Futuremap from "./component/future";
import PreHistoric from "./component/Prehistoricmap";
import Iron from "./component/IronAge";
import Registerevt from "./component/registerfroevent";
import FEvent1 from "./component/evt1";
// import Barr from "./component/bar";
import TRefi from "./component/tabelregister"
// import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user ? user : null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />  {/* Signup route */}
          <Route path="/period" element={<Period />} />  {/* Signup route */}
          <Route path="/futurmap" element={<Futuremap />} />  {/* Signup route */}
          <Route path="/PreHistoric" element={<PreHistoric />} />  {/* Signup route */}
          <Route path="/iron" element={<Iron />} />  {/* Signup route */}
          <Route path="/registerevt" element={<Registerevt />} />  {/* Signup route */}
          <Route path="/FEvent1" element={<FEvent1 />} />  {/* Signup route */}
          <Route path="/TRefi" element={<TRefi />} />  {/* Signup route */}
          {/* <Route path="/Barr" element={<Barr />} />  Signup route */}
          <Route path="/dashboard" element={user ? <Dashboard user={user} setUser={setUser} /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
