import logo from "./logo.svg";
import Map from "./Pages/Map/Map.js";
import { Modal, Button } from "react-bootstrap";
import Autocomplete from "react-google-autocomplete";
import { useState, useContext } from "react";
import { DataContext } from "./Model/DataContext";

import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [location] = useContext(DataContext);

  //Git the current location in map
  const GetLocation = () => {
    alert(
      `location: ${location.loc} | lat: ${location.lat} | lng: ${location.lng}`
    );
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ margin: "20px" }}>
        Select Your Location
      </Button>

      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          backgroundColor: "gray",
          top: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            width: "90%",
            position: "relative",
            borderRadius: "5px",
            height: "90vh",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              height: "70px",
              width: "100%",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              psition: "relative",
            }}
          >
            <font style={{ marginLeft: "20px", float: "left" }} font-size="700">
              Your location
            </font>
            <img
              src="./close.png"
              style={{
                float: "right",
                marginRight: "20px",
                width: "15px",
                height: "15px",
                cursor: "pointer",
                opacity: "0.5",
              }}
              onClick={handleShow}
            />
          </div>
          <div style={{ position: "relative", marginTop: "70px" }}>
            <Map />
          </div>
          <div
            style={{
              height: "100px",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <button
              style={{
                marginTop: "-100px",
                backgroundColor: "#ffc853",
                width: "90%",
                position: "absolute",
                border: "0",
                borderRadius: "50px",
                height: "40px",
                color: "white",
              }}
              onClick={GetLocation}
            >
              <strong>CONFIRM</strong>
            </button>
            <font
              style={{
                fontSize: "small",
                marginBottom: "0px",
                position: "absolute",
                bottom: "20px",
              }}
            >
              Hi There! Set your location and explore the best cleaners in your
              area
            </font>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
