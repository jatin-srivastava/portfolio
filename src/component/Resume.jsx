import React from "react";
import Swal from "sweetalert2";
import resumePDF from "../images/resume.pdf";
import "../css/front.css"

function Resume() {
  const handleDownload = () => {
    Swal.fire({
      title: "Resume",
      text: "Resume download !!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };
  return (
    <div className="resume flex justify-center mt-4">
      <a
        href={resumePDF}
        download="resume.pdf"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={handleDownload}
      >
        <svg
          className="w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {/* Example of FontAwesome icon path */}
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.94 5.53a1 1 0 00-1.41-1.42l-3.98 4-1.6-1.6a1 1 0 00-1.42 1.42l2.54 2.54a1 1 0 001.42 0l4.5-4.5z"
            clipRule="evenodd"
          />
        </svg>
        <span>Download resume</span>
      </a>
    </div>
  );
}

export default Resume;
