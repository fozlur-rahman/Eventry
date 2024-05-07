import Image from "next/image";
import ActionsButton from "../ActionsButton";
import Link from "next/link";
import EventSchemaScripts from "../meta/EventSchemaScripts";

const EventCard = ({ event }) => {
    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <EventSchemaScripts event={event} />
            <Image
                src={event.imageUrl}
                alt="Event 1"
                className="w-full"
                width={100}
                height={100}
            />

            <div className="p-3">
                <Link
                    href={`/details/${event.id}`}
                    className="font-bold text-lg"
                >
                    {event.name}
                </Link>
                <p className="text-[#9C9C9C] text-sm mt-1">{event.location}</p>
                <div className="text-[rgb(115,115,115)] text-sm mt-1">
                    <span>{event.interested_ids.length} Interested</span>
                    <span> | </span>
                    <span>{event.going_ids.length} Going</span>
                </div>

                <ActionsButton
                    eventId={event?.id}
                    interestedUserIds={event?.interested_ids}
                    addGoingIds={event?.going_ids}
                />
            </div>
        </div>
    );
};

export default EventCard;
