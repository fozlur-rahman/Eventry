"use server";

import EmailTamplate from "@/components/payments/EmailTamplate";
import {
    createUser,
    fundUserByCredentials,
    getEventById,
    updateGoing,
    updateInterest,
    updatedInterestedId,
} from "@/db/quires";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";

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

// payment
async function addGoingEvent(eventId, user) {
    try {
        await updateGoing(eventId, user?._id);
        await sendEmail(eventId, user);
    } catch (error) {
        throw new Error(error.message);
    }

    revalidatePath("/");
    redirect("/");
}

// send email
async function sendEmail(eventId, user) {
    try {
        console.log(eventId, user, process.env.RESEND_API_KEY);
        const event = await getEventById(eventId);
        const resend = new Resend(process.env.RESEND_API_KEY);
        const message = `Dear ${user?.name} you have been successfully regitered for event , ${event?.name}. Please carry this email nd your official id to the venue`;

        const send = await resend.emails.send({
            from: "noreply@noreply.tapascript.io",
            to: user?.email,
            subject: "Successfully registered for this event",
            react: EmailTamplate({ message }),
        });
    } catch (error) {
        throw new Error(error.message);
    }
}

export { registerUser, LoginUser, addInterestedEvent, addGoingEvent };
