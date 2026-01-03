// Subtle gradient background animation
const body = document.body;
let step = 0;

function animateGradient() {
  step += 0.002;
  if (step > 1) step = 0;

  body.style.background = `linear-gradient(120deg, 
    rgba(30,60,114,1) ${Math.sin(step * Math.PI) * 100}%, 
    rgba(42,82,152,1) 100%)`;

  requestAnimationFrame(animateGradient);
}

animateGradient();
