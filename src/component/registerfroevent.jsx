import React, { useEffect, useState } from 'react';

const UserTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your Google Apps Script Web App URL
    const sheetUrl = 'https://script.google.com/macros/s/AKfycby6NFzjgjxZzE6OwTM8MV0wgwvaE_kh93fY1X7T7bIMcNasTrZg5Rns00ok-ViuCSX_/exec';

    fetch(sheetUrl)
      .then((response) => response.json())
      .then((data) => {
        // Normalize the keys (remove trailing spaces and fix naming)
        const normalizedData = data.map((row) => ({
          Timestamp: row['Timestamp'],
          Name: row['Name '], // Remove trailing space
          Phone: row['Phone '], // Remove trailing space
          'Email.Id': row['Email Id'], // Fix key name
          'Insta Id': row['Instagram Id'], // Fix key name
          Age: row['Age '], // Remove trailing space
          Gender: row['Gender'],
        }));
        console.log(normalizedData); // Log normalized data
        setData(normalizedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Timestamp</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Phone</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Email.Id</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Insta Id</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Age</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{row.Timestamp}</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{row.Name}</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{row.Phone}</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{row['Email.Id']}</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{row['Insta Id']}</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{row.Age}</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{row.Gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;