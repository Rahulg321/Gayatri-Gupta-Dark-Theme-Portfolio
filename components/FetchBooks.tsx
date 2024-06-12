import React from "react";
import BookCard from "./BookCard";
import { createClient } from "@/prismicio";

const FetchBooks = async () => {
  const client = createClient();
  const books = await client.getAllByType("book");

  return (
    <div className="blog-index">
      {books.map((book) => (
        <BookCard key={book.id} post={book} />
      ))}
    </div>
  );
};

export default FetchBooks;
