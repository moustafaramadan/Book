import React from "react";
import Shelves from "./Shelves";
import { Link } from "react-router-dom";

const Home = ({books, changeShelves }) => {
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Shelves books={books} changeShelves={changeShelves} />
        <div className="open-search">
        <Link to="/search" className='open-search'> Add a Book </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
