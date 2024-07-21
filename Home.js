// animasi
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const box = document.getElementById("box");

  toggleButton.addEventListener("click", function () {
    box.classList.toggle("contents");
    toggleButton.classList.toggle("hidden");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const spotify = document.getElementById("spotify");
  const video = document.getElementById("video");
  const music = document.getElementById("music");

  spotify.addEventListener("mouseover", function () {
    setTimeout(function () {
      video.classList.add("hidden");
      music.classList.remove("hidden");
    }, 1000); // 1 second delay
  });

  spotify.addEventListener("mouseout", function () {
    video.classList.remove("hidden");
    music.classList.add("hidden");
  });
});

// Set the date we're counting down to
var countDownDate = new Date("Jul 24, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";

    // Hide the countdown and show the hidden content
    document.getElementById("countdown").classList.add("hidden");
    document.getElementById("hiddenContent").classList.remove("hidden");
  }
}, 1000);
