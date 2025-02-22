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
