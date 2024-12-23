import { useState } from 'react';
import { Holiday } from './types/Holiday';
import styles from "./App.module.css";
import HolidayForm from './components/HolidayForm';
import HolidayList from './components/HolidayList';
import { fetchHolidays } from './api/holidayApi';
 
function App() {

    const [holidays, setHolidays] = useState<Holiday[]>([]);
    const [error, setError] = useState<string>("");
        
    const handleSearch = async (country: string) => {
        setError(""); 
      
        const data = await fetchHolidays(country);
        setHolidays(data.response);
        setError(data.error);   
                 
    }


    return (
        <div className={styles.App}>
            <header className={styles.header}>
                <h1>Public Holiday Tracker</h1>
                <HolidayForm onSearch={handleSearch}/>               
            </header>
            { error==="" && holidays.length > 0 ? 
                <HolidayList holidays={holidays}/>
            :
                <h3>{error}</h3>  
            } 
        </div>
    )
}

export default App