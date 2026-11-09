/* =========================================================
   DATOS DEL ANUARIO  (edita aquí en Visual Studio Code)
   Un objeto por estudiante. Para cambiar el orden, mueve las líneas.
   - foto: ruta de la imagen dentro de la carpeta "fotos/"
           (si el archivo no existe, se muestra "TU FOTO AQUÍ")
   - Usa \n dentro del texto para saltar de línea.
   ========================================================= */
const estudiantes = [
  {
    nombre: "Laura Liney Alarcon Cortes",
    foto: "fotos/estudiante01.jpg",
    frase: "El que persevera alcanza",
    recuerdo: "Haber encontrado una persona realmente leal en mi vida",
    aspiraciones: "enfermera, doctora, ingeniera",
    agradecimientos: "Agradezco a Dios y a mi familia que me acompañaron en esta etapa, por su apoyo, consejos y paciencia.",
    firma: ""
  },
  { nombre: "Narly Lizeth Amaya Losada ", foto: "fotos/estudiante02.jpg", frase: "No entendí nada", recuerdo: "Mi recuerdo favorito es conocer a amistades que me ayudaron en el peor momento y me sacaban una sonrisa", aspiraciones: "1. Seguir estudiando", agradecimientos: "A mis padres y a todos los docentes que me acompañaron ", firma: "" },
  { nombre: "Nycolt Danihela Barrera Mosquera", foto: "fotos/estudiante03.jpg", frase: " Su Madreeee ", recuerdo: "Mi recuerdo favorito fue cuando iniciamos nuestro grupito de 4 en septimo con unas amigas ", aspiraciones: "Estudiar en el Sena Hacer orgullosa a mi madre-Infante de Marina-Chef", agradecimientos: "Le doy gracias a mi madre por darme u apoyo incondicional en mis etudios y por siempre confiar en mi ", firma: "" },
  { nombre: "Estudiante 4", foto: "fotos/estudiante04.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 5", foto: "fotos/estudiante05.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 6", foto: "fotos/estudiante06.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 7", foto: "fotos/estudiante07.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 8", foto: "fotos/estudiante08.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 9", foto: "fotos/estudiante09.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 10", foto: "fotos/estudiante10.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 11", foto: "fotos/estudiante11.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 12", foto: "fotos/estudiante12.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 13", foto: "fotos/estudiante13.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 14", foto: "fotos/estudiante14.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 15", foto: "fotos/estudiante15.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 16", foto: "fotos/estudiante16.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 17", foto: "fotos/estudiante17.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 18", foto: "fotos/estudiante18.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 19", foto: "fotos/estudiante19.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 20", foto: "fotos/estudiante20.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 21", foto: "fotos/estudiante21.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 22", foto: "fotos/estudiante22.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 23", foto: "fotos/estudiante23.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 24", foto: "fotos/estudiante24.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 25", foto: "fotos/estudiante25.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 26", foto: "fotos/estudiante26.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 27", foto: "fotos/estudiante27.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 28", foto: "fotos/estudiante28.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 29", foto: "fotos/estudiante29.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 30", foto: "fotos/estudiante30.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
  { nombre: "Estudiante 31", foto: "fotos/estudiante31.jpg", frase: "", recuerdo: "", aspiraciones: "", agradecimientos: "", firma: "" },
];

/* =========================================================
   LÓGICA DEL LIBRO (no hace falta tocar nada de aquí abajo)
   Los cambios hechos en el navegador se guardan en este equipo
   (localStorage). Para llevarlos a este archivo usa "Exportar datos".
   ========================================================= */
const CLAVE = 'anuario-eugenio-ferro';
const originales = JSON.parse(JSON.stringify(estudiantes));

try {
  const guardado = JSON.parse(localStorage.getItem(CLAVE));
  if (Array.isArray(guardado)) guardado.forEach((d, i) => estudiantes[i] && Object.assign(estudiantes[i], d));
} catch (err) { /* sin datos guardados */ }

const pagina = document.getElementById('pagina');
const contador = document.getElementById('contador');
const btnEditar = document.getElementById('editar');
const archivo = document.getElementById('archivo');
let indice = 0;
let animando = false;
let editando = false;

const esc = (t = '') => String(t).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function guardar() {
  try { localStorage.setItem(CLAVE, JSON.stringify(estudiantes)); }
  catch (err) { alert('No se pudo guardar: el navegador no tiene espacio. Usa fotos más pequeñas o exporta los datos.'); }
}

function campo(color, icono, etiqueta, clave, lineas, extra = '') {
  return `
    <section class="campo ${color} con-icono ${extra}">
      <span class="icono">${icono}</span>
      <span class="etiqueta">${etiqueta}</span>
      <div class="texto" data-campo="${clave}" data-ph="Escribe aquí…" style="--l:${lineas}">${esc(estudiantes[indice][clave])}</div>
    </section>`;
}

function render() {
  const e = estudiantes[indice];
  const vacia = '<div class="vacia"><span>📷</span>TU FOTO<br>AQUÍ</div>';
  const foto = e.foto
    ? `<img src="${esc(e.foto)}" alt="Foto de ${esc(e.nombre)}"
         onerror="this.outerHTML='<div class=&quot;vacia&quot;><span>📷</span>TU FOTO<br>AQUÍ</div>'">`
    : vacia;

  pagina.innerHTML = `
    <i class="esquina tl"></i><i class="esquina tr"></i><i class="esquina bl"></i><i class="esquina br"></i>
    <header class="encabezado">
      <img src="img/escudo.png" alt="Escudo Ciencia y Virtud">
      <h1>ANUARIO ESCOLAR</h1>
      <p>Institución Educativa Eugenio Ferro</p>
      <div class="tira"></div>
    </header>
    <div class="fila">
      <div class="foto" title="${editando ? 'Clic para cambiar la foto' : ''}">${foto}</div>
      <div class="columna">
        ${campo('verde', '👤', 'Nombre completo:', 'nombre', 2)}
        ${campo('rojo', '⭐', 'Mi frase favorita:', 'frase', 3)}
      </div>
    </div>
    ${campo('amarillo', '💗', 'Mi recuerdo favorito:', 'recuerdo', 3)}
    ${campo('verde', '⛰️', 'Mis aspiraciones:', 'aspiraciones', 3)}
    ${campo('rojo', '🤝', 'Agradecimientos:', 'agradecimientos', 3)}
    ${campo('amarillo', '✏️', 'Mi firma:', 'firma', 1, 'firma')}
  `;
  contador.textContent = `Página ${indice + 1} de ${estudiantes.length}`;
  aplicarEdicion();
}

/* ---------- Edición en el navegador ---------- */
function aplicarEdicion() {
  document.body.classList.toggle('editando', editando);
  btnEditar.classList.toggle('activo', editando);
  btnEditar.textContent = editando ? '✅ Terminar edición' : '✏️ Editar esta página';
  pagina.querySelectorAll('.texto').forEach(el => {
    if (editando) el.setAttribute('contenteditable', 'true'); else el.removeAttribute('contenteditable');
  });
}

pagina.addEventListener('input', ev => {
  const el = ev.target.closest('.texto');
  if (!el) return;
  estudiantes[indice][el.dataset.campo] = el.innerText.replace(/\n$/, '');
  guardar();
});

// Pegar siempre como texto plano
pagina.addEventListener('paste', ev => {
  if (!editando) return;
  ev.preventDefault();
  const t = (ev.clipboardData || window.clipboardData).getData('text');
  document.execCommand('insertText', false, t);
});

// Cambiar foto (se reduce a 400 px para que ocupe poco)
pagina.addEventListener('click', ev => { if (editando && ev.target.closest('.foto')) archivo.click(); });
archivo.addEventListener('change', () => {
  const f = archivo.files[0];
  if (!f) return;
  const lector = new FileReader();
  lector.onload = () => {
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, 400 / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = img.width * k; c.height = img.height * k;
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      estudiantes[indice].foto = c.toDataURL('image/jpeg', 0.8);
      guardar(); render();
    };
    img.src = lector.result;
  };
  lector.readAsDataURL(f);
  archivo.value = '';
});

btnEditar.addEventListener('click', () => { editando = !editando; render(); });

document.getElementById('exportar').addEventListener('click', () => {
  const datos = estudiantes.map((e, i) => ({
    ...e,
    foto: String(e.foto).startsWith('data:') ? originales[i].foto : e.foto
  }));
  const blob = new Blob([JSON.stringify(datos, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'datos-anuario.json';
  a.click();
  URL.revokeObjectURL(a.href);
});

document.getElementById('restablecer').addEventListener('click', () => {
  if (confirm('Se borrarán los cambios hechos en el navegador y volverán los datos de script.js. ¿Continuar?')) {
    localStorage.removeItem(CLAVE);
    location.reload();
  }
});

/* ---------- Pasar página ---------- */
function ir(nuevo) {
  if (animando || nuevo < 0 || nuevo >= estudiantes.length) return;
  animando = true;
  const sig = nuevo > indice;
  pagina.classList.add(sig ? 'sale-sig' : 'sale-ant');
  setTimeout(() => {
    indice = nuevo;
    render();
    pagina.classList.remove('sale-sig', 'sale-ant');
    pagina.classList.add(sig ? 'entra-sig' : 'entra-ant');
    setTimeout(() => { pagina.classList.remove('entra-sig', 'entra-ant'); animando = false; }, 350);
  }, 350);
}

function ajustarEscala() {
  const e = Math.min(1, (innerHeight - 140) / 900, (innerWidth - 140) / 600);
  document.documentElement.style.setProperty('--e', Math.max(e, 0.3));
}

document.getElementById('anterior').addEventListener('click', () => ir(indice - 1));
document.getElementById('siguiente').addEventListener('click', () => ir(indice + 1));
document.addEventListener('keydown', ev => {
  if (editando) return; // no cambiar de página mientras se escribe
  if (ev.key === 'ArrowLeft') ir(indice - 1);
  if (ev.key === 'ArrowRight') ir(indice + 1);
});
addEventListener('resize', ajustarEscala);

ajustarEscala();
render();
