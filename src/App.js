import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import * as BooksAPI from "./BooksAPI";
import Search from "./components/Search";
function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchedbooks, setSearchedbooks] = useState([]);
  const [mixedBooks, setMixedBooks]= useState([])
  const [booksID, setbooksID]= useState(new Map())
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
    setbooksID  (CreateBooks(res))
  };

  useEffect(() => {
    getBooks();
  }, [search]);

useEffect (()=>{
const Mix= searchedbooks?.map(book=>{
 if(booksID.has(book.id)){
  return booksID.get(book.id);
 }else{
  return book;
 }
});
setMixedBooks(Mix)
}, [searchedbooks])

const CreateBooks=(books)=>{
const map= new Map();
books.map(book=> map.set(book.id, book));
return map;
}

const getSearch= async()=>{
  const data= await BooksAPI.search(search);
  setSearchedbooks (data)
}

  useEffect(() => {
    getSearch();
  }, [search]);

  const handelDeleteSearch = () => {
    setSearch("");
  };

  const changeShelves = (book, location) => {
    const updatedBooks = books.map((b) => {
      if (b.id === book.id) {
        book.shelf = location;
        return book;
      }
      return b;
    });

    setBooks(updatedBooks);
    BooksAPI.update(book, location);
  };

  return (
    <div className="app">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={<Home books={books} changeShelves={changeShelves} />}
          />
          <Route
            path="search"
            element={
              <Search
                handelDeleteSearch={handelDeleteSearch}
                changeShelves={changeShelves}
                searchedbooks={searchedbooks}
                search={search}
                handleSearch={handleSearch}
                mixedBooks={mixedBooks}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
