import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const countries = [
    { name: 'France', cities: ['Paris', 'Lyon', 'Marseille'] },
    { name: 'Italy', cities: ['Rome', 'Milan', 'Venice'] },
    { name: 'Japan', cities: ['Tokyo', 'Kyoto', 'Osaka'] },
];

function SelectCountry({addDestination}) {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState('');

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setSelectedCity('');
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        addDestination({ country: selectedCountry, city });
    };

   return  (
   
    <div>
        <DropdownButton id="dropdown-country-button" title="Select Country">
            {countries.map((country, index) => (
                <Dropdown.Item key={index} onClick={() => handleCountrySelect(country.name)}>
                    {country.name}
                </Dropdown.Item>
            ))}
        </DropdownButton>

        {selectedCountry && (
            <DropdownButton id="dropdown-city-button" title="Select City">
                {countries.find(c => c.name === selectedCountry).cities.map((city, index) => (
                    <Dropdown.Item key={index} onClick={() => handleCitySelect(city)}>
                        {city}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        )}

        {selectedCity && (
            <div>
                <p>Selected Destination: {selectedCity}, {selectedCountry}</p>
            </div>
        )}
    </div>
);
}
    

export default SelectCountry;