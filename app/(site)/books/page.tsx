"use client";

import BlogCard from "@/components/BlogCard";
import { getBooks } from "@/sanity/sanity-utils";
import { Book } from "@/types/Book";
import { tree } from "next/dist/build/templates/app-page";
import React, { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
    };

    fetchData();
  }, []);

  return (
    <div className={`flex flex-col mx-auto justify-center`}>
      <h1
        className={`flex mx-auto text-3xl md:text-4xl lg:text-5xl mt-20 text-primary font-bold`}
      >
        كتبي
      </h1>

      <div className={`py-20 px-10 lg:px-32 flex flex-wrap gap-5`}>
        {books.map((book, index) => (
          <BlogCard
            key={index}
            title={book.name}
            categories={book.categories}
            imageSrc={
              book.mainImage ? book.mainImage.asset.url : "/images/quran3.png"
            }
            pageLink={book.fileURL}
            isbook={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
