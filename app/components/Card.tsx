import React, { useRef, useEffect, useState } from 'react';
import './styles.scss';

interface CardProps {
  title?: string;
  description?: string;
  names?: string;
  language?: string;
  created_at?: string;
}

const Card: React.FC<CardProps> = ({ title, description, names, language, created_at }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const cardTopPosition = cardRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTopPosition < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`card ${isVisible ? 'visible' : ''}`} ref={cardRef}>
      {/* Add image element here if needed */}
      <h2 className="name">{names}</h2>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <p className="description">{language}</p>
      <p className="description">{created_at}</p>
    </div>
  );
};

export default Card;
