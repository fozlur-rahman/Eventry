import EventsList from "@/components/landing/EventsList";
import Header from "@/components/landing/Header";

export default function Home() {
    return (
        <section className="container">
            <Header />
            <EventsList />
        </section>
    );
}
