import { singlePost } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const revalidate = 60
async function getData(slug:string){
    const query = `
    *[_type == "post" && slug.current == '${slug}']{
        "currentSlug":slug.current,
        title,
        content,
        poster,
        alt,
        attribute
    }[0]`;

    const data = await client.fetch(query);
    return data;
}
export default async function BlogArticle({
    params,}:{
    params:{slug:string};
}){
    const data: singlePost = await getData(params.slug);

    return (
        <div className="w-full mt-28 items-center mb-28">
        <h1 className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</h1>
<Image src={urlFor(data.poster).url()} width={1920} height={1080} alt="image" className="items-center w-full rounded-lg mt-10 border" priority/>        
<div className="mt-16 prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary w-full">
    <PortableText value={data.content}/>
</div>
            <SpeedInsights />
</div> 
    );
}