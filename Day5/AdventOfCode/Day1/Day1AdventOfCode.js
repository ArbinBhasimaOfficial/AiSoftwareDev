import fs from "fs/promises";

const START = 50;
const MAX = 100;

function zionPartOne(rotations) {
  let current = START;
  let password = 0;

  rotations.forEach((rotation) => {
    const line = rotation.trim();
    if (!line) return; // Skip empty lines

    const direction = line.slice(0, 1);
    const value = Number(line.slice(1));

    if (direction === "R") {
      current = (current + value) % MAX;
    } else if (direction === "L") {
      current = (current - value) % MAX;
      if (current < 0) {
        current = MAX + current;
      }
    }

    if (current === 0) {
      password += 1;
    }
  });

  console.log(password);
}

const input = await fs.readFile("../input.txt", "utf-8");
zionPartOne(input.split("\n"));