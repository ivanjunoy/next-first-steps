import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Ivan Junoy - Contact',
    description: 'Ivan Junoy - Contact page, chat whith me!',
    keywords: ['Ivan Junoy', 'Programador', 'Tipaso']
};
   
export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact</span>
        </>
    )
}