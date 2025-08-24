const messages = [
  "Алгоритми є, а якщо знайду",
  "Ти сам підписався на это",
  "що є число, але не є число",
  "Ви вірите в рекурсію?",
];
export const loadingMessage = (): string => {
  const randomIndex = Math.floor(Math.random() * messages.length);

  return messages[randomIndex];
}
