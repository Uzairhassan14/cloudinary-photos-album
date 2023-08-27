"use client";

import { searchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

export function ImageGrid({
  images,
  getImage,
}: {
  images: searchResult[];
  getImage: (imageData: searchResult) => ReactNode;
}) {
  const MAX_COLUMS = 4;

  function getColums(colindex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMS === colindex);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColums(0), getColums(1), getColums(2), getColums(3)].map(
        (columns, idx) => (
          <div className="flex flex-col gap-4" key={idx}>
            {columns.map(getImage)}
          </div>
        )
      )}
    </div>
  );
}
