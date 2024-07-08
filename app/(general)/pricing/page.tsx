import { log } from "console"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Ivan Junoy - Pricing',
    description: 'Best dude',
    keywords: ['Ivan Junoy', 'Dudeee']
}

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing</span>
        </>
    )
}