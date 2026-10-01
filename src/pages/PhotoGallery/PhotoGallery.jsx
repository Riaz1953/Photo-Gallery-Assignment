import React, { useEffect, useState, useRef } from "react";
import PhotoCard from "../PhotoCard/PhotoCard";

export default function PhotoGallery() {
  const [allPhotos, setAllPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  // Section Top Target korar jonno useRef
  const sectionTopRef = useRef(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setAllPhotos(data.slice(0, 100));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setLoading(false);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPhotos = allPhotos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allPhotos.length / itemsPerPage);

  // Smooth Scroll Helper Function
  const scrollToSectionTop = () => {
    if (sectionTopRef.current) {
      sectionTopRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      scrollToSectionTop(); // Specific section-e scroll hobe
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      scrollToSectionTop(); // Specific section-e scroll hobe
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Target Ref: Click korle thik ekhane scroll hoye ashbe */}
      <h1
        ref={sectionTopRef}
        className="text-3xl font-bold text-center p-6 scroll-mt-20"
      >
        Explore Our Visual World
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="btn btn-outline btn-primary disabled:bg-gray-200"
            >
              ← Previous
            </button>

            <span className="text-sm font-semibold text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="btn btn-primary"
            >
              See More →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
