import NavbarItem from "./NavbarItem";
export default function Navbar() {
    return (
        <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
            <NavbarItem title="Trending" param="trending" />
            <NavbarItem title="Top Rated" param="rated" />
            Oh god I hope nobody sees this and think this is a reflection of
            what I do for the rest of my programming commits. I swear this is
            the only time that I'm doing these
        </div>
    );
}
