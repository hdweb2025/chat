import React from "react";

const BookList = ({ setSelectedBook }) => {
  const books = ["Judul Buku 1", "Judul Buku 2", "Judul Buku 3", "Judul Buku 4"];

  return (
    <div className="mt-4">
      <label className="block text-sm">Daftar Buku yang tersedia</label>
      <select
        className="mt-2 p-2 border w-full"
        onChange={(e) => setSelectedBook(e.target.value)}
      >
        {books.map((book, index) => (
          <option key={index} value={book}>
            {book}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BookList;

