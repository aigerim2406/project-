import "./app.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCounties/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";

function App() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <h5>Where in the world?</h5>
                </div>
                <div>
                    <i className="fas fa-moon"></i>Dark Mode
                </div>
            </div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<AllCountries />} />
                    <Route path="/country/:countryName" element={<CountryInfo />} />
                </Routes>
            </div>
        </>
    );
}

export default App;