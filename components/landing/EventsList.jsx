import React from "react";
import EventCard from "./EventCard";
import { getAllEvents } from "@/db/quires";

const EventsList = async () => {
    const events = await getAllEvents();
    console.log(events);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {events.length > 0 &&
                events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
        </div>
    );
};

export default EventsList;
