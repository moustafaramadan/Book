import React from "react";
import BookList from "./BookList";
import { Link } from "react-router-dom";

const Search = ({handelDeleteSearch, changeShelves, searchedbooks, search, handleSearch, mixedBooks}) => {
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={handelDeleteSearch}>
          Close
        </Link>
         
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={search}
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {mixedBooks &&
              Array.isArray(mixedBooks) &&
              mixedBooks.map((b) => (
                <li key={b.id}>
                  <BookList book={b} changeShelves={changeShelves} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Search;
