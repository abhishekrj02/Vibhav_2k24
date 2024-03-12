import React, { useRef, useEffect } from "react";
import SocialLinks from "./SocialMedia";
import AboutUs from "./AboutUs";
export default function HomePage() {
  const infinity = useRef(null);
  useEffect(() => {
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________ ";
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.current.innerText
          ? this.el.current.innerText
          : "";
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || "";
          const to = newText[i] || "";
          const start = Math.floor(Math.random() * 20);
          const end = start + Math.floor(Math.random() * 20);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }

      update() {
        if (this.el.current) {
          let output = "";
          let complete = 0;
          for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
              complete++;
              output += to;
            } else if (this.frame >= start) {
              if (!char || Math.random() < 0.28) {
                char = this.randomChar();
                this.queue[i].char = char;
              }
              output += `<span class="dud">${char}</span>`;
            } else {
              output += from;
            }
          }
          this.el.current.innerHTML = output;
          if (complete === this.queue.length) {
            this.resolve();
          } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
          }
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const phrases = ["अनंत से भी आगे !", "Beyond Infinity"];

    const el = infinity;
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      if (el.current) {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 3000);
        });
        counter = (counter + 1) % phrases.length;
      }
    };

    next();
  }, []);
  return (
    <div>
      <main
        data-aos="fade-up"
        className=" flex justify-center   items-center md:mb-12 h-screen relative"
      >
        <div className="flex flex-col justify-center  text-center text-white sm:flex-row ">
          <div className="flex flex-col justify-center mt-16  md:mt-0 md:h-screen">
            <svg
              className="vibhav-name-svg text-[13rem] sm:text-[10rem] h-[100px] w-[320px] sm:h-[200px] sm:w-[640px] lg:h-[300px] lg:w-[960px]"
              viewBox="0 0 960 300"
            >
              <symbol id="s-text">
                <text
                  className="font-[Azonix]  "
                  textAnchor="middle"
                  x="50%"
                  y="80%"
                >
                  Vibhav
                </text>
              </symbol>

              <g className="g-ants">
                <use xlinkHref="#s-text" className="vibhav-text-copy"></use>
                <use xlinkHref="#s-text" className="vibhav-text-copy"></use>
                <use xlinkHref="#s-text" className="vibhav-text-copy"></use>
                <use xlinkHref="#s-text" className="vibhav-text-copy"></use>
                <use xlinkHref="#s-text" className="vibhav-text-copy"></use>
              </g>
            </svg>
            <div
              ref={infinity}
              className=" text-[#d6bd30] break-words text-2xl md:text-4xl mb-4 items-center   mx-auto"
            ></div>

            <div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
