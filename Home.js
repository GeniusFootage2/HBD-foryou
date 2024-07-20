// animasi
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const box = document.getElementById("box");

    toggleButton.addEventListener("click", function() {
        box.classList.toggle("contents");
        toggleButton.classList.toggle("hidden");
        
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const spotify = document.getElementById("spotify");
    const video = document.getElementById("video");
    const music = document.getElementById("music");

    spotify.addEventListener("mouseover", function() {
        setTimeout(function() {
            video.classList.add("hidden");
            music.classList.remove("hidden");
        }, 1000); // 1 second delay
    });

    spotify.addEventListener("mouseout", function() {
        video.classList.remove("hidden");
        music.classList.add("hidden");
    });
});

