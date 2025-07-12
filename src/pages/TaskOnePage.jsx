import React from "react";

function TaskOnePage() {
  return <div>TaskOnePage</div>;
}

export default TaskOnePage;

<div class="max-w-7xl mx-auto">
    <p class="text-gray-800 text-lg mb-2">Explore our classes and master trending skills!</p>
    <h1 class="font-extrabold text-2xl md:text-3xl text-gray-900 mb-8">
      Dive Into
      <span class="text-[#1B9B88]"> What’s Hot Right Now! </span>
      <span>🔥</span>
    </h1>

    <div class="flex flex-col md:flex-row gap-6 md:gap-8">
      <!-- Left big card -->
      <div
        class="bg-[#C43346] rounded-3xl flex flex-col justify-between p-8 md:p-12 flex-1 min-w-[280px] md:min-w-[400px] relative"
      >
        <a
          href="#"
          class="text-white font-semibold text-sm md:text-base absolute top-6 right-8 flex items-center gap-1 hover:underline"
          >View all Courses <i class="fas fa-arrow-right"></i
        ></a>

        <div class="flex justify-center gap-8 mt-12 mb-8">
          <img
            src="https://placehold.co/64x64/react-logo-blue-white.png"
            alt="React logo icon on blue square background"
            class="w-16 h-16 object-contain"
          />
          <img
            src="https://placehold.co/48x48/social-media-icons-hashtag-heart-like.png"
            alt="Social media icons with hashtag, heart, and like symbols"
            class="w-12 h-12 object-contain"
          />
          <img
            src="https://placehold.co/64x64/vuejs-logo-green.png"
            alt="VueJS logo icon with green color"
            class="w-16 h-16 object-contain"
          />
          <img
            src="https://placehold.co/64x64/colorful-pen-nib-icon.png"
            alt="Colorful pen nib icon representing design or creativity"
            class="w-16 h-16 object-contain"
          />
        </div>

        <div class="flex items-center gap-4">
          <span class="text-[96px] font-extrabold text-[#F7E9E9] leading-none select-none">23</span>
          <span
            class="text-[#F7E9E9] font-extrabold text-5xl -ml-3 select-none"
            >+</span
          >
          <div>
            <h2 class="text-white font-bold text-xl md:text-2xl mb-1 select-none">All Courses</h2>
            <p class="text-[#F7E9E9] text-sm md:text-base max-w-xs leading-relaxed">
              courses you're powering through right now.
            </p>
          </div>
        </div>
      </div>

      <!-- Middle card -->
      <div
        class="bg-[#F9E9EA] rounded-3xl flex flex-col justify-center items-center p-6 md:p-8 min-w-[160px] md:min-w-[200px] relative"
      >
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 text-black text-xs font-normal select-none">
          Click me!
          <svg
            class="inline-block w-6 h-6 -rotate-45"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col items-center justify-center gap-2 rotate-[270deg] origin-center">
          <h3 class="text-[#C43346] font-extrabold text-lg md:text-xl leading-tight select-none">
            Upcoming <br />Courses
          </h3>
          <p
            class="text-[#C43346] text-xs md:text-sm font-normal max-w-[120px] text-center leading-tight"
          >
            exciting new courses <br />
            waiting to boost your skills.
          </p>
        </div>
        <div class="flex items-center gap-1 mt-6 select-none">
          <span class="text-[#C43346] font-extrabold text-[96px] leading-none">05</span>
          <span class="text-[#C43346] font-extrabold text-5xl -ml-3">+</span>
        </div>
      </div>

      <!-- Right card -->
      <div
