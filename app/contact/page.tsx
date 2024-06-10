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

const page = () => {
  return (
    <>
      <section className="narrow-container block-space">
        <h1>Contact</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          eaque quia, libero numquam sapiente ducimus. Cum officiis qui, commodi
          maxime nemo, laborum inventore eveniet consectetur, cumque repellat
          minus ea alias?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <Button>Send Email</Button>
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
                I'm very active on X and share value every day over there. Just
                DM me and I'll get back to you asap!
              </p>
            </CardContent>
            <CardFooter>
              <Button>DM me on Linkedin</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

export default page;
