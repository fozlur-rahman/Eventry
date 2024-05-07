import { eventModel } from "@/models/events-models";
import { userModel } from "@/models/user-models";
import {
    repleceMongoDbIdArray,
    repleceMongoDbIdInObject,
} from "@/utils/data-utils";
import mongoose from "mongoose";

// find events
async function getAllEvents(searchQuery) {
    let allEvents = [];
    if (searchQuery) {
        const regex = new RegExp(searchQuery, "i");
        allEvents = await eventModel.find({ name: { $regex: regex } }).lean();
    } else {
        allEvents = await eventModel.find().lean();
    }

    return repleceMongoDbIdArray(allEvents);
}

// find event by id
async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return repleceMongoDbIdInObject(event);
}

// create user
async function createUser(user) {
    const createuser = await userModel.create(user);
    return createuser;
}

// found user credentials
async function fundUserByCredentials(user) {
    const findUser = await userModel.findOne(user).lean();
    return findUser;
}

// updated interested id
async function updateInterest(eventId, authId) {
    const event = await eventModel.findById(eventId);

    if (event) {
        const foundUsers = event.interested_ids.find(
            (id) => id.toString() === authId
        );

        if (foundUsers) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(authId));
        }

        event.save();
    }
}

async function updateGoing(eventId, authId) {
    const event = await eventModel.findById(eventId);
    event.going_ids.push(new mongoose.Types.ObjectId(authId));

    event.save();
}

export {
    getAllEvents,
    getEventById,
    createUser,
    fundUserByCredentials,
    updateInterest,
    updateGoing,
};
