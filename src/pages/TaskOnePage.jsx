import React, { useRef, useState, useEffect } from "react";
import messageicon from "../assets/message.png";
import editmessage from "../assets/text-bubble.png";
import trophy from "../assets/trophy.png";

function TaskOnePage() {
  const topRef = useRef();
  const centerRef = useRef();
  const bottomRef = useRef();
  const number = [1, 2, 3];
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  // number transaction effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % number.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const animate = () => {
    // Top row
    topRef.current
      .querySelectorAll(".img-wrapper")
      .forEach((wrapper, index) => {
        const icons = wrapper.querySelector("i");
        const fadeInOut = wrapper.querySelector(".fadeOut");
        if (wrapper.dataset.type === "icon") {
          icons.style.transition = "transform 0.3s ease";
          wrapper.style.transform = "translateY(-40px)";
        } else {
          wrapper.style.transition = "transform 0.3s ease";
          const direction = index % 2 === 0 ? -80 : 80;
          wrapper.style.transform = `translate(${direction}px, -80px)`;

          const img = wrapper.querySelector("img");
          addFloatLoop(img);
        }
      });

    // center row
    centerRef.current
      .querySelectorAll(".img-wrapper")
      .forEach((wrapper, index) => {
        wrapper.style.transition = "transform 0.3s ease";

        const direction = index % 2 === 0 ? -100 : 100;
        wrapper.style.transform = `translateX(${direction}px)`;

        const img = wrapper.querySelector("img");
        addFloatLoop(img);
      });

    // bottom row
    bottomRef.current.querySelectorAll(".img-wrapper").forEach((wrapper) => {
      wrapper.style.transition = "transform 0.3s ease";
      const img = wrapper.querySelector("img");

      const alt = img.alt.trim();
      img.style.transition = "transform 0.3s ease";

      switch (alt) {
        case "center image one":
          wrapper.style.transform = "translate(-80px, 80px)";
          addFloatLoop(img);
          break;
        case "center image two":
          wrapper.style.transform = "translate(80px, 80px)";
          addFloatLoop(img);
          break;
        case "trophy image":
          wrapper.style.transform = "translateY(110px)";
          break;
        case "message icon image":
          wrapper.style.transform = "translateX(-50px)";
          break;
        case "message box image":
          wrapper.style.transform = "translateX(50px)";
          break;
        default:
          img.style.transform = "translate(0, 0)";
      }
    });
  };

  const reset = () => {
    [topRef, centerRef, bottomRef].forEach((ref) => {
      ref.current.querySelectorAll(".img-wrapper").forEach((wrapper) => {
        wrapper.style.transition = "transform 0.3s ease";
        wrapper.style.transform = "translate(0, 0)";

        const img = wrapper.querySelector("img");
        if (!img) return;

        img.style.transition = "transform 0.3s ease";
        img.style.transform = "translate(0, 0)";

        img.classList.remove("float-loop");
        img.classList.remove("float-paused");
      });
    });
  };

  // Image infinite float
  const addFloatLoop = (img, delay = 300) => {
    if (img) {
      setTimeout(() => {
        img.classList.add("float-loop");
      }, delay);
    }
  };

  // paused image float
  useEffect(() => {
    const allFloatingImages = document.querySelectorAll(".float-loop");
    allFloatingImages.forEach((img) => {
      if (isPaused) {
        img.classList.add("float-paused");
      } else {
        img.classList.remove("float-paused");
      }
    });
  }, [isPaused]);

  // card hover visibililty
  const hoverCardImage = () => {
    setShowCard(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // cancel any previous timer
    }

    timeoutRef.current = setTimeout(() => {
      setShowCard(false);
    }, 2000);
  };

  return (
    <div
      className="max-w-5xl mx-auto mt-52 p-5 cursor-pointer"
      onMouseEnter={animate}
      onMouseLeave={reset}
    >
      {/* top row */}
      <div className="flex justify-center items-center gap-34" ref={topRef}>
        <div className="img-wrapper relative z-[1]">
          <img
            src="https://images.pexels.com/photos/5255233/pexels-photo-5255233.jpeg"
            alt="man face"
            className="w-25 h-25 rounded-4xl object-cover"
            onMouseEnter={hoverCardImage}
            onClick={() => setIsPaused((prev) => !prev)}
          />

          <div className="absolute z-10 flex ml-[84px] -mt-16 text-xs shadow-lg rounded-lg px-3 py-4 diagonal-left fadeOut diagonal-shape">
            <span>Amazing</span>
            <div className="flex justify-center items-center">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
            </div>
          </div>

          <div
            className={`
              absolute z-[999]  min-w-sm text-xs origin-top bg-white rounded-lg shadow-md p-4 -ml-[150px]
              transform transition-all duration-1000 ease-out
              ${showCard ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
            <div className="flex justify-end items-end flex-col">
              <h2>Jibachh Kumar</h2>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>

        <div className="img-wrapper">
          <img
            src="https://images.pexels.com/photos/2383227/pexels-photo-2383227.jpeg"
            alt="women face"
            className="w-25 h-25 rounded-4xl object-cover"
            onClick={() => setIsPaused((prev) => !prev)}
          />
        </div>

        <div className="absolute z-0 img-wrapper" data-type="icon">
          <i className="fa-solid fa-thumbs-up text-4xl text-amber-800 bounce-thumb"></i>
        </div>
        <div className="absolute -mt-14 -ml-6 img-wrapper" data-type="icon">
          <i className="fa-solid fa-star text-2xl text-amber-400 bounce-star"></i>
        </div>
      </div>

      {/* center row */}
      <div
        className="flex justify-center items-center gap-[420px] mt-3"
        ref={centerRef}
      >
        <div className="img-wrapper relative z-0">
          <img
            src="https://images.pexels.com/photos/10204120/pexels-photo-10204120.jpeg"
            alt="center image one"
            className="w-25 h-25 object-cover rounded-4xl"
            onClick={() => setIsPaused((prev) => !prev)}
          />
        </div>
        <div className="img-wrapper relative z-0">
          <img
            src="https://images.pexels.com/photos/2128819/pexels-photo-2128819.jpeg"
            alt="center image two"
            className="w-25 h-25 object-cover rounded-4xl"
            onClick={() => setIsPaused((prev) => !prev)}
          />
        </div>

        <div className="absolute z-0 flex flex-col gap-y-4 mt-7">
          <p className="text-2xl text-slate-800">
            {" "}
            Hear How Level Up Their Game
          </p>
          <h2 className="text-center font-bold text-4xl ">
            Skill <span className="text-green-700">Masters</span> Unite!
            <span>🤝</span>
          </h2>
          <p className="text-center text-lg font-semibold">
            View all Testimonials{" "}
            <span>
              <i class="fa-solid fa-arrow-right-long"></i>
            </span>
          </p>
        </div>
      </div>

      {/* bottom row */}
      <div
        className="flex justify-center items-center mt-10 gap-34 relative"
        ref={bottomRef}
      >
        <div className="img-wrapper">
          <img
            src="https://images.pexels.com/photos/28453974/pexels-photo-28453974.jpeg"
            alt="center image one"
            className="w-25 h-25 object-cover rounded-4xl"
            onClick={() => setIsPaused((prev) => !prev)}
          />
        </div>

        <div className="img-wrapper">
          <img
            src="https://images.pexels.com/photos/14267039/pexels-photo-14267039.jpeg"
            alt="center image two"
            className="w-25 h-25 object-cover rounded-4xl"
            onClick={() => setIsPaused((prev) => !prev)}
          />
          <div className="absolute flex ml-[90px] -mt-16 text-xs shadow-2xl rounded-lg px-3 py-4 diagonal-left diagonal-shape z-50 fadeOut">
            <div className="flex">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
            </div>
          </div>
        </div>

        <div className="absolute img-wrapper">
          <img
            src={trophy}
            alt="trophy image"
            className="w-20 h-20 object-cover swing-left-right"
            onClick={() => setIsPaused((prev) => !prev)}
          />
        </div>

        <div className="absolute img-wrapper -ml-[470px] -mt-14">
          <i className="fa-solid fa-face-smile text-5xl text-amber-400 bounce-smile"></i>
          <i className="fa-solid fa-heart text-red-700 text-2xl heart-spin"></i>
          <img
            src={messageicon}
            alt="message icon image"
            className="w-10 h-8 object-cover absolute -mt-20 ml-8 bounce-message"
            onClick={() => setIsPaused((prev) => !prev)}
          />
        </div>

        <div className="absolute z-0 ml-[470px] -mt-12 img-wrapper">
          <img
            src={editmessage}
            alt="message box image"
            className="w-17 h-17 object-cover wiggle-rotate"
            onClick={() => setIsPaused((prev) => !prev)}
          />

          <i className="fa-regular fa-heart text-3xl -mt-[56px] ml-2 absolute wiggle-smile"></i>

          <div className="absolute overflow-hidden h-[35px] -mt-[56px] ml-12">
            <div
              className="flex flex-col transition-transform duration-300 ease-in-out"
              style={{ transform: `translateY(-${activeIndex * 35}px)` }}
            >
              {number.map((digit, index) => (
                <span key={index} className="text-2xl font-semibold">
                  {digit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskOnePage;
