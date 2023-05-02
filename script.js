// Get the element to observe
const stat1 = document.querySelector('.frame1__text-highlight');

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      stat1.classList.add('live');
    } 
  });
});
observer1.observe(stat1);


const stat2 = document.querySelector('.stat2');

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      stat2.classList.add('live');
    } 
  });
});
observer2.observe(stat2);




