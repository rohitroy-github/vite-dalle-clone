import {surpriseMePrompts} from "../constants";

export function getRandomPrompts(prompt) {
  const randomIndex = Math.floor(Math.random() * surprizeMePrompts.length);

  const randomPrompt = surprizeMePrompts[randomIndex];

  if (randomPrompt === prompt) {
    return getRandomPrompts(prompt);
  }

  return randomPrompt;
}
