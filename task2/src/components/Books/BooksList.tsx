import React from "react";
import BookCard from "./BookCard";

interface IProps {
    books: any;
}

const BooksList = (props: IProps) => {
    return (
        <div className="list">
            {
                props.books.map((book: any, i: number) => {
                    return <BookCard
                        key={i}
                        image={book.volume.imageLinks.thumbnail}
                        title={book.volume.title}
                        author={book.volume.authors}
                        published={book.volume.publishedDate}
                    />
                })
            }
        </div>
    );
}

export default BooksList;