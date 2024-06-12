import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProfileAvatar from "./ProfileAvatar";
import {
  BookOpen,
  Briefcase,
  Camera,
  CircleUserRound,
  Component,
  FileText,
  GanttChart,
  Home,
  Linkedin,
  Music,
} from "lucide-react";
import Link from "next/link";
import { NavLink, NavLinkArrow } from "./Sidebar";
import { ModeToggle } from "./theme-toggle";

const MobileNavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="rounded-full bg-accent p-4">
          <Component />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="">
        <SheetHeader>
          <SheetTitle>
            <ProfileAvatar />
          </SheetTitle>
        </SheetHeader>
        <nav className=" mt-4 space-y-2">
          <NavLink label="Home" href="/" icon={<Home />} />
          <NavLink label="Projects" href="/projects" icon={<GanttChart />} />
          <NavLink label="Blogs" href="/blogs" icon={<FileText />} />
          <NavLink label="Photos" href="/photos" icon={<Camera />} />
          <NavLink label="Books" href="/photos" icon={<BookOpen />} />
          <NavLink label="About" href="/about" icon={<CircleUserRound />} />
          <NavLink label="Contact" href="/contact" icon={<FileText />} />
        </nav>
        <ModeToggle />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSheet;
