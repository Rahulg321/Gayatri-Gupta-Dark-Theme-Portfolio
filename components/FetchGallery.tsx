import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

const FetchGallery = async () => {
  const client = createClient();
  const images = await client.getAllByType("galleryimages");
  const finalImages = images[0].data.images;
  return (
    <div className="blog-index">
      {finalImages.map((image, index) => (
        <div className="overflow-hidden" key={index}>
          <PrismicNextImage
            field={image.galleryimage}
            className="opacity-90 hover:opacity-100 hover:scale-105 duration-200 ease-in-out transition-all"
          />
        </div>
      ))}
    </div>
  );
};

export default FetchGallery;
