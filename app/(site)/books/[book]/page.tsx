"use client";

import { getBook } from "@/sanity/sanity-utils";
import { Book } from "@/types/Book";
import React, { useEffect, useState } from "react";

type Props = {
  params: { book: string };
};

const Book = ({ params }: Props) => {
  const slug = params.book;
  const [currentBook, setCurrentBook] = useState<Book>();

  useEffect(() => {
    const fetchData = async () => {
      const postData = await getBook(decodeURIComponent(slug));
      setCurrentBook(postData);
    };

    fetchData();
  }, [currentBook, slug]);

  return (
    <div
      className={`flex flex-col justify-center py-20 px-10 lg:px-32 mx-auto rtl`}
    >
      <p>{currentBook?.name}</p>
    </div>
  );
};

export default Book;
