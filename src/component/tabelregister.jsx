import React, { useState, useEffect } from "react";

const events = [
  { name: "Tech Conference", date: "2025-03-10T00:00:00", link: "https://example.com/register-tech" },
  { name: "Music Fest", date: "2025-04-15T00:00:00", link: "https://example.com/register-music" },
  { name: "Art Exhibition", date: "2025-05-20T00:00:00", link: "https://example.com/register-art" },
];

const EventList = () => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    const updateTimers = () => {
      const newTimers = events.map(event => {
        const eventDate = new Date(event.date).getTime();
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) return "Event Started";

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
      });
      setTimers(newTimers);
    };

    updateTimers();
    const interval = setInterval(updateTimers, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Countdown</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{new Date(event.date).toLocaleDateString()}</td>
              <td>{timers[index]}</td>
              <td>
                <a href='https://forms.gle/X22n45VcsxLHJYNy6' target="_blank" rel="noopener noreferrer">
                  <button>Register</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>
        {`
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f4f4f4;
          }
          button {
            padding: 5px 10px;
            background-color: blue;
            color: white;
            border: none;
            cursor: pointer;
          }
          a {
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default EventList;
