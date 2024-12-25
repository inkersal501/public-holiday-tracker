export interface Holiday {
    Country: string,
    "Country Code": string,
    Day: string,
    Date: string,
    "Holiday Name": string,
    Type: string,
    Comments: string
}

export interface MessageResponse {
    message: string;
}

export type FetchHolidaysResponse = Holiday[] | MessageResponse;