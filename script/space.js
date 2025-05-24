const canvas = document.getElementById("espaco");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrelas = [];

function criaEstrelas(qtd) {
  estrelas = [];
  for (let i = 0; i < qtd; i++) {
    estrelas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      raio: Math.random() * 1.5
    });
  }
}

function desenha() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < estrelas.length; i++) {
    let estrela = estrelas[i];

    estrela.z -= 2;
    if (estrela.z <= 0) {
      estrela.z = canvas.width;
      estrela.x = Math.random() * canvas.width;
      estrela.y = Math.random() * canvas.height;
    }

    let sx = (estrela.x - canvas.width / 2) * (canvas.width / estrela.z) + canvas.width / 2;
    let sy = (estrela.y - canvas.height / 2) * (canvas.width / estrela.z) + canvas.height / 2;
    let raio = estrela.raio * (canvas.width / estrela.z);

    ctx.beginPath();
    ctx.arc(sx, sy, raio, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }

  requestAnimationFrame(desenha);
}

criaEstrelas(400);
desenha();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  criaEstrelas(400);
});
