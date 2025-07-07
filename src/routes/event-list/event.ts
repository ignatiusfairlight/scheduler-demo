type Event = {
    id: string;
    title: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    location: string;
};
    
   export const data: Event[] = [
    {
        id: "728ed52f",
        title: "Jogging Day",
        startDate: "17 July 2025",
        startTime: "9:00 AM",
        endDate: "20 July 2025",
        endTime: "12:00 AM",
        location: "Home",
    },
   ];

export async function getEvent() {
    return data;
}