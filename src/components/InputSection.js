import React from "react";

const InputSection = ({ setSummary }) => {
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

export default InputSection;
