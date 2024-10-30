const txts = document.querySelector(".headline").children;
// console.log(txts);
txtlen = txts.length;
let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animateTxt() {
  for (let i = 0; i < txtlen; i++) {
    txts[i].classList.remove("txt-in", "txt-out");
  }

  setTimeout(function () {
    txts[index].classList.add("txt-out");
  }, textOutTimer);

  txts[index].classList.add("txt-in");

  setTimeout(function () {
    if (index == txtlen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateTxt();
  },textInTimer);
}

window.onload = animateTxt;