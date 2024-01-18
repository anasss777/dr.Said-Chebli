"use client";

import { getBooks } from "@/sanity/sanity-utils";
import { Book } from "@/types/Book";
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
    <div>
      {books.map((book, index) => (
        <div key={index}>
          <p>{book.name}</p>
          <iframe
            src={book.fileURL}
            width={500}
            height={500}
            className="mx-auto flex h-screen w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Books;
