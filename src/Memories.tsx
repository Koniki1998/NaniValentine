import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Memories() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/love-letter");
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="letter-bg memories">
      <h1 className="memories-title">Our Memories 💞</h1>

      <div className="memories-grid">
        <img src="/m1.jpg" alt="Memory 1" />
        <img src="/m2.jpg" alt="Memory 2" />
        <img src="/m3.jpg" alt="Memory 3" />
        <img src="/m4.jpg" alt="Memory 4" />
      </div>

      <p className="memories-text">Every moment with you ❤️</p>
    </div>
  );
}
