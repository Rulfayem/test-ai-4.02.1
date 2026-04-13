import React, { useState } from "react";

const Counter = () => {
  const [entryCount, setEntryCount] = useState(0);
  const [exitCount, setExitCount] = useState(0);
  const [history, setHistory] = useState([]); // 👈 NEW

  const updateEntry = () => {
    setEntryCount(entryCount + 1);

    const newAction = {
      type: "Entry",
      time: new Date().toLocaleTimeString(),
    };

    updateHistory(newAction);
  };

  const updateExit = () => {
    setExitCount(exitCount + 1);

    const newAction = {
      type: "Exit",
      time: new Date().toLocaleTimeString(),
    };

    updateHistory(newAction);
  };

  // 👇 handles keeping only last 10 actions
  const updateHistory = (action) => {
    setHistory((prev) => {
      const updated = [action, ...prev];
      return updated.slice(0, 10); // keep only last 10
    });
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "auto",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Counter</h1>

      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          <strong>Entries:</strong>{" "}
          <span style={{ fontWeight: "bold", color: "#28a745" }}>
            {entryCount}
          </span>
        </p>
        <button
          className="btn btn-success"
          onClick={updateEntry}
        >
          Add Entry
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          <strong>Exits:</strong>{" "}
          <span style={{ fontWeight: "bold", color: "#dc3545" }}>
            {exitCount}
          </span>
        </p>
        <button
          className="btn btn-danger"
          onClick={updateExit}
        >
          Add Exit
        </button>
      </div>

      {/* ✅ Bootstrap Table */}
      <h4>Last 10 Actions</h4>
      <table className="table table-striped table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Action</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {history.length === 0 ? (
            <tr>
              <td colSpan="3">No actions yet</td>
            </tr>
          ) : (
            history.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td
                  className={
                    item.type === "Entry"
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {item.type}
                </td>
                <td>{item.time}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Counter;