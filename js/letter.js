var aparted = false;

$("#open").click(function () {
  if (!aparted) {
    var typed = new Typed(".letter", {
      strings: [
        "^1000...",
        "Happy Women's Day 8/3!!!<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hạnh phúc là khi có một việc để làm… một nơi để đến… và một người để yêu…<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chúc Ngọc luôn xinh đẹp, vui vẻ, mọi điều tốt đẹp luôn bên Ngọc và có tất cả các điều trên nhé!<br><p style='float:right; display:block; width:180px;'>All the best for you ❤</p><br><p style='float:right; display:block; width:150px;'>Love you ❤❤❤ </p>",
      ],
      typeSpeed: 100,
      backSpeed: 50,
    });

    $("#open").find("span").eq(0).css("background-position", "0 -150px");

    aparted = true;

    var music = document.getElementById("music2");
    if (music.paused) {
      music.play();
      $("#music_btn2").css("opacity", "1");
    }
  }
});

function playPause() {
  var music = document.getElementById("music2");
  var music_btn = $("#music_btn2");

  if (music.paused) {
    music.play();
    music_btn.css("opacity", "1");
  } else {
    music.pause();
    music_btn.css("opacity", "0.2");
  }
}

window.onload = function () {
  var currentUrl = window.location.href;
  var firstIndex = currentUrl.indexOf("#");
  if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

  $("#music2").attr("src", bgmsrc);

  document.addEventListener("touchstart", function (event) {
    if (event.touches.length > 1) event.preventDefault();
  });

  var lastTouchEnd = 0;

  document.addEventListener(
    "touchend",
    function (event) {
      var now = new Date().getTime();
      if (now - lastTouchEnd <= 300) event.preventDefault();
      lastTouchEnd = now;
    },
    false
  );

  document.addEventListener("gesturestart", function (event) {
    event.preventDefault();
  });

  $("body").css("opacity", "1");
  $("#jsi-cherry-container").css("z-index", "-99");
};
