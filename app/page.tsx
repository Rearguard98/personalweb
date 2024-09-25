import { Card, CardContent } from "@/components/ui/card";
import { postCard } from "./lib/interface";
import {client, urlFor} from "./lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

async function getData(){
  const query = `
  *[_type=='post'] | order(_createdAT desc){
  title,
    excerpt,
    "currentSlug":slug.current,
    poster,
}`;
  

const data = await client.fetch(query)
return data;
}
export const metadata = {
  openGraph: {
    title: 'Arrosyid Al Ayubi',
    description: 'Arrosyid Al Ayubi Personal Website',
    url: 'https://www.arrosyid.my.id',
    siteName: 'ArrosyidBlog',
    images: [
      {
        url: 'https://www.arrosyid.my.id/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.arrosyid.my.id/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'OpenGraph Image',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
}
export const revalidate = 60
export default async function Home() {
  const data: postCard[] = await getData()
  
  return (
    <>
    <div>
        <h1 className="p-20 text-center text-5xl font-bold">Halo Selamat Datang di Website Pribadi saya</h1>
    </div>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      
      {data.map((post,idx) =>(
        <Card key={idx}>
          <Image 
          src={urlFor(post.poster).url()} 
          alt="image"
          width={800} 
          height={800}
          className="rounded-t-lg h-[200px] object-cover"
          />
          <CardContent className="mt-5">
            <h2 className="text-lg line-clamp-2 font-bold">{post.title}</h2>
            <p className="line-clamp-2 text-small pt-5 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>Selengkapnya</Link>

            </Button>
          </CardContent>
        </Card>
      ))}
      <SpeedInsights />
    </div>
    </>);
  }
