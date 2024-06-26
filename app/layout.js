import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { dbConnect } from "@/services/mongo";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Eventry | Home",
    description:
        "A single entry to connect to all online events from the globe",
};

export default async function RootLayout({ children }) {
    await dbConnect();
    return (
        <html lang="en">
            <AuthProvider>
                <body className={inter.className}>
                    <Navbar />
                    <main className="py-8 container">{children}</main>
                </body>
            </AuthProvider>
        </html>
    );
}
