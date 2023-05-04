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

                lightBeam.style.fill = "#b8dbff";
                
                setTimeout(function() {
                lightBeam.style.fill = "";
                }, 500); 
                
                setTimeout(function() {
                lightBeam.style.fill = "#b8dbff";
                }, 1400); 

            } 
        }
    });
}, { threshold: 0.5 });

const lampObs = document.querySelector('.observe');
observer3.observe(lampObs);



const observer4 = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    document.querySelector('.frame3__trip-blocker').classList.add('animate');
  } 
});

const tripObs = document.querySelector('.frame3__trip-observe');
observer4.observe(tripObs);



const stat3 = document.querySelector('.stat3');

const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      stat3.classList.add('live');
    } else {
        stat3.classList.remove('live');
    }
  });
});
observer5.observe(stat3);



const animatedBlinds = document.querySelectorAll(".blind");

function animateBlind(blind) {
  blind.animate(
    {
      transform: ["rotateX(0deg)", "rotateX(90deg)"],
      backgroundColor: ["#161f4d", "lightblue"]
    },
    {
      duration: 3000,
      easing: "ease-in-out",
      fill: "both"
    }
  );
}

animatedBlinds.forEach(blind => {
  let once = false;
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !once) {
          animateBlind(entry.target);
          once = true;
        }
      });
    },
    {
      rootMargin: "-50px 0px",
      threshold: 1.0
    }
  );
  observer.observe(blind);
});
