import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from "../App.module.css";
import axios from 'axios';

interface HolidayFormProps {
    onSearch: (country: string) => void;
}

function HolidayForm({onSearch}:HolidayFormProps) {

    const [countries, setCountries] = useState<string[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    
     useEffect(()=>{
        const fetchCountries = async () => {
            try {
                const response = await axios.get("https://holiday-tracker-backend.labs.crio.do/countries");
                setCountries(response.data);
            } catch (error) {
                console.log("Error fetching countries");
            }
        };
        
        fetchCountries();
     },[]);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onSearch(selectedCountry);
    }

    return (
        <div>
            <form id="holiday-form" onSubmit={handleSubmit}>
                <div className={styles.formContainer}>
                    <div>
                        <select id="country-select" className={styles.selectBox} onChange={(e) => setSelectedCountry(e.target.value)} value={selectedCountry}>
                            <option value={""}>Select a country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>
                                    {country[0].toUpperCase()+country.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button type="submit" id="fetch-holidays" className={styles.btn}>Search</button>
                    </div>                        
                </div>                    
            </form>
        </div>
    )
}

export default HolidayForm;
