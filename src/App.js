import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Info from "./components/Info/Info";
import Spinner from "./components/Spinner/Spinner";
import Map from "./components/Map/Map";
function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const click = (name) => {
    setSelectedCountry(name);
  };
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${selectedCountry}`)
      .then((res) => res.json())
      .then((data) => setCountryDetails(data[0]));
  }, [selectedCountry]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div className="wrapper">
      {loading ? (
        <div className="spinner-container">
          <Spinner></Spinner>
        </div>
      ) : (
        <>
          <div className="container-fluid header">
            <h1 className="header-title">World map App</h1>
            <div className="cyan">
              click on each Country for more details...
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-9 ">
                <div className="map-container">
                  <Map clickHandler={click}></Map>
                </div>
              </div>
              <div className="col-sm-12 col-lg-3 info-contaier">
                <div>
                  {countryDetails ? (
                    <Info info={countryDetails} name={selectedCountry}></Info>
                  ) : (
                    <Spinner></Spinner>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="footer">Developed By Hossein Khoshnevis</div>
        </>
      )}
    </div>
  );
}

export default App;
