import Link from "next/link"
import { ModeToggle } from "./ModeToggle";
import { Navigation } from "lucide-react";
export default function Navigasi(){
    return (
        <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
        <Link href="/" className="font-bold text-3xl">
            Arrosyid<span className="text-primary">Blog</span>
        </Link>
        <Link href="/tentang" className="font-bold text-l">
                Tentang
        </Link>
        <Link href="/kontak" className="font-bold text-l">
                Kontak
        </Link>

        <ModeToggle/>
        </nav>
    );
    };