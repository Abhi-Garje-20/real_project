
let paragraph = document.getElementById("paragraph");
let button = document.querySelector("button");


function color() {
     
         let random = getrandomcolor();
         paragraph.style.backgroundColor = random;
};

function getrandomcolor(){

         let red = Math.floor(Math.random() * 255);
          let green = Math.floor(Math.random() * 255);
           let blue = Math.floor(Math.random() * 255);

           let color = `rgb(${red},${green},${blue})`;

           return color;
}

button.onclick = color;
