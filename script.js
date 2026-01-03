// Subtle background gradient shift
const body = document.body;
let gradientStep = 0;

function animateGradient() {
  gradientStep += 0.002; // speed of change
  if (gradientStep > 1) gradientStep = 0;

  body.style.background = `linear-gradient(120deg, 
    rgba(30,60,114,1) ${Math.sin(gradientStep * Math.PI) * 100}%, 
    rgba(42,82,152,1) 100%)`;

  requestAnimationFrame(animateGradient);
}

animateGradient();
