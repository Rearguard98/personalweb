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
    <div className="w-full max-w-6xl md:container md:mx-auto content-center text-center items-center my-28">
        <h1 className="text-4xl text-center line-clamp-2 font-bold">Tentang</h1>
        <p className="text-left text-small pt-5 text-gray-600 dark:text-gray-300">Halo, perkenalkan nama saya Arrosyid Al-Ayubi. Saya seorang mahasiswa jurusan Dirasat Islamiyah (Studi Islam) di Universitas Islam Negeri Syarif hidayatullah Jakarta. </p>
        <p className="text-left text-small pt-5 text-gray-600 dark:text-gray-300">Saya belajar membuat website dari kelas 2 MA di Pondok Pesantren Modern Al-Hassan, Bekasi. dan berlanjut sampai sekarang. Awalnya saya memilih jurusan Sistem Informasi di UIN, sayangnya saya tidak lulus disana saat Pendaftaran Mandiri tapi lulus di Studi agama karena saya ada fondasi di Keagamaan.</p>
        <p className="text-left text-small pt-5 text-gray-600 dark:text-gray-300">Belajar dan bergelut dengan Wordpress selama lebih dari 4 tahun sampai sekarang, akhirnya saya mencoba untuk mempelajari Pemograman React dan Framework Next.js yang tergolong dalam Pemograman untuk Website Modern.</p> 
    </div>
)
}