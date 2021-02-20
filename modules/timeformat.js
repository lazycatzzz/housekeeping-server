module.exports = function() {
  let date = new Date();
  let y = date.getFullYear();
  let mo = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let time = `${y}-${mo}-${d} ${h}:${m}:${s}`;
  return time
}