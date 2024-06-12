import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Content } from "@prismicio/client";
import * as prismic from "@prismicio/client";
import { Sparkles, Star } from "lucide-react";
import { PrismicNextImage } from "@prismicio/next";

const BookCard = ({ post }: { post: Content.BookDocument }) => {
  const finishedDate = prismic.asDate(post.data.finishing_date);
  const rating = post.data.rating as number;
  const publicationDateString = finishedDate?.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Card className="bg-accent">
      <PrismicNextImage field={post.data.book_image} />
      <CardHeader>
        <h4>{post.data.title}</h4>
        <CardDescription>By {post.data.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <Sparkles key={index} className="text-yellow-500 text-xl" />
            ))}
        </div>
      </CardContent>
      <CardFooter>Finished: {publicationDateString}</CardFooter>
    </Card>
  );
};

export default BookCard;
