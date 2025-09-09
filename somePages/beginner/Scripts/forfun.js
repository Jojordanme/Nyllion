window.onload = () => {
  console.log("Window loaded");
  const container = document.getElementById('ButtonContainer');
  const buttons = container.querySelectorAll('.button-pathway-pushable');

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const total = buttons.length;
  console.log("Total buttons found:", buttons.length);
  // Arrange buttons like a constellation
  buttons.forEach((btn, index) => {
    // X: spread from left to right across container
    const x = (index / (total - 1)) * (containerWidth - 60) * 1; // 60px padding for button size

    // Y: add some vertical randomness (simulate constellation offset)
    const y = containerHeight / 2 + (Math.random() - 0.5) * containerHeight * 4;

    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  });


  const canvas = document.getElementById('connectionCanvas');
  const ctx = canvas.getContext('2d');

  // Resize canvas to fill the screen
  function resizeCanvas() {
    canvas.width = window.innerWidth * 5;
    canvas.height = window.innerHeight;
  }




  // Draw lines between each consecutive button
  function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'white';  // White lines
    ctx.lineWidth = 4;
    const coords = Array.from(buttons).map(btn => {
      console.log("aaaaa")
      const rect = btn.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
    });

    for (let i = 0; i < coords.length - 1; i++) {
      console.log("aaaaaa")
      const from = coords[i];
      const to = coords[i + 1];

      // Only draw if positions look valid (inside viewport roughly)
      if (
        from.x > 0 && from.x < window.innerWidth &&
        from.y > 0 && from.y < window.innerHeight &&
        to.x > 0 && to.x < window.innerWidth &&
        to.y > 0 && to.y < window.innerHeight
      ) {
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      } else {
        console.warn(`Skipping line from button ${i} to ${i+1} due to invalid position.`);
      }
  }}

  // Initial setup
  function init() {
    resizeCanvas();
    drawLines();
  }

  init()
  window.addEventListener('resize', () => {
    init(); // Reposition and redraw on resize
  });
}