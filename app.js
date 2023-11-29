const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

const formatTime = (date) => {
  const hour12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const isAm = date.getHours() < 12;
  return `${hour12}:${minutes}:${seconds} ${isAm ? "am" : "pm"}`;
};

const formatDate = (date) => {
  const month = date.getMonth();
  const day = date.getDate();
  const week = date.getDay();
  const year = date.getFullYear();

  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysInWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${daysInWeek[week]}, ${Months[month]} ${day} ${year}`;
};

setInterval(() => {
  const dateTime = new Date();
  timeElement.innerHTML = formatTime(dateTime);

  dateElement.innerHTML = formatDate(dateTime);
}, 10);
