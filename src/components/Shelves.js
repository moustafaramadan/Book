import React from "react";
import Shelf from "./Shelf";
const Shelves = ({ books, changeShelves }) => {
  const currentlyReading =
    books &&
    Array.isArray(books) &&
    books.filter((book) => book.shelf === "currentlyReading");
  const wantToRead =
    books &&
    Array.isArray(books) &&
    books.filter((book) => book.shelf === "wantToRead");
  const read =
    books &&
    Array.isArray(books) &&
    books.filter((book) => book.shelf === "read");
  return (
    <div>
      <Shelf
        title="Currently Reading"
        books={currentlyReading}
        changeShelves={changeShelves}
      />
      <Shelf
        title="Want to Read"
        books={wantToRead}
        changeShelves={changeShelves}
      />
      <Shelf title="Read" books={read} changeShelves={changeShelves} />
    </div>
  );
};

export default Shelves;
