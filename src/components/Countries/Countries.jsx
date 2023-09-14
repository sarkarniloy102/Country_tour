import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'




const Countries = () => {

    const [countries, setcountries] = useState([]);
    const [visitedcountries, setvisitedcountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setcountries(data))
    }, [])

    const handlevisitedcountries = (country) => {
        const newvisitedcountries = [...visitedcountries, country];
        setvisitedcountries(newvisitedcountries);
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>List of visit country : {visitedcountries.length}</h3>
                <ul>
                    {
                        visitedcountries.map(country => <li key={Country.cca3}>{country.name.common}</li>)}
                </ul>

            </div>
            <div className="country_container">
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3}
                            country={country}
                            handlevisitedcountries={handlevisitedcountries}>

                        </Country>)
                }
            </div>

        </div>
    );
};

export default Countries;