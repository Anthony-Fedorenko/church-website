import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.scss";

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{
          transform: `translateY(${offset * 0.3}px)`, // параллакс
        }}
      />
      <div className="hero-content">
        <h1>Parafia Prawosławna pw. Opieki Przenajświetszej Bogarodzicy</h1>
        <button onClick={() => navigate("/o-hrame")}>
          O Świątyni
        </button>
      </div>
    </section>
  );
}
