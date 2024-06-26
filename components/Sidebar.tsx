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
    <div className="h-full hidden md:block border-r-4 px-4 py-6 bg-primary-foreground">
      <div className="sticky top-6">
        <ProfileAvatar />
        <nav className="mt-4 space-y-2">
          <NavLink label="Home" href="/" icon={<Home />} />
          <NavLink label="Projects" href="/projects" icon={<GanttChart />} />
          <NavLink label="Blogs" href="/blogs" icon={<FileText />} />
          <NavLink label="Photos" href="/photos" icon={<Camera />} />
          <NavLink label="Books" href="/books" icon={<BookOpen />} />
          <NavLink label="About" href="/about" icon={<CircleUserRound />} />
        </nav>
        <h4 className="mt-8">Connect</h4>
        <div className=" mt-2 space-y-2">
          <NavLink label="Contact" href="/contact" icon={<FileText />} />
          <NavLinkArrow label="LinkedIn" href="https://www.linkedin.com/in/gayatri-gupta-377060233/" icon={<Linkedin />} />
          <NavLinkArrow label="Upwork" href="https://www.upwork.com/freelancers/~01473de59e63e94a6a?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~01473de59e63e94a6a%2Fprofile" icon={<Briefcase />} />
        </div>
        <div className="mt-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;

export function NavLink({
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

export function NavLinkArrow({
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
      target="_blank"
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
