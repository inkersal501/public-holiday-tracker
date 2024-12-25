import axios from "axios";
import { FetchHolidaysResponse } from "../types/Holiday";
 
export async function fetchHolidays (country: string): Promise<FetchHolidaysResponse> {
    const data = await axios.get(`https://holiday-tracker-backend.labs.crio.do/holidays?country=${country}`)
    .then((response) => {
        return response.data;
    }).catch((error) => {
        return error.response.data;
    })
    return data;
};