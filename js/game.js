const numDivs = 36;
const maxHits = 11;

let hits = 1;
let firstHitTime = 0;

function round() {
  $(".target").removeClass("target");
  $(".game-field").text("");

  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $(".target").text(hits);

  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  $("#game-container").addClass("d-none");

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    round();
  } else {
    $(event.target).addClass("miss");
    round();
  }
}

function startGame() {
  $(".miss").removeClass("miss");

  firstHitTime = getTimestamp();

  $(".game-field").click(handleClick);

  round();
}

function init() {
  $("#button-start").click(startGame);

  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);