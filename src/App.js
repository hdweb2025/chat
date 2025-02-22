import React, { useState } from "react";
import UploadSection from "./components/UploadSection";
import BookList from "./components/BookList";
import SummaryDisplay from "./components/SummaryDisplay";
import InputSection from "./components/InputSection";

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [summary, setSummary] = useState("");
  
  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-300 p-4">
        <button className="bg-gray-500 text-white py-2 px-4 w-full">Logo</button>
        <UploadSection />
        <BookList setSelectedBook={setSelectedBook} />
        <button className="bg-purple-600 text-white py-2 px-4 w-full mt-2">Ringkas</button>
      </aside>
      <main className="flex-1 p-4">
        <SummaryDisplay summary={summary} />
        <InputSection setSummary={setSummary} />
      </main>
    </div>
  );
};

export default App;

// UploadSection.js
export const UploadSection = () => {
  return (
    <div className="mt-4">
      <label className="block text-sm">Upload buku yang akan di review</label>
      <input type="file" className="mt-2 p-2 border w-full" />
      <button className="bg-purple-600 text-white py-2 px-4 w-full mt-2">Upload</button>
    </div>
  );
};

// BookList.js
export const BookList = ({ setSelectedBook }) => {
  const books = ["judul Buku", "judul Buku", "judul Buku", "judul Buku"];
  return (
    <div className="mt-4">
      <label className="block text-sm">Daftar Buku yang tersedia</label>
      <select
        className="mt-2 p-2 border w-full"
        onChange={(e) => setSelectedBook(e.target.value)}
      >
        {books.map((book, index) => (
          <option key={index} value={book}>{book}</option>
        ))}
      </select>
    </div>
  );
};

// SummaryDisplay.js
export const SummaryDisplay = ({ summary }) => {
  return (
    <div className="mt-4 p-4 border rounded bg-gray-100 h-40 overflow-auto">
      <h2 className="text-lg font-bold">Hasil Ringkasan Buku</h2>
      <p>{summary || "Belum ada ringkasan."}</p>
    </div>
  );
};

// InputSection.js
export const InputSection = ({ setSummary }) => {
  return (
    <div className="mt-4">
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Silahkan meringkas buku maksimal 300 kata"
        onChange={(e) => setSummary(e.target.value)}
      ></textarea>
      <button className="bg-purple-600 text-white py-2 px-4 w-full mt-2">Submit</button>
    </div>
  );
};

