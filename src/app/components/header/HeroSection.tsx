import { useEffect, useState } from "react";

const textArray = [
  "Our Services",
  "Create New Opportunities",
  "Open the Path to the Future"
];

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex <= textArray[index].length) {
        setCurrentText(textArray[index].slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex >= 0) {
        setCurrentText(textArray[index].slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }

      if (!isDeleting && charIndex === textArray[index].length + 1) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textArray.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          {currentText}
          <span className="cursor">|</span>
        </h1>
        <p className="hero-subtitle">
        Work with us to create new opportunities and drive growth.
        </p>
        <div className="buttons">
          <a href="#services" className="cta-button primary">Batafsil</a>
          <a href="#contact" className="cta-button secondary">Bog'lanish</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

