import { useRef } from "react";
import "./assets/component/header.css";

export function Service({ onClick, title, image }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / 3).toFixed(2);
    const rotateY = (x / 3).toFixed(2);

    // Shadow offset (inverse of tilt)
    const shadowX = (-x / 3).toFixed(2);
    const shadowY = (-y / 3).toFixed(2);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    card.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3)`;
  };

  const resetTransform = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    card.style.boxShadow = "0 0 10px rgba(0,0,0,0.15)"; // default shadow
  };

  return (
    <div
      ref={cardRef}
      className="service"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      {image && <img src={image} alt={title} className="service-image" />}
      <p>{title}</p>
    </div>
  );
}
