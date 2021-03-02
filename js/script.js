// var flats = [
//     А_5k_2261{
//         img: "./img/Блок B_5k_ 168,14.png",
//         estate: true,
//         twoLevel: true,
//         terrace: true,
//     },
//     D_5k_2541{
//         img: "./img/Блок D_5k_254.1.png",
//         estate: true,
//         twoLevel: true,
//         terrace: true,
//     },
//     B_5k_16814{
//         img: "./img/Блок B_5k_ 168,14.png",
//         estate: true,
//         twoLevel: true,
//         terrace: true,
//     }
// ];
const check = document.getElementById("check");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const d254 = document.getElementById("D_5k_254");
const ground = document.getElementById("ground");
const a226 = document.getElementById("А_5k_226");
const b168 = document.getElementById("B_5k_168");

function active() {
  check.classList.toggle("active");
}

function active1() {
  check1.classList.toggle("active");
}

function active2() {
  check2.classList.toggle("active");
}

function twoLevel() {
  b168.classList.toggle("twoLvl");
  d254.classList.toggle("twoLvl");
  a226.classList.toggle("twoLvl");
}

function withGround() {
  b168.classList.toggle("withGround");
  d254.classList.toggle("withGround");
  a226.classList.toggle("withGround");
}
function withTerrace() {
  b168.classList.toggle("withT");
  d254.classList.toggle("withT");
  a226.classList.toggle("withT");
}
function bimg3() {
  const img = document.getElementById("planImage");
  const area = document.getElementById("area");
  const block = document.getElementById("block");
  const id = document.getElementById("cost");
  img.src = "./img/Блок D_5k_254.1.png";
  area.innerHTML = "254.1 м2";
  block.innerHTML = "D";
  cost.innerHTML = "190 000 200т";
}
function bimg2() {
  const img = document.getElementById("planImage");
  const area = document.getElementById("area");
  const block = document.getElementById("block");
  const id = document.getElementById("cost");
  img.src = "./img/Блок А_5k_226.1.png";
  area.innerHTML = "226.1 м2";
  block.innerHTML = "A";
  cost.innerHTML = "186 000 200т";
}
function bimg1() {
  const img = document.getElementById("planImage");
  const area = document.getElementById("area");
  const block = document.getElementById("block");
  const id = document.getElementById("cost");
  img.src = "./img/Блок B_5k_168,14.png";
  area.innerHTML = "168.14 м2";
  block.innerHTML = "B";
  cost.innerHTML = "181 591 200т";
}
