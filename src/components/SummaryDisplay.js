import React from "react";

const SummaryDisplay = ({ summary }) => {
  return (
    <div className="mt-4 p-4 border rounded bg-gray-100 h-40 overflow-auto">
      <h2 className="text-lg font-bold">Hasil Ringkasan Buku</h2>
      <p>{summary || "Belum ada ringkasan."}</p>
    </div>
  );
};

export default SummaryDisplay;
