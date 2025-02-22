const UploadSection = () => {
  return (
    <div className="mt-4">
      <label className="block text-sm">Upload buku yang akan di review</label>
      <input type="file" className="mt-2 p-2 border w-full" />
      <button className="bg-purple-600 text-white py-2 px-4 w-full mt-2">Upload</button>
    </div>
  );
};

export default UploadSection;

