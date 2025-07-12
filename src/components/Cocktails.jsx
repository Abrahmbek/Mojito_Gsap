import React from "react";
import leftLeaf from "./assets/images/cocktail-left-leaf.png";
import rightLeaf from "./assets/images/cocktail-right-leaf.png";
import { cocktailLists, mockTailLists } from "./constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parallaxTimeLine
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  });
  return (
    <section id="cocktails" className="noisy">
      <img src={leftLeaf} alt="left-leaf" id="c-left-leaf" />
      <img src={rightLeaf} alt="right-leaf" id="c-right-leaf" />

      <div className="list">
        <div className="popular">
          <h2>Most popular Cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span> - {price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Loved Mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span> - {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
