import React, { useEffect, useState } from "react";

function TaskTwoPage() {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const totalCells = 646;
    const temp = [];

    for (let i = 0; i < totalCells; i++) {
      temp.push(i);
    }
    setCells(temp);
    console.log(temp);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const allCells = document.querySelectorAll(".grid-cell");

      // 🔁 Step 1: Remove 'grid-active' from all cells first
      allCells.forEach((cell) => {
        cell.classList.remove("grid-active");
      });

      // 🧠 Step 2: Pick 9 unique random indexes
      const randomIndexes = [];
      while (randomIndexes.length < 9) {
        const randomIndex = Math.floor(Math.random() * allCells.length);
        // only add if it is not already in the list
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }

      // ✨ Step 3: Add 'grid-active' to the new 9
      randomIndexes.forEach((index) => {
        const cell = allCells[index];
        if (cell) {
          cell.classList.add("grid-active");
        }
      });
    }, 2000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid-background">
      {cells.map((_, index) => (
        <div key={index} className="grid-cell w-[40px] h-[41px] bg-[#f0f0f0]" />
      ))}
    </div>
  );
}

export default TaskTwoPage;
