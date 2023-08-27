"use client";
import { searchResult } from "../gallery/page";
import { useEffect, useState } from "react";
import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "@/components/cloudinary-image";

export default function FavoritesList({
  initialResources,
}: {
  initialResources: searchResult[];
}) {
  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  const [resources, setResources] = useState(initialResources);
  return (
    <ImageGrid
      images={resources}
      getImage={(imageData: searchResult) => {
        return (
          <CloudinaryImage
            path="/favorites"
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            // publicid={results.public_id}
            alt={"an image of someting"}
            onUnheart={(unheartResources) => {
              setResources((currentRecources) =>
                currentRecources.filter(
                  (resources) =>
                    resources.public_id !== unheartResources.public_id
                )
              );
            }}
          />
        );
      }}
    />

    // <div className="grid grid-cols-4 gap-4">
    //   {resources.map((result) => (

    //   ))}
    // </div>
  );
}
