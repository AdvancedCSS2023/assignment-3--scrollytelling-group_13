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
    } else {
        stat2.classList.remove('live');
    }
  });
});
observer2.observe(stat2);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Element is intersecting");
        document.getElementById("light-beam").setAttribute("id", "newID");
      } 
    });
}, { threshold: 0.5 });
  
var svgObject = document.getElementById('light');
svgObject.addEventListener('load', function() {
  var svgDoc = svgObject.contentDocument;
  var element = svgDoc.getElementById('guy');
  observer.observe(element);
});



