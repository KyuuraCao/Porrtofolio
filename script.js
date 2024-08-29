const skillBars = document.querySelectorAll('.skill-bar');

skillBars.forEach(skillBar => {
  const skillFill = skillBar.querySelector('.skill-fill');
  const percent = skillFill.dataset.percent;

  // Add animation delay and loop
  const animate = () => {
    skillFill.style.width = `${percent}%`;
    setTimeout(() => {
      skillFill.style.width = '0%';
      setTimeout(animate, 1000); // Adjust the delay as needed
    }, 2500); // Adjust the delay as needed
  };

  animate();
});