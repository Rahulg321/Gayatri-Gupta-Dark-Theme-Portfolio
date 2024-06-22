import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CircleArrowRight, MoveUpRight } from "lucide-react";

type BlogCardProps = {
  post: Content.BlogpostDocument;
};

const BlogCard = ({ post }: BlogCardProps) => {
  const { title, featured_image } = post.data;
  const publicationDate = new Date(post.first_publication_date);
  const publicationDateString = publicationDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="shadow-lg border-2">
      <Link href={`/blogs/${post.uid}`}>
        <PrismicNextImage field={featured_image} className="aspect-auto" />
        <CardHeader>
          <h4>{title}</h4>
          <CardDescription>{publicationDateString}</CardDescription>
        </CardHeader>
        <CardFooter>
          <h5 className="text-muted-foreground flex items-center gap-1">
            Read more <CircleArrowRight />
          </h5>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BlogCard;
