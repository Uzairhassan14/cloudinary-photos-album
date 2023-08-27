"use server";
import cloudinary from "cloudinary";

export async function setAsFavoriteAction(
  publicid: string,
  isFavorited: boolean
) {
  if (isFavorited) {
    console.log("remove favorite form " + publicid);
    await cloudinary.v2.uploader.add_tag("favorite", [publicid]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicid]);
  }
}
