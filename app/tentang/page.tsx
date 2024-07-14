import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata = {
    openGraph: {
        title: 'Arrosyid Al Ayubi',
        description: 'Arrosyid Al Ayubi Personal Website',
        url: 'https://www.arrosyid.my.id',
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
export default async function Tentang(){
return (
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        <h1>Tentang</h1>
    </div>
)
}