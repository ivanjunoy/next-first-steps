import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Ivan Junoy - About',
 description: 'Ivan Junoy - About page, information about me.',
};

export default function AboutPage() {
    return (
        <>
            <main className="flex flex-col items-center p-24">
                <span className="text-7xl">About Page</span>
            </main>
        </>
    )
}