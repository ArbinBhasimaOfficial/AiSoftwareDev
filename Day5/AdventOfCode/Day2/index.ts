import fs from "fs/promises";

// Part One validator: exactly two equal halves (even lengths only)
function isInvalidIdPartOne(value: number): boolean {
  const valueString = value.toString();
  if (valueString.length % 2 !== 0) {
    return false;
  }

  const halfLength = valueString.length / 2;
  const left = valueString.slice(0, halfLength);
  const right = valueString.slice(halfLength);

  return left === right;
}

// Part Two validator: repeated sequence at least twice (odd or even lengths)
function isInvalidIdPartTwo(value: number): boolean {
  const s = value.toString();
  // REMOVED the length % 2 check so odd-length repeated numbers (like 111 or 123123123) work!
  return (s + s).indexOf(s, 1) < s.length;
}

function zionPartOne(rangeStrings: string[]) {
  const invalidIds: number[] = [];

  rangeStrings.forEach((range) => {
    const trimmed = range.trim();
    if (!trimmed) return;

    const [start, end] = trimmed.split("-").map(Number);

    for (let i = start!; i <= end!; i++) {
      if (isInvalidIdPartOne(i)) {
        invalidIds.push(i);
      }
    }
  });

  const sum = invalidIds.reduce((sum, val) => sum + val, 0);
  console.log("Part One:", { totalInvalidIds: invalidIds.length, sum });
}

function zionPartTwo(rangeStrings: string[]) {
  const invalidIds: number[] = [];

  rangeStrings.forEach((range) => {
    const trimmed = range.trim();
    if (!trimmed) return;

    const [start, end] = trimmed.split("-").map(Number);

    for (let i = start!; i <= end!; i++) {
      if (isInvalidIdPartTwo(i)) {
        invalidIds.push(i);
      }
    }
  });

  const sum = invalidIds.reduce((sum, val) => sum + val, 0);
  console.log("Part Two:", { totalInvalidIds: invalidIds.length, sum });
}

const input = await fs.readFile("./input.txt", "utf-8");
// zionPartOne(input.trim().split(","));
zionPartTwo(input.trim().split(","));
