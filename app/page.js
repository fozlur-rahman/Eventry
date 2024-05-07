import Loader from "@/components/Loader";
import EventsList from "@/components/landing/EventsList";
import Header from "@/components/landing/Header";
import { Suspense } from "react";

export default function Home({ searchParams: { query } }) {
    return (
        <section className="container">
            <Header />
            <Suspense key={query} fallback={<Loader />}>
                <EventsList query={query} />
            </Suspense>
        </section>
    );
}
