

let space = [];
const canvas = document.getElementById("canvas");
for (let i = canvas.getBoundingClientRect().left; i < canvas.getBoundingClientRect().right; i++) {
    space.push([canvas.getBoundingClientRect().top,i]);
    space.push([canvas.getBoundingClientRect().bottom,i]);
}
for (let i = canvas.getBoundingClientRect().top; i < canvas.getBoundingClientRect().bottom; i++) {
    space.push([i, canvas.getBoundingClientRect().top]);
    space.push([i, canvas.getBoundingClientRect().bottom]);
}
let parentObject = [];
// space = [...space,[1,2]]; 
// 1. Get the cursor coordinates
// function getCo(dom){
// const x = dom.getBoundingClientRect().left;
// const y = dom.getBoundingClientRect().top;

// // 2. Prepare an invisible canvas
// const canvas = document.createElement('canvas');
// const ctx = canvas.getContext('2d');

// // 3. Recreate your CSS clip-path exactly on the canvas 
// // (Example: creating a triangle/polygon)
// ctx.beginPath();
// ctx.moveTo(x1, y1);
// ctx.lineTo(x2, y2);
// ctx.lineTo(x3, y3);
// ctx.closePath();

// // 4. Returns TRUE if the mouse is visually inside the shape
// const isInside = ctx.isPointInPath(x, y);
// }

class Object {
 constructor (center, velocity) {
    const canvas = document.getElementById("canvas");

    this.interval = 0.05; 
    this.dom = document.createElement("div");
    this.dom.className = "object";
    this.dom.id = `object${numberOfObject}`
    this.dom.style.left = center[0]+"px";
    this.dom.style.top = center[1]+"px";
    canvas.appendChild(this.dom);
    this.center = center;
    this.velocity = velocity;
    this.collideCo = [];
    this.collide = 0;
    numberOfObject++;
    this.start();
 }
    update() {
            this.center[0] = this.center[0] + this.velocity[0]*this.interval;
            this.center[1] = this.center[1] + this.velocity[1]*this.interval;
            if (this.center[0]<0) {this.center[0]=-this.center[0]; this.velocity[0]=-this.velocity[0]};
            if (this.center[0]>785) {this.center[0]=1570-this.center[0]; this.velocity[0]=-this.velocity[0]};
            if (this.center[1]<0) {this.center[1]=-this.center[1]; this.velocity[1]=-this.velocity[1]};
            if (this.center[1]>385) {this.center[1]=770-this.center[1]; this.velocity[1]=this.velocity[1]};
            this.dom.style.left = this.center[0] +"px";
            this.dom.style.top = this.center[1] +"px";
            // if (space.some(coord => coord[0] === this.center[0])) {this.velocity[0] = - this.velocity[0]};
            // if (space.some(coord => coord[1] === this.center[1])) {this.velocity[1] = - this.velocity[1]};
    }
    start = () => {
         this.timer = setInterval(() => {
            this.update();
        }, this.interval*1000);       
    } 

 };


let numberOfObject = 1;
const a = new Object([1,2], [2, 3]);
const b = new Object([4, 10], [3, -4]);
console.log(a);
console.log(b);



window.addEventListener("click", () => {
    if (numberOfObject < 10000000)  {
    parentObject[numberOfObject-1] = new Object([getRandomInt(0, 800), getRandomInt(0, 400)], [getRandomInt(-200, 200), getRandomInt(-200, 200)]);
    console.log("clicked");
    }
})

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}