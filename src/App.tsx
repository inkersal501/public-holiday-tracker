import { useState } from 'react';
import { FetchHolidaysResponse } from './types/Holiday';
import styles from "./App.module.css";
import HolidayForm from './components/HolidayForm';
import HolidayList from './components/HolidayList';
import { fetchHolidays } from './api/holidayApi';
 
function App() {

    const [holidays, setHolidays] = useState<FetchHolidaysResponse>([]); 

    const handleSearch = async (country: string) => { 
        const data = await fetchHolidays(country);
        setHolidays(data); 
    }


    return (
        <div className={styles.App}>
            <header className={styles.header}>
                <h1>Public Holiday Tracker</h1>
                <HolidayForm onSearch={handleSearch}/>               
            </header>
            { holidays && ("message" in holidays  ? <h3>Error Fetching Holidays</h3> : <HolidayList holidays={holidays}/>)}
               
        </div>
    )
}

export default App