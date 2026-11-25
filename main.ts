import { mkdirSync, writeFileSync } from "node:fs";

const CANDIDATES = ["buffering"];

function pickWord(): string {
  const choice = CANDIDATES[0];
  if (choice.length < 1 || choice.length > 99) {
    throw new Error("word must be 1-99 characters");
  }
  if (choice.trim().length === 0) {
    throw new Error("word must not be only whitespace");
  }
  return choice;
}

const word = pickWord();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
