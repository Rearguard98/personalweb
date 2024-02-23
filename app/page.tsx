import { Card, CardContent } from "@/components/ui/card";
import { postCard } from "./lib/interface";
import {client, urlFor} from "./lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
export const revalidate = 60
export default async function Home() {
  const data: postCard[] = await getData()
  
  return (
    <div className="mb-50px grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post,idx) =>(
        <Card key={idx}>
          <Image 
          src={urlFor(post.poster).url()} 
          alt="image"
          width={500} 
          height={500}
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
    </div>
  );
}
