// dateHelpers.js

// Aaj ki date string format mein (YYYY-MM-DD)
export const getTodayDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

// Kal ki date string format mein
export const getYesterdayDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().split('T')[0];
};