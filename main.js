let container = document.querySelector('.container-image1');
let empties = document.querySelectorAll(".empty");

container.addEventListener("dragstart", dragStart);
container.addEventListener("dragend", dragEnd);

for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}


function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = ' disable'),0)
}
function dragEnd() {
    this.className = " container-image1";
}
function dragOver(e) {
    e.preventDefault();
    // console.log('drad over')
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
    // console.log('drag enter')
}
function dragLeave() {
    this.className = " empty";
    // console.log('drag leave')
}
function dragDrop() {
    this.className = " empty";
    this.append(container);
    // console.log('drag drop')
}


let container1 = document.querySelector(".container-image2");
let empties1 = document.querySelectorAll(".empty1");

container1.addEventListener("dragstart", dragStart1);
container1.addEventListener("dragend", dragEnd1);

for (const empty1 of empties1) {
  empty1.addEventListener("dragover", dragOver1);
  empty1.addEventListener("dragenter", dragEnter1);
  empty1.addEventListener("dragleave", dragLeave1);
  empty1.addEventListener("drop", dragDrop1);
}

function dragStart1() {
  this.className += " hold1";
  setTimeout(() => (this.className = " disable1"), 0);
}
function dragEnd1() {
  this.className = " container-image2";
}
function dragOver1(e) {
  e.preventDefault();
  // console.log('drad over')
}
function dragEnter1(e) {
  e.preventDefault();
  this.className += " hovered1";
  // console.log('drag enter')
}
function dragLeave1() {
  this.className = " empty1";
  // console.log('drag leave')
}
function dragDrop1() {
  this.className = " empty1";
  this.append(container1);
  // console.log('drag drop')
}


















