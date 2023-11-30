const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

const formatTime = (date) => {
  const hour12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const isAm = date.getHours() < 12;
  return `${hour12}:${minutes}:${seconds} ${isAm ? "am" : "pm"}`;
};

const formatDate = async (date) => {
  const month = date.getMonth();
  const day = date.getDate();
  const week = date.getDay();
  const year = date.getFullYear();
  try {
    const response = await fetch("./calender.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const Days = [];
    const Months = [];
    const data = await response.json();

    Months.push(data.months);
    Days.push(data.days);
    console.log(Months); // Array of months
    console.log(Days); // Array of days
    return `${data.days[week]}, ${data.months[month]} ${day} ${year}`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

setInterval(async () => {
  timeElement.innerHTML = formatTime(new Date());
  dateElement.innerHTML = await formatDate(new Date());
}, 10); // 1000ms = 1 second
