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

const lightBeam = document.getElementById("light-beam");
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(lightBeam.style.fill != "#b8dbff"){
            if (entry.isIntersecting) {
                console.log("Element is intersecting");
                lightBeam.style.fill = "#b8dbff";
                
                setTimeout(function() {
                lightBeam.style.fill = "";
                }, 800); 
                
                setTimeout(function() {
                lightBeam.style.fill = "#b8dbff";
                }, 1400); 

            } 
        }
    });
}, { threshold: 0.5 });

const lampObs = document.querySelector('.observe');
observer3.observe(lampObs);



