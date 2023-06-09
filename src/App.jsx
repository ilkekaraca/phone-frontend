import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [phones, setPhones] = useState([]);

  const fetchPhones = async () => {
    try {
      const allPhonesRes = await fetch("http://localhost:5005/api/phones");
      const allPhones = await allPhonesRes.json();
      console.log(allPhones);
      setPhones(allPhones);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <>
      {phones.map((phone) => (
        <div className="phone-card">
          <img
            height="200px"
            src={`/images/${phone.imageFileName}`}
            alt="Iphone"
          />
          <div className="phones-info">
            <h1>{phone.manufacturer}</h1>

            <h2>{phone.name}</h2>
            <p>{phone.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
