import { Fragment, useState, useEffect } from "react";
import Link from "next/link"

export default function Kaki() {
    return (

        <section className=" grid-cols-4 w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-10">
            <Link href="/tentang" className="font-bold text-l">
                Tentang
            </Link>
            <p className="font-bold">&copy; {new Date().getFullYear()} All Rights Reserved</p>
            <Link href="/kontak" className="font-bold text-l">
                Kontak
            </Link>

        </section>
    );
};