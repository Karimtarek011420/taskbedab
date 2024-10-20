import  { useEffect, useRef } from "react";
import "./lightbox.css";
import { FaArrowRight, FaArrowLeft, FaTimes } from "react-icons/fa";

export default function Lightbox({ images, currentIndex, closeLightbox, navigate }) {
  const lightboxRef = useRef(null);

  // Set focus on lightbox when component mounts
  useEffect(() => {
    lightboxRef.current?.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") navigate(1);
    if (e.key === "ArrowLeft") navigate(-1);
  };

  return (
    <div
      className="lightbox"
      onClick={closeLightbox}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={lightboxRef}  // Reference to set focus
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <FaTimes className="close-button" onClick={closeLightbox} />
        <img
          src={images[currentIndex]}
          alt={`Large image ${currentIndex + 1}`}
           loading="lazy"
          className="lightbox-image"
        />
        <FaArrowLeft className="prev-button" onClick={() => navigate(-1)} />
        <FaArrowRight className="next-button" onClick={() => navigate(1)} />
      </div>
    </div>
  );
}
