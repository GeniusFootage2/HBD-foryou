// letter

document.addEventListener("DOMContentLoaded", function () {
  // Animasi
  const second = document.getElementById("second");
  const first = document.getElementById("first");
  const remov = document.getElementById("remov");
  const finish = document.getElementById("finish");

  first.addEventListener("click", function () {
    finish.classList.add("slide-out-fwd-center");
    // Tambahkan delay 1 detik sebelum menjalankan fungsi
    // setTimeout(function() {
    //   first.classList.add("hidden");
    //   remov.classList.add("hidden");
    //   second.classList.remove("hidden");
    // }, 1000); // 1000 ms = 1 detik
  });
});


// Animasi

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const hbd = document.getElementById("hbd");
  const video = document.getElementById("video");
  const videos = document.getElementById("myVideo");

  toggleButton.addEventListener("click", function () {
    toggleButton.classList.add("hidden");
    hbd.classList.remove("hidden");
    videos.play();

    // Pastikan volume video diatur ke nilai yang tidak nol
    video.volume = 1.0;
  });

  // Spotify
  const spotify = document.getElementById("spotify");
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

// next

document.addEventListener("DOMContentLoaded", function () {
  // Animasi
  const after = document.getElementById("after");
  const before = document.getElementById("before");
  const one = document.getElementById("one");
  const two = document.getElementById("two");

  one.addEventListener("click", function () {
    before.classList.add("hidden");
    one.classList.add("hidden");
    after.classList.remove("hidden");
    two.classList.remove("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Animasi
  const before = document.getElementById("before");
  const after = document.getElementById("after");
  const two = document.getElementById("two");
  const myVideo = document.getElementById("myVideo");
  const one = document.getElementById("one");
  const happyer = document.getElementById("toggleButton");
  const happy = document.getElementById("hbd");

  two.addEventListener("click", function () {
    after.classList.add("hidden");
    two.classList.add("hidden");
    happyer.classList.remove("hidden");
    before.classList.remove("hidden");
    one.classList.remove("hidden");
    happy.classList.add("hidden");
    myVideo.pause();
  });
});
});
