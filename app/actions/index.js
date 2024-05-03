"use server";

import {
    createUser,
    fundUserByCredentials,
    updateInterest,
    updatedInterestedId,
} from "@/db/quires";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// register
async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const created = await createUser(user);
    redirect("/login");
}

// login
async function LoginUser(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");
        const found = await fundUserByCredentials(credential);
        return found;
    } catch (error) {
        throw new Error(error.message);
    }
}

// upadte interested
async function addInterestedEvent(eventId, authId) {
    try {
        await updateInterest(eventId, authId);
    } catch (error) {
        throw error;
    }
    revalidatePath("/");
}

export { registerUser, LoginUser, addInterestedEvent };
