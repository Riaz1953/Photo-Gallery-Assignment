import React, { use } from "react";

const PhotoCard = ({ photo }) => {
  const { albumId, id, title, url, thumbnailUrl } = photo;

  return (
    <div className="relative group rounded-xl overflow-hidden bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Photo Container with Zoom Effect */}
      <div className="relative overflow-hidden bg-gray-100 cursor-pointer aspect-[3/4]">
        <img
          src={url}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Pexels Style Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
          {/* Top Overlay: Album ID & Like/Favourite Actions */}
          <div className="flex justify-between items-center">
            {/* Album ID Badge */}
            <span className="bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20 font-medium">
              Album ID: 153
            </span>

            {/* Like & Favourite Buttons */}
            <div className="flex gap-2">
              <button className="btn btn-circle btn-xs sm:btn-sm bg-white/80 hover:bg-white text-red-500 border-none backdrop-blur-md">
                ❤️
              </button>
              <button className="btn btn-circle btn-xs sm:btn-sm bg-white/80 hover:bg-white text-amber-500 border-none backdrop-blur-md">
                ⭐
              </button>
            </div>
          </div>

          {/* Bottom Hover Action (Zoom Icon) */}
          <div className="flex justify-end">
            <button className="btn btn-circle btn-sm bg-white/80 hover:bg-white text-gray-800 border-none backdrop-blur-md shadow">
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Card Footer - Shobshomoy dekha jabe (Photo ID & Title) */}
      <div className="p-3 bg-base-100">
        <div className="text-xs text-gray-400 font-medium mb-0.5">
          Photo ID:{" "}
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
            ID: #74902
          </span>
        </div>
        <h3
          className="text-sm font-semibold text-gray-800 tracking-tight line-clamp-1 group-hover:text-primary transition-colors duration-200"
          title="Majestic Mountain Sunset over Lake"
        >
          Majestic Mountain Sunset over Lake
        </h3>
      </div>
    </div>
  );
};

export default PhotoCard;
