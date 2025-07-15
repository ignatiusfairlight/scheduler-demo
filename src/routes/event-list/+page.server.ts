import { getEvents } from "./events";

export async function load() {
    const events = await getEvents();
    return {
     events,
    };
   }