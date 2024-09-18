import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
    openGraph: {
        title: 'Kontak - Arrosyid Al Ayubi',
        description: 'Arrosyid Al Ayubi Personal Website',
        url: 'https://www.arrosyid.my.id/kontak',
        siteName: 'ArrosyidBlog',
        images: [
            {
                url: 'https://www.arrosyid.my.id/og.png', // Must be an absolute URL
                width: 800,
                height: 600,
            },
            {
                url: 'https://www.arrosyid.my.id/og-alt.png', // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: 'OpenGraph Image',
            },
        ],
        locale: 'id_ID',
        type: 'website',
    },
}
export default async function Kontak() {
    return (
        < div className = "w-full max-w-6xl md:container md:mx-auto content-center text-center items-center my-28" >
        <h1 className="text-4xl text-center font-bold">Kontak</h1>
        <p>Kontak saya di </p>
            <SpeedInsights />
        </div >
    )
}