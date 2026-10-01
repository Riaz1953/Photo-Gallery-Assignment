import React from "react";

const ViewDetails = ({ photo, onClose }) => {
  // Destructuring properties directly from props (No extra object mutation)
  const { id, albumId, title, url } = photo || {};

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-base-100 rounded-2xl shadow-2xl overflow-hidden border border-base-300 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-neutral absolute top-4 right-4 z-10 bg-black/50 hover:bg-black text-white border-none"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="bg-gray-100 flex items-center justify-center overflow-hidden max-h-[400px] md:max-h-[500px]">
            <img src={url} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Details Section */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              {/* Badges for IDs */}
              <div className="flex gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                  Photo ID: #{id}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-secondary/10 text-secondary border border-secondary/20">
                  Album ID: #{albumId}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-gray-800 capitalize mb-4 leading-snug">
                {title}
              </h2>

              <p className="text-sm text-gray-500 mb-6">
                High-resolution photo captured and shared in the gallery
                collection. Available for download and viewing.
              </p>
            </div>

            {/* Actions Footer */}
            <div className="border-t border-base-200 pt-4 flex items-center justify-between gap-3">
              <div className="flex gap-2">
                <button className="btn btn-sm btn-outline btn-error gap-1">
                  ❤️ Like
                </button>
                <button className="btn btn-sm btn-outline btn-warning gap-1">
                  ⭐ Favorite
                </button>
              </div>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                Full Image ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
