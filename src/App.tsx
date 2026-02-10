import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const done = localStorage.getItem("valentineDone");
    if (done) {
      localStorage.removeItem("valentineDone");
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const [noScale, setNoScale] = useState(1);
  const [noClicks, setNoClicks] = useState(0);

  const handleNoClick = () => {
    const newClicks = noClicks + 1;
    setNoClicks(newClicks);

    if (newClicks < 5) {
      setNoScale((prev) => Math.max(prev - 0.15, 0.3));
    }
  };

  const sayYes = () => {
    (window as any).startRomanticMusic?.(); // 🎵 START MUSIC HERE ONLY

    confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
    setTimeout(() => navigate("/memories"), 1800);
  };

  return (
    <div className="container letter-bg">
      <div className="card">
        <img src="/photo.jpg" alt="Us ❤️" className="main-photo" />

        {noClicks < 5 ? (
          <h1>Will you be my Valentine? 💘</h1>
        ) : (
          <>
            <h1>Be my Valentine 😌</h1>
            <p className="no-choice">
              <strong>You don’t really have a choice 😡</strong>
            </p>
          </>
        )}

        <div className="buttons-centered">
          <button className="yes" onClick={sayYes}>
            YES ❤️
          </button>

          {noClicks < 5 && (
            <button
              className="no"
              onClick={handleNoClick}
              style={{ transform: `scale(${noScale})` }}
            >
              NO 🙈
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
