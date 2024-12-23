import React from 'react';
import styles from "../App.module.css";
import { Holiday } from '../types/Holiday';

interface HolidayListProps {
    holidays: Holiday[] 
} 
function HolidayList({holidays}:HolidayListProps) {
    
    const  formatDate = (dateString: string):string =>{
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions  = { day: 'numeric', month: 'long' }; 
        return date.toLocaleDateString('en-GB', options); 
    }

    return (
        <div>
            <section id="holiday-list" className={styles.holidayList}>
                {holidays.length > 0 ? (
                    holidays.map((holiday, index) => (
                        <div key={index} className={styles.holidayCard}>
                            <h3>{holiday["Holiday Name"]}</h3>
                            <h4>{formatDate(holiday.Date)}</h4>
                            <h4>{holiday.Type}</h4>
                        </div>
                    ))
                ) : (
                    <p>No holidays</p>
                )}
            </section>
        </div>
    )
}

export default HolidayList;