// css
import "../css/App.css";

// modules
import QRCode from "react-qr-code";
import { useState } from "react";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());
  setInterval(() => {
    setCurrentDate(new Date().toLocaleString());
  }, 10000);

  return (
    <div className="App">
      <div style={{ background: "white", padding: "16px" }}>
        <QRCode value={currentDate} />
        <p>{currentDate}</p>
      </div>
    </div>
  );
}

export default App;
