import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin, Milestone, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="narrow-container block-space">
        <h1>Contact</h1>
        <p>
          Whether you require legal counsel or freelance expertise, I'm here to
          collaborate and deliver exceptional results. For legal inquiries, feel
          free to schedule a consultation using the calendar below. My freelance
          services are available for project-based work, and you can reach out
          directly via the contact form to discuss your specific needs and
          request a quote. Let's connect and turn your legal or project
          challenges into triumphs.
        </p>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-4">
          <Card className="bg-primary-foreground">
            <CardHeader>
              <CardTitle>
                <div className="p-4 rounded-full bg-zinc-300 dark:bg-accent w-fit">
                  <Milestone className="h-[1.2rem] w-[1.2rem]" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4>General Inquiries</h4>
              <p className="text-muted-foreground text-sm">
                Send me a message if you have a question about a product,
                article or just need advice on something
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link
                  href="mailto:advocategayatrigupta@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Email
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-primary-foreground">
            <CardHeader>
              <CardTitle>
                <div className="p-4 rounded-full bg-zinc-300 dark:bg-accent w-fit">
                  <Linkedin className="h-[1.2rem] w-[1.2rem]" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4>Linkedin</h4>
              <p className="text-muted-foreground text-sm">
                I'm very active on Linkedin and share value every day over
                there. Just DM me and I'll get back to you asap!
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link
                  href="https://www.linkedin.com/in/gayatri-gupta-377060233/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DM me on Linkedin
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

export default page;
