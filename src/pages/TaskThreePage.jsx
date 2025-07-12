import { useRef } from "react";
import icon from "../assets/react.svg";
import vite from "../../public/vite.svg";

function TaskThreePage() {
  const centerPlusRef = useRef();
  const rightPlusRef = useRef();
  const leftArrow = useRef();

  const aminate = (direction = "Y", value = "10px") => {
    if (centerPlusRef.current) {
      centerPlusRef.current.style.transform = `translate${direction}(${value})`;
      centerPlusRef.current.style.transition = "transform 0.3s ease";
    }

    if (rightPlusRef.current) {
      rightPlusRef.current.style.transform = `translate${direction}(${value})`;
      rightPlusRef.current.style.transition = "transform 0.3s ease";
    }
  };

  const reset = (direction = "Y") => {
    if (centerPlusRef.current) {
      centerPlusRef.current.style.transform = `translate${direction}(0)`;
    }
    if (rightPlusRef.current) {
      rightPlusRef.current.style.transform = `translate${direction}(0)`;
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-24">
      <p className="text-gray-800 mb-2 text-2xl  ">
        Explore our classes and master trending skills!
      </p>
      <h2 className="font-bold text-4xl">
        Dive into <span className="text-teal-700">what's Hot Right Now!</span>🔥
      </h2>

      <div className="flex gap-10 mt-10">
        {/* left card */}
        <div className="bg-[#C43346] min-w-[550px] rounded-4xl">
          <div className="flex items-end justify-end mt-7 text-white pr-10">
            <button
              onMouseEnter={() => {
                leftArrow.current.style.transform = "translateX(10px)";
                leftArrow.current.style.transition = "transform 0.3s ease";
              }}
              onMouseLeave={() => {
                leftArrow.current.style.transform = "translateX(0)";
              }}
              className="font-normal text-lg flex items-center gap-3"
            >
              View all Courses{" "}
              <i ref={leftArrow} className="fa-solid fa-arrow-right "></i>
            </button>
          </div>

          <div className="flex px-20 mt-12 gap-10 relative">
            <img
              src={icon}
              alt="React Icon"
              className="w-20 h-16 bg-[#898AC4] p-2 rounded-md transform"
              style={{ transform: "rotate(160deg)" }}
            />

            <div className="relative flex items-center mx-10">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded absolute top-0 left-0 rotate-12">
                <i className="fa-solid fa-thumbs-up text-white text-lg"></i>
              </span>

              <span className="text-white w-8 h-8 flex items-center justify-center bg-gray-700 rounded absolute  top-3 -left-8 shadow-lg rotate-10">
                #
              </span>

              <span className="w-7 h-7 flex items-center justify-center bg-pink-600 rounded absolute top-10 -right-4 rotate-10">
                <i className="fa-solid fa-heart text-white text-lg"></i>
              </span>
            </div>

            <div className="-rotate-10 relative">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-512.png"
                alt="VueJS logo icon with green color"
                className="w-16 h-16 object-contain -mt-3 rotate-180"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png"
                alt=""
                className="w-16 h-16 object-contain absolute top-0 left-0"
              />
              <button className="bg-sky-300 px-2 text-blue-700 font-semibold rounded-sm relative z-10">
                VueJS
              </button>
            </div>

            <img src={vite} alt="React Icon" className="w-20 h-16 transform" />
          </div>

          <div className="flex items-center justify-center mt-6">
            <span className="text-[150px] font-extrabold text-[#F7E9E9]">
              23
            </span>
            <span className="text-[#F7E9E9] font-extrabold text-5xl -ml-5 -mt-24 select-none">
              +
            </span>
            <div>
              <h2 className="text-white font-semibold text-2xl -mt-2 mb-1">
                All Courses
              </h2>
              <p className="text-[#F7E9E9] text-md">
                courses you're powering <br /> through right now.
              </p>
            </div>
          </div>
        </div>

        {/* center card */}
        <div
          className="bg-[#F9E9EA] min-w-[270px] rounded-4xl group"
          onMouseEnter={() => aminate("Y")}
          onMouseLeave={() => reset("Y")}
        >
          <div className="absolute left-[57%] -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-lg">Click me </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className=" text-gray-800 rotate-[-20deg] mt-[-16px]"
            >
              <path
                d="M12 4v12m0 0l-6-6m6 6l6-6"
                stroke="currentColor"
                strokeWidth="0.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex justify-center items-center h-32">
            <div
              className="mt-36 transform"
              style={{ transform: "rotate(-90deg)" }}
            >
              <h2 className="text-[#C43346] text-3xl font-bold mb-3">
                Upcoming <br /> Courses
              </h2>
              <p className="text-[#C43346] font-medium text-md">
                exiciting new courses <br /> waiting to the boost your skills.{" "}
              </p>
            </div>
          </div>

          <div className="text-[#C43346] mt-24 text-center">
            <span className="text-[150px] font-extrabold">05</span>
            <span
              className="font-extrabold text-6xl -ml-6 absolute top-[60%]"
              ref={centerPlusRef}
            >
              +
            </span>
          </div>
        </div>

        {/* right card */}
        <div
          onMouseEnter={() => aminate("X")}
          onMouseLeave={() => reset("X")}
          className="bg-[#F9E9EA] min-w-[270px] rounded-4xl group"
        >
          <div className="absolute left-[77%] -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-lg">Click me </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className=" text-gray-800 rotate-[-20deg] mt-[-16px]"
            >
              <path
                d="M12 4v12m0 0l-6-6m6 6l6-6"
                stroke="currentColor"
                strokeWidth="0.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center h-32">
            <div
              className="mt-36 transform"
              style={{ transform: "rotate(-90deg)" }}
            >
              <h2 className="text-[#C43346] text-3xl font-bold mb-3">
                Ongoing <br /> Courses
              </h2>
              <p className="text-[#C43346] font-medium text-md">
                currently happenings<span className="w-10">-</span>don't
                <br /> miss out on the action!.
              </p>
            </div>
          </div>

          <div className="text-[#C43346] mt-24 text-center">
            <span className="text-[150px] font-extrabold">10</span>
            <span
              ref={rightPlusRef}
              className="font-extrabold text-6xl -ml-6 absolute top-[60%]"
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskThreePage;
