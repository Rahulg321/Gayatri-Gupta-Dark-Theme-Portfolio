"use client";

import React, { useState } from "react";
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
import { ModeToggle } from "./theme-toggle";

const MobileNavSheet = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet
      open={sheetOpen}
      onOpenChange={(e) => {
        console.log("e", e);
        setSheetOpen(e);
      }}
    >
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
        <nav className="mt-4 space-y-2">
          <NavLink
            label="Home"
            href="/"
            icon={<Home />}
            onClick={() => setSheetOpen(false)}
          />
          <NavLink
            label="Projects"
            href="/projects"
            icon={<GanttChart />}
            onClick={() => setSheetOpen(false)}
          />
          <NavLink
            label="Blogs"
            href="/blogs"
            icon={<FileText />}
            onClick={() => setSheetOpen(false)}
          />
          <NavLink
            label="Photos"
            href="/photos"
            icon={<Camera />}
            onClick={() => setSheetOpen(false)}
          />
          <NavLink
            label="Books"
            href="/books"
            icon={<BookOpen />}
            onClick={() => setSheetOpen(false)}
          />
          <NavLink
            label="About"
            href="/about"
            icon={<CircleUserRound />}
            onClick={() => setSheetOpen(false)}
          />
          <NavLink
            label="Contact"
            href="/contact"
            icon={<FileText />}
            onClick={() => setSheetOpen(false)}
          />
        </nav>
        <div className="mt-4 ml-2">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSheet;

export function NavLink({
  label,
  href,
  icon,
  onClick,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="text-muted-foreground transition-all
      duration-200 ease-in-out hover:text-foreground flex items-center gap-4 p-2 rounded-md"
      onClick={onClick}
    >
      <div className="h-[1.2rem] w-[1.2rem]">{icon}</div>
      {label}
    </Link>
  );
}
