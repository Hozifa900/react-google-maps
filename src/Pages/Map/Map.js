import React from "react";
import $ from "jquery";
import "./Map.css";
import { Button } from "react-bootstrap";
import Autocomplete from "react-google-autocomplete";
import { useContext } from "react";
import { DataContext } from "../../Model/DataContext";

export default function Map() {
  const [location, setLocation] = useContext(DataContext);
  $("document").ready(function () {
    setTimeout(function () {
      initMap();
    }, 500);
  });
  // map code function ......................................................................................................

  const initMap = async () => {
    var map;
    var mapEarea = document.getElementById("map");

    // option to set the default center and zoom for the map
    var mapOptions = {
      center: { lat: 25.2048, lng: 55.2708 },
      zoom: 15,
    };

    // Get the curent location
    const infoWindow = new window.google.maps.InfoWindow();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          mapOptions.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          marker.setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          console.log(mapOptions);

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          //handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      //handleLocationError(false, infoWindow, map.getCenter());
    }
    // end of Get the curent location @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    // create new instance from google map class to drow the map
    map = new window.google.maps.Map(mapEarea, mapOptions);

    // options to add marker we have to set position and the map object the theard
    // option to make the marker dreaggble so you can move int when ever you wont
    var markerOption = await {
      position: mapOptions.center,
      map: map,
      Draggable: false,
    };

    // create new instance from google map marker class to drop the marker
    var marker = new window.google.maps.Marker(markerOption);

    // creake click event on the map to change marker position by clicking any where in the map
    window.google.maps.event.addListener(map, "click", function (e) {
      marker.setPosition({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });

      //console.log(marker.position.lat() + " " + marker.position.lng());
      location.lat = marker.position.lat();
      location.lng = marker.position.lng();
      location.loc = `${marker.position.lat()},${marker.position.lng()}`;
      console.log(location);
      $("#user_map").val(marker.position.lat() + "," + marker.position.lng());
    });
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: "1",
          top: "70px",
        }}
      >
        <div style={{ width: "90%" }}>
          <Autocomplete
            style={{
              width: "100%",
              height: "40px",
              boxShadow: "0px 5px 20px -5px #7d7d7d",
              borderRadius: "5px",
              border: "0px",
              paddingLeft: "10px",
            }}
            apiKey={"AIzaSyAV8VEG1RLclapyZ92xOujbsX1lRnIksdc"}
            onPlaceSelected={(place, inputRef, autocomplete) => {
              console.log(autocomplete);
            }}
            options={{
              types: ["(regions)"],
              /* componentRestrictions: { country: "sd" }, */
            }}
            defaultValue=""
          />
        </div>
      </div>
      <div id="map" className="map"></div>
    </div>
  );
}
