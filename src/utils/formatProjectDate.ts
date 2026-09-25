export function formatProjectDate(date: string) {
  const [year, month] = date.split("-");

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return `${months[Number(month) - 1]} ${year}`;
}