import React from 'react'
import BookList from './BookList'
const Shelf = ({books, title, changeShelves}) => {
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
        <ol className="books-grid">
            {books &&
              Array.isArray(books) && books.map(b => (
                <li key={b.id}>
                    <BookList book={b} changeShelves={changeShelves}/>
                </li>
            ))}

        </ol>
    </div>
</div>
)
}

export default Shelf
