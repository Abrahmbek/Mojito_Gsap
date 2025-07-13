"use client";
import { useRef, useState } from "react";
import { allCocktails } from "./constants";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const scope = useRef(); // parent elementga reference
  useGSAP(
    () => {
      gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
      gsap.fromTo(
        ".cocktail img",
        { opacity: 0, xPercent: -100 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        ".details h2",
        { yPercent: 100, opacity: 0 },

        {
          yPercent: 0,
          opacity: 1,

          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        ".details p",
        { opacity: 0, yPercent: 100 },
        {
          yPercent: 0,
          opacity: 1,

          ease: "power1.inOut",
        }
      );
    },
    { scope }
  );
  const contentRef = useRef();
  const [currentIndex, setCurrentindex] = useState(0);
  const totalCocktails = allCocktails.length;
  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails; // ✅ to‘g‘ri versiya

    setCurrentindex(newIndex);
  };

  const getCocktailAt = (indexOffset) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };
  const currentcocktail = getCocktailAt(0);
  const prevcocktail = getCocktailAt(-1);
  const nextcocktail = getCocktailAt(1);
  return (
    <section id="menu" aria-labelledby="menu-heading" ref={scope}>
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevcocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-right"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextcocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img src={currentcocktail.image} className="object-contain" />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p> Recipe for:</p>
            <p id="title"> {currentcocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentcocktail.title}</h2>
            <p>{currentcocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
