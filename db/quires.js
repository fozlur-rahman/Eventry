import { eventModel } from "@/models/events-models";
import {
    repleceMongoDbIdArray,
    repleceMongoDbIdInObject,
} from "@/utils/data-utils";

async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    return repleceMongoDbIdArray(allEvents);
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return repleceMongoDbIdInObject(event);
}

export { getAllEvents, getEventById };
