import Image from "next/image";
import React, { useState } from "react";

function ImageGallery({ imageUrls }: { imageUrls?: string[] }) {
  const [expanded, setExpanded] = useState();

  if (imageUrls?.length === 0) return null;

  const limit = 255;
  let text = "short text";

  return (
    <>
      <p>{text.length < 255 ? text : `${text.substring(0, limit)}...`}</p>
      <ul>
        {imageUrls?.map((url) => (
          <li key={url}>
            <Image src={url} alt="picture" width={200} height={200} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ImageGallery;
