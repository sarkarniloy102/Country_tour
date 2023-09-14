import { useState } from 'react';
import './Country.css'

const Country = ({ country, handlevisitedcountries }) => {

    const [visited, setvisited] = useState(false);

    const handlevisit = () => {
        setvisited(!visited);
    }

    const { name, flags, population, area, cca3 } = country;
    return (
        <div className={`country ${visited ? 'visit_country' : 'non_visit'}`}>
            <h3 style={{ color: visited ? 'purple' : 'white' }}>Name: {name?.common}</h3>
            <img style={{ width: '100%', height: '200px' }} src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button style={{ background: '	#ff6666', marginRight: '10px' }} onClick={handlevisit}>{visited ? 'visted' : 'want to go'}</button>

            <button onClick={() => handlevisitedcountries(country)}>Mark visited</button>
            <br />
            {visited && 'I have already visted this country'};

        </div >
    );
};

export default Country;