import { useNavigate } from "react-router-dom";
import { LangProvider } from "../context/LangContext";
import CardIntro from "./CardIntro";

export default function CardStart() {
  const navigate = useNavigate();
  return (
    <LangProvider>
      <main style={{ fontFamily: "'Figtree', sans-serif" }}>
        <div className="absolute left-6 top-8 z-10 font-['Fraunces'] text-lg text-[#eee9d9] sm:left-12">
          JEONG YEON SU.
        </div>
        <CardIntro onChoose={(category) => navigate(`/main?category=${category}`)} />
      </main>
    </LangProvider>
  );
}
