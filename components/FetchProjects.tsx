import { createClient } from "@/prismicio";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";

const FetchProjects = async () => {
  //await 3 seconds
  // await new Promise((resolve) => setTimeout(resolve, 20000));
  const client = createClient();
  const projects = await client.getAllByType("project");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {projects.map((project) => (
        <Card className="" key={project.uid}>
          <Link href={`/projects/${project.uid}`}>
            <CardHeader>
              <h4>{project.data.title}</h4>
              <CardDescription>{project.data.timeline}</CardDescription>
            </CardHeader>
            <CardFooter>
              <h6 className=" text-muted-foreground flex items-center gap-1">
                Learn more <CircleArrowRight />
              </h6>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default FetchProjects;
