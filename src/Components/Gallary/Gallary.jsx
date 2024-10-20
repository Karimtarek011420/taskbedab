import { useState } from "react";
import "./Gallary.css";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";
import img8 from "../../assets/images/8.jpg";
import img9 from "../../assets/images/9.jpg";

export default function Gallary({ openLightbox }) {
  const [images, setimages] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9
  ]);

  return (
    <>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            loading="lazy"
            alt={`Gallery image ${index + 1}`}
            onClick={() => openLightbox(index)}
            className="gallery-image"
          />
        ))}
      </div>
    </>
  );
}
