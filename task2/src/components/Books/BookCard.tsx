import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./styleBook.css"

interface BookCardProps {
  book: any;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <Link to={`/book/${book.id}`} style={linkStyle}>
      <Card>
        {book.image ? (
          <Card.Img variant="top" src={book.image} alt={book.title} />
        ) : (
          <div className="no-image">Изображение не найдено</div>
        )}
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.categories}</Card.Text>
          <Card.Text>{book.author}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default BookCard;