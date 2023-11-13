
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const date = now.toDateString();

    const clock = document.getElementById('clock');
    const dateDisplay = document.getElementById('date');

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    dateDisplay.innerText = date;
}

setInterval(updateClock, 1000);

updateClock();


// mouse hover

document.body.addEventListener("mousemove", (event) => {
    const element = document.createElement("div");
    element.className = "animated-element";
    document.body.appendChild(element);

    element.style.left = event.clientX + "px";
    element.style.top = event.clientY + "px";

   
    setTimeout(() => {
        element.remove();
    }, 600);
});

// fliping the image
function flipCard(cardContent) {
    cardContent.classList.toggle('is-flipped');
  }

  
  