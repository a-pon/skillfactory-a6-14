function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

function randomDivId() {
  let n = Math.round(Math.random() * 36);
  return `#slot-${n}`;
}