CREATE DATABASE novels;

CREATE USER 'damoateng'@'localhost' IDENTIFIED BY 'Dannyboy123!';

GRANT ALL ON novels.* TO 'damoateng'@'localhost';

USE novels;

CREATE TABLE authors (
  id INT auto_increment,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE books (
  id INT auto_increment,
  authorId INT,
  title VARCHAR(255),
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (authorId) REFERENCES authors(id)
);

CREATE TABLE genres (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE booksGenres (
bookId INT,
genreId INT,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
deletedAt DATETIME,
PRIMARY KEY(bookId, genreId),
FOREIGN KEY(bookId) REFERENCES books(id),
FOREIGN KEY(genreId) REFERENCES genres(id)
);

INSERT INTO authors (firstName, lastName) VALUES ("Bram", "Stoker");
INSERT INTO authors (firstName, lastName) VALUES ("Oscar", "Wilde");
INSERT INTO authors (firstName, lastName) VALUES ("Alice", "Walker");
INSERT INTO authors (firstName, lastName) VALUES ("Leo", "Tolstoy");
INSERT INTO authors (firstName, lastName) VALUES ("Charles", "Dickens");
INSERT INTO authors (firstName, lastName) VALUES ("Arthur", "Miller");
INSERT INTO authors (firstName, lastName) VALUES ("Alexandra", "Dumas");
INSERT INTO authors (firstName, lastName) VALUES ("Authur", "Conan Doyle");
INSERT INTO authors (firstName, lastName) VALUES ("Robert", "Louis Stevenson");
INSERT INTO authors (firstName, lastName) VALUES ("Fyodor", "Dostoyevsky");
INSERT INTO authors (firstName, lastName) VALUES ("Agatha", "Christie");
INSERT INTO authors (firstName, lastName) VALUES ("Ray", "Bradbury");
INSERT INTO authors (firstName, lastName) VALUES ("George", "Orwell");
INSERT INTO authors (firstName, lastName) VALUES ("H.G", "Wells");
INSERT INTO authors (firstName, lastName) VALUES ("Chinua", "Achebe");

INSERT INTO books (title, authorId) VALUES("Dracula", 1); 
INSERT INTO books (title, authorId) VALUES("The picture of Dorian Gray", 2);
INSERT INTO books (title, authorId) VALUES("The Color Purple", 3);
INSERT INTO books (title, authorId) VALUES("War and Peace", 4);
INSERT INTO books (title, authorId) VALUES("A Tale of Two Cities", 5);
INSERT INTO books (title, authorId) VALUES("The Crucible", 6);
INSERT INTO books (title, authorId) VALUES("The Three Musketeers", 7);
INSERT INTO books (title, authorId) VALUES("The Hound of the Baskervilles", 8);
INSERT INTO books (title, authorId) VALUES("The Strange Case of Dr. Jekyll and Mr. Hyde", 9);
INSERT INTO books (title, authorId) VALUES("Crime and Punishment", 10);
INSERT INTO books (title, authorId) VALUES("Murder on the Orient Express", 11);
INSERT INTO books (title, authorId) VALUES("Fahrenheit 451", 12);
INSERT INTO books (title, authorId) VALUES("Animal Farm", 13);
INSERT INTO books (title, authorId) VALUES("The Time Machine", 14);
INSERT INTO books (title, authorId) VALUES("Things Fall Apart", 15);

INSERT INTO genres (name) VALUES ("Horror");
INSERT INTO genres (name) VALUES ("Gothic");
INSERT INTO genres (name) VALUES ("Historical Fiction");
INSERT INTO genres (name) VALUES ("Russian Literature");
INSERT INTO genres (name) VALUES ("Historical Fiction");
INSERT INTO genres (name) VALUES ("Drama");
INSERT INTO genres (name) VALUES ("French Literature");
INSERT INTO genres (name) VALUES ("Crime");
INSERT INTO genres (name) VALUES ("Horror");
INSERT INTO genres (name) VALUES ("Russian Literature");
INSERT INTO genres (name) VALUES ("Mystery");
INSERT INTO genres (name) VALUES ("Dystopia");
INSERT INTO genres (name) VALUES ("Science Fiction");
INSERT INTO genres (name) VALUES ("Time Travel");
INSERT INTO genres (name) VALUES ("African Literature");


INSERT INTO booksGenres (bookId, genreId) VALUES (1, 1);
INSERT INTO booksGenres (bookId, genreId) VALUES (2, 2);
INSERT INTO booksGenres (bookId, genreId) VALUES (3, 3);
INSERT INTO booksGenres (bookId, genreId) VALUES (4, 4);
INSERT INTO booksGenres (bookId, genreId) VALUES (5, 5);
INSERT INTO booksGenres (bookId, genreId) VALUES (6, 6);
INSERT INTO booksGenres (bookId, genreId) VALUES (7, 7);
INSERT INTO booksGenres (bookId, genreId) VALUES (8, 8);
INSERT INTO booksGenres (bookId, genreId) VALUES (9, 9);
INSERT INTO booksGenres (bookId, genreId) VALUES (10, 10);
INSERT INTO booksGenres (bookId, genreId) VALUES (11, 11);
INSERT INTO booksGenres (bookId, genreId) VALUES (12, 12);
INSERT INTO booksGenres (bookId, genreId) VALUES (13, 13);
INSERT INTO booksGenres (bookId, genreId) VALUES (14, 14);
INSERT INTO booksGenres (bookId, genreId) VALUES (15, 15);
