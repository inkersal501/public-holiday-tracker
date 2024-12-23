import axios from "axios";
import { Holiday } from "../types/Holiday";

interface fetchHolidaysReturn {
    response: Holiday[],
    error: string
}
export async function fetchHolidays (country: string): Promise<fetchHolidaysReturn> {
    try {
        const response = await axios.get(`https://holiday-tracker-backend.labs.crio.do/holidays?country=${country}`);
        return {response: response.data, error: ""};
    } catch (error) { 
        return {response: [], error: "Failed to fetch holidays"};
    }
};