import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SearchBox from "./SearchBox";

export default function Header() {
    return (
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
                <Link href={"/"} className="flex gap-1 items-center">
                    <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
                        {" "}
                        IMDb
                    </span>
                    <span className="text-xl hidden sm:inline">Clone</span>
                </Link>
                <DarkModeSwitch />
            </div>

            <SearchBox />

            <ul className="flex gap-4 items-center">
                <li className="hidden sm:block">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="hidden sm:block">
                    <Link href={"/favorites"}>Favorites</Link>
                </li>
                <li className="hidden sm:block">
                    <Link href={"/about"}>About</Link>
                </li>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <Link href={"/sign-in"}>Sign in</Link>
                </SignedOut>
            </ul>
        </div>
    );
}
