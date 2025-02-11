// // src/components/Dashboard.jsx
// import React from "react";
// import { auth } from "../firebase";
// import { signOut } from "firebase/auth";
// import './dashboard.css'; // Import your CSS file

// const Dashboard = ({ user, setUser }) => {
//   const handleLogout = async () => {
//     try {
//       await signOut(auth); // Sign out the user
//       setUser(null); // Clear the user state
//     } catch (error) {
//       console.error("Logout error:", error.message); // Handle errors
//     }
//   };

//   return (
//     <div className="dashboard-section">
//       <div className="form1">
//         <h2>Welcome to Your Dashboard!</h2>
//         {/* Display the user's email */}
//         <p>You are logged in as: <strong>{user.email}</strong></p>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import './dashboard.css'; // Import your CSS file

const Dashboard = ({ user, setUser }) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        const sheetUrl =
          "https://script.google.com/macros/s/AKfycby6NFzjgjxZzE6OwTM8MV0wgwvaE_kh93fY1X7T7bIMcNasTrZg5Rns00ok-ViuCSX_/exec";

        const response = await fetch(sheetUrl);
        const data = await response.json();

        const normalizedData = data.map((row) => ({
          timestamp: row["Timestamp"]?.trim(),
          name: row["Name "]?.trim(),
          phone: row["Phone "]?.toString().trim(),
          email: row["Email Id"]?.trim().toLowerCase(), // Normalize email
          instaId: row["Instagram Id"]?.trim(),
          age: row["Age "]?.toString().trim(),
          gender: row["Gender"]?.trim(),
        }));

        // Filter by email (normalized)
        const filteredData = normalizedData.filter(
          (row) => row.email === user.email.toLowerCase()
        );

        setUserData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome to Your Dashboard</h2>
        {user && <p>Logged in as: <strong>{user.email}</strong></p>}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="dashboard-container">
        {loading ? (
          <p>Loading data...</p>
        ) : userData.length > 0 ? (
          <table className="user-table">
            <thead>
              <tr>
                {/* <th>Timestamp</th> */}
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Instagram ID</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((row, index) => (
                <tr key={index}>
                  {/* <td>{row.timestamp}</td> */}
                  <td>{row.name}</td>
                  <td>{row.phone}</td>
                  <td>{row.email}</td>
                  <td>{row.instaId}</td>
                  <td>{row.age}</td>
                  <td>{row.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data found for your email.</p>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
