import { getEvent } from './event'

export async function load() {
    const event = await getEvent();
    return {
        event,
    };
}