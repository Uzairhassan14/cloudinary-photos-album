"use client";
import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { searchResult } from "./page";

export default async function GalleryGrid({
  images,
}: {
  images: searchResult[];
}) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: searchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt={"an image of someting"}
          />
        );
      }}
    />
  );
}
