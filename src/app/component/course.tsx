import Link from "next/link";

export default function Course(){
    return(
        <div className="mt-4">
            <Link href="/courses/frontend" className="ml-0 p-2 text-xl bg-red-400 border-2 rounded-2xl hover:bg-red-950 hover:text-white">Frontend</Link>
            <br /><br />
            <Link href="/courses/backend" className="ml-0  p-2 text-xl bg-red-400 border-2 rounded-2xl hover:bg-red-950 hover:text-white">backend</Link>
        </div>
    )
}