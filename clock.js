
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const date = now.toDateString();

    const clock = document.getElementById('clock');
    const dateDisplay = document.getElementById('date');

    const clockB = document.getElementById('clockB');
    const dateDisplayB = document.getElementById('dateB');

    clock.innerText = `${hours}:${minutes}`;
    dateDisplay.innerText = date;

    clockB.innerText = `${hours}:${minutes}`;
    dateDisplayB.innerText = date;
}

setInterval(updateClock, 1000);

updateClock();

  /* Filter */
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const f = this.dataset.filter;
        document.querySelectorAll('.proj-card').forEach(card => {
          const tags = card.dataset.tags || '';
          const show = f === 'all' || tags.includes(f);
          card.style.display = show ? 'flex' : 'none';
        });
      });
    });

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

document.querySelector('.card-content').addEventListener('click', function() {
    this.classList.toggle('is-flipped');
  });
  
//   
document.querySelectorAll('.clickable-row').forEach(row => {
    row.addEventListener('click', () => {
      alert('Please click for more information!');
    });
  });
