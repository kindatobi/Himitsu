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

export const ROOM_TTL_SECONDS = 60 * 10;

export function generateUserName() {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `anonymouse-${word}-${nanoid(5)}`;
}

export function copyLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
}

export function formatTimeRemaining(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
