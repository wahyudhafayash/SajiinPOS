export const getRandomBG = (): string => {
  const colors = [
    "#a1c2f3",
    "#3fa34d",
    "#e94e77",
    "#7c3aed",
    "#facc15",
    "#f472b6",
    "#0ea5e9",
    "#16a34a",
    "#f87171",
    "#8b5cf6",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};
