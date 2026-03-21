import { nanoid } from "nanoid";

const ANIMALS = [
  "mouse",
  "cheetah",
  "monkey",
  "slug",
  "orca",
  "salamander",
  "direwolf",
];

export const STORAGE_KEY = "chat_username";

export function generateUserName() {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `anonymouse-${word}-${nanoid(5)}`;
}
