
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const date = now.toDateString();

    const clock = document.getElementById('clock');
    const dateDisplay = document.getElementById('date');

    clock.innerText = `${hours}:${minutes}`;
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

document.querySelector('.card-content').addEventListener('click', function() {
    this.classList.toggle('is-flipped');
  });
  
//   
document.querySelectorAll('.clickable-row').forEach(row => {
    row.addEventListener('click', () => {
      alert('Please click for more information!');
    });
  });
  
// 3d effect for paging
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const pageContent = document.querySelector('.page-content');

  let currentPageIndex = -1;

  // Find the index of the current page in the navbar links
  const currentPagePath = window.location.pathname;

  navLinks.forEach((link, index) => {
    const linkPath = link.getAttribute('href');
    
    if (linkPath === currentPagePath) {
      currentPageIndex = index;
    }

    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');
      const nextPageIndex = Array.from(navLinks).findIndex(item => item.getAttribute('href') === href);
 
      const direction = nextPageIndex > currentPageIndex ? 'forward' : 'backward';
   
      pageContent.classList.add(`page-flip-${direction}`);

      currentPageIndex = nextPageIndex;
    
      setTimeout(() => {
        window.location.href = href;
      }, 500); 
    });
  });
});




  
  
 
    
