import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Camera,
  CircleUserRound,
  FileText,
  GanttChart,
  Home,
  Linkedin,
  Music,
  Sun,
} from "lucide-react";
import { ModeToggle } from "./theme-toggle";

const DesktopSidebar = () => {
  return (
    <div className="border-r-4 px-4 py-6 bg-primary-foreground">
      <div className="sticky top-6">
        <ProfileAvatar />
        <nav className=" mt-4 space-y-2">
          <NavLink label="Home" href="/" icon={<Home />} />
          <NavLink label="Projects" href="/projects" icon={<GanttChart />} />
          <NavLink label="Blogs" href="/blogs" icon={<FileText />} />
          <NavLink label="Photos" href="/photos" icon={<Camera />} />
          <NavLink label="Music" href="/photos" icon={<Music />} />
          <NavLink label="Books" href="/photos" icon={<BookOpen />} />
          <NavLink label="About" href="/about" icon={<CircleUserRound />} />
        </nav>
        <h4 className="mt-8">Connect</h4>
        <div className=" mt-2 space-y-2">
          <NavLink label="Contact" href="/contact" icon={<FileText />} />
          <NavLinkArrow label="LinkedIn" href="" icon={<Linkedin />} />
          <NavLinkArrow label="Upwork" href="" icon={<Briefcase />} />
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default DesktopSidebar;

function NavLink({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-muted-foreground transition-all
      duration-200 ease-in-out hover:text-foreground flex items-center gap-4 p-2 rounded-md"
    >
      <div className="h-[1.2rem] w-[1.2rem]">{icon}</div>
      {label}
    </Link>
  );
}

function NavLinkArrow({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-muted-foreground transition-all
      duration-200 ease-in-out hover:text-foreground flex items-center justify-between p-2 rounded-md"
    >
      <div className="flex items-center gap-4">
        <div className="h-[1.2rem] w-[1.2rem]">{icon}</div>
        {label}
      </div>
      <div className="h-[1.2rem] w-[1.2rem]">
        <ArrowUpRight />
      </div>
    </Link>
  );
}
