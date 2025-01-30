import PropTypes from "prop-types";
import { useRef, useState } from "react";

const CustomFileInput = ({type}) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileClick = () => {
    fileInputRef.current.click(); // Simulates the click on the hidden input
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("file");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Custom Button */}
      <button
        onClick={handleFileClick}
        className="ring-1 ring-cyan-500 bg-white text-cyan-500 py-2 px-4 rounded-lg cursor-pointer hover:text-white hover:bg-cyan-600"
      >
        {type}
      </button>

      {/* Display File Name */}
      <p className="text-gray-600 text-sm">{fileName}</p>
    </div>
  );
};
CustomFileInput.propType={
  type:PropTypes.string
}
export default CustomFileInput;
