document.addEventListener("DOMContentLoaded", function (event) {
  const countdownElements = document.querySelectorAll(".countdown-timer");

  // Function to parse dates in DD-MM-YYYY format
  function parseDate(input) {
    const parts = input.split("-");
    // new Date(year, month [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
    // Note: months are 0-based
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }

  countdownElements.forEach(function (counterElement) {
    const dateString = counterElement.getAttribute("data-countdown-to");
    const targetDate = parseDate(dateString);
    const intervalId = setInterval(function () {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        counterElement.textContent = "00:00:00";
        // Additional actions when countdown is over can be added here
        return;
      }

      const hours = String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
        2,
        "0"
      );

      // Update the DOM elements
      counterElement.querySelector(".time.hours").textContent = hours;
      counterElement.querySelector(".time.minutes").textContent = minutes;
      counterElement.querySelector(".time.seconds").textContent = seconds;
    }, 1000);
  });
});
