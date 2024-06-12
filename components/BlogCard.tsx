import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { CircleArrowRight, MoveUpRight } from "lucide-react";

type BlogCardProps = {
  post: Content.BlogpostDocument;
};

const BlogCard = ({ post }: BlogCardProps) => {
  const { title, featured_image } = post.data;
  return (
    <Card className="">
      <Link href={`/blogs/${post.uid}`}>
        <PrismicNextImage field={featured_image} className="aspect-auto" />
        <CardHeader>
          <h4>{title}</h4>
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
