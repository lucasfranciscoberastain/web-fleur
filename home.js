 <script>
(function() {
  const navLinks = document.querySelector('.nav-links');
  const openBtn  = document.querySelector('.bi-list');            // hamburguesa
  const closeBtn = document.querySelector('.nav-links .bi-x-lg'); // X

  if (!navLinks) return;

  // Abrir menú
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      navLinks.classList.add('show');
      openBtn.classList.add('hidden'); // OCULTA HAMBURGUESA AL ABRIR 
    });
  }

  // Cerrar menú
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      navLinks.classList.remove('show');
	      document.body.classList.add('menu-open');   // <--- AGREGADO

      openBtn.classList.remove('hidden'); // VUELVE A MOSTRAR
    });
  }

  // Cerrar al tocar un link
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('show');
	      document.body.classList.remove('menu-open'); // <--- AGREGADO

      openBtn.classList.remove('hidden');
    });
  });

})();
</script> 
























































































ESTILOOOO BIEN FUNCIONANDO






/* ---------- RESET BÁSICO ---------- */
* { box-sizing: border-box; margin:0; padding:0; }
body { font-family: "Bodoni Moda SC", serif; }


  body.menu-open nav {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }


/* ---------- HEADER / NAV BASE ---------- */
.header {
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url('fondo/backgound.jpg');
  background-position: center;
  background-size: cover;
  position: relative;
}

nav{
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color: #000000e3;
  padding: 3px 6%;
  position: relative;
  z-index: 40; /* sobre los fondos */
}

nav img { width:120px; display:block; }

/* ---------- NAVLINKS (por defecto: modo ESCRITORIO) ---------- */
/* Reglas de escritorio: menu horizontal, hamburguesa oculta */
.nav-links {
  position: static !important;
  width: auto;
  height: auto;
  background: transparent !important;
  padding-top: 0 !important;
  right: auto !important;
  transition: none !important;
  text-align: center;
}

.nav-links ul {
  list-style:none;
  display:flex;
  gap: 20px;
  align-items:center;
  margin:0;
  padding:0 0 0 0;
}

.nav-links ul li { display:inline-block; }

.nav-links ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 13px;}

/* underline effect (desktop) */
.nav-links ul li::after{
  content: '';
  display:block;
  width:0%;
  height:2px;
  background:#5d5d5dc7;
  transition: 0.5s;
}
.nav-links ul li:hover::after { width:100%; }

/* ---------- ICONOS (ocultos en PC) ---------- */
nav .bi {
  display: none; /* oculto en escritorio */
  color: #fff;
  font-size: 28px;
  cursor: pointer;
}

/* ---------- TEXTO / HERO ---------- */
.text-box {
  width:90%;
  color:#fff;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  text-align:center;
}
.text-box h1 { font-size:50px; }
.text-box p { font-size:14px; margin:10px 0 40px; }

/* ---------- BOTON ---------- */
.hero-btn {
  display:inline-block;
  text-decoration:none;
  color:#fff;
  border:1px solid #b5b5b5d0;
  padding:12px 34px;
  font-size:13px;
  background:transparent;
  transition:.2s;
}
.hero-btn:hover { background:#858585; color:#232323da; }

/* ---------- MÓVIL: panel lateral y hamburguesa ---------- */
@media (max-width:700px) {

  /* mostrar hamburguesa (icono list) fuera del panel */
  nav .bi-list {
    display: block !important;
  }

  /* panel lateral que contiene links (oculto por defecto) */
  .nav-links {
    position: fixed !important;
    top: 0;
    right: -260px;      /* oculto */
    width: 260px;
    height: 100vh;
    background: rgba(86, 86, 86, 0.92);
    padding-top: 70px;
    transition: right .35s ease;
    z-index: 200;
    text-align:left;
  }

  /* cuando se añade la clase .show se desplaza a la vista */
  .nav-links.show {
    right: 0 !important;
  }

  /* X (cerrar) dentro del panel */
  .nav-links i.bi-x-lg {
    display: block;
    position: absolute;
    top: 18px;
    right: 18px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }

  /* links verticales */
  .nav-links ul {
    display:block;
    padding-left: 20px;
  }
  .nav-links ul li { margin: 18px 0; }
  .nav-links ul li a { font-size:16px; color:#fff; }

  /* estilo extra para que el logo no solape */
  nav img { z-index: 210; position: relative; }
}
/* ==== FIX MÓVIL: panel deslizable y prioridad sobre el contenido ==== */

/* Asegurar comportamiento de escritorio intacto */
@media (min-width: 701px) {
  .nav-links {
    position: static !important;
    right: auto !important;
    top: auto !important;
    width: auto !important;
    height: auto !important;
    background: transparent !important;
    padding-top: 0 !important;
    transition: none !important;
    display: block !important;
  }
  .nav-links ul { display: flex !important; gap: 20px; align-items: center; }
  /* esconder los iconos (hamburguesa / X) en escritorio */
  .bi-list, .nav-links .bi-x-lg { display: none !important; }
}

/* Móvil: panel lateral oculto por defecto */
@media (max-width: 700px) {
  /* Mostrar hamburguesa (icono fuera del panel) */
  .bi-list { display: inline-block !important; font-size: 28px; color: #fff; cursor: pointer; z-index: 300; }

  /* Panel lateral (oculto por defecto: right fuera de pantalla) */
  .nav-links {
    position: fixed !important;
    top: 0 !important;
    right: -200px !important;      /* fuera de la vista */
    width: 200px !important;
    height: 100vh !important;
    background: rgb(0, 0, 0) !important;
    padding-top: 70px !important;
    transition: right .36s cubic-bezier(.2,.9,.2,1) !important;
    z-index: 2 !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch !important;
    text-align: left !important;
  }

  /* Cuando se abre */
  .nav-links.show {
    right: 0 !important;
  }

  /* Icono X dentro del panel (mostrar y posicionar) */
  .nav-links .bi-x-lg {
    display: block !important;
    position: absolute !important;
    top: 18px !important;
    right: 18px !important;
    font-size: 22px !important;
    color: #fff !important;
    cursor: pointer !important;
    z-index: 350 !important;
  }

  /* Lista vertical clara y espaciada */
  .nav-links ul {
    display: block !important;
    padding-left: 22px !important;
    margin: 0 !important;
  }
  .nav-links ul li {
    display: block !important;
    margin: 16px 0 !important;
    padding: 0 !important;
  }
  .nav-links ul li a {
    font-size: 16px !important;
    color: #fff !important;
  }

  /* Evitar que logo quede debajo del panel */
  nav > a img { position: relative; z-index: 310; }

  /* Si necesitas, esconder cualquier otra duplicada de iconos en móvil */
  /* .otro-elem-icono { display: none !important; } */
}

/* ===== Prevent body scroll when menu open (JS toggles .menu-open on body) ===== */
body.menu-open {
  overflow: hidden;
  height: 100%;
  touch-action: none;
}


nav .bi-list {
    display: block;
    font-size: 32px;
    color: #fff;
    cursor: pointer;
    z-index: 999;
}

/* Cuando el menú está visible */
.nav-links.show ~ .bi-list {
    display: none;
}

/* Ocultar hamburguesa cuando está abierto */
.bi-list.hidden {
  display: none !important;
}

/* Mostrar hamburguesa normalmente */
.bi-list {
  font-size: 32px;
  color: white;
  cursor: pointer;
  display: none;        /* OCULTO EN PC */
}

/* Mostrar solo en móvil */
@media (max-width: 700px) {
  .bi-list {
    display: block;
    z-index: 9999;
  }
}

/* La X debe mostrarse solo en móvil */
.nav-links .bi-x-lg {
  display: none;
}

@media (max-width: 700px) {
  .nav-links .bi-x-lg {
    display: block;
    font-size: 32px;
    color: white;
    margin: 20px;
    cursor: pointer;
  }
}

/* ====== LOGO RESPONSIVE ====== */
@media (max-width:700px) {
  nav img {
    width: 130px !important;   /* ajustá a tu gusto */
  }
}

@media (max-width:450px) {
  nav img {
    width: 70px !important;
  }
}




/* Cuando el menú está abierto, oscurecer la barra del nav */
body.menu-open nav {
  background-color: rgba(0, 0, 0, 0.274) !important; 
  backdrop-filter: blur(6px);
  transition: background-color .3s ease;
}

.nav-links.show ul {
  flex-direction: column;      /* pasa de horizontal → columna */
  gap: 30px;                   
  align-items: center;         /* centra horizontal */
  justify-content: center;     /* opcional: centra vertical */
  width: 100%;
  margin-top: 60px;            /* separa del icono de cerrar */
}

.nav-links.show ul li a {
  text-align: center;
  display: block;
  width: 100%;
}

@media (max-width:700px) {
  .nav-links ul {
    padding-right: 40px !important; /* mueve el texto a la izquierda */
  }
}























































































<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Agencia de Modelos - Fleur</title>
		<link rel="stylesheet" href="style.css">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda+SC:ital,opsz@1,6..96&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">




	</head>
	<body>
		<section class="header">
			<nav>
				<a href="index.html"><img src="logo/Fleur Blanco.png"></a>
				<div class="nav-links">
				<i class="bi bi-x-lg" onclick="hideMenu()"></i>
					<ul>
						<li><a href="">INICIO</a></li>
						<li><a href="">AGENCIA</a></li>
						<li><a href="">CURSOS</a></li>
						<li><a href="">CONTACTO</a></li>
						<li><a href="">SPONSORS</a></li>					
					</ul>	
				</div>
				<i class="bi bi-list" onclick="showMenu()"></i>
			</nav>
			<div class="text-box">
				<h1>UNA AGENCIA UNICA</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores maiores quisquam porro perferendis at beatae! Quae iusto accusamus soluta aliquam nostrum aut veritatis adipisci culpa deleniti suscipit, velit ullam.</p>
				<a href="hero-btn" class="hero-btn">Review 2025</a>
			</div>
		</section>


	...
<!-- TU CONTENIDO -->

<script>
(function() {
  const navLinks = document.querySelector('.nav-links');
  const openBtn  = document.querySelector('.bi-list');      // hamburguesa
  const closeBtn = document.querySelector('.bi-x-lg');      // X

  if (!navLinks) return;

  // Abrir menú
  openBtn.addEventListener('click', () => {
    navLinks.classList.add('show');
    openBtn.classList.add('hidden');
	    document.body.classList.add('menu-open');   // <--- AGREGADO
 // OCULTA LAS 3 LÍNEAS APENAS SE ABRE
  });

  // Cerrar menú
  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
    openBtn.classList.remove('hidden');
	    document.body.classList.remove('menu-open'); // <--- AGREGADO
 // VUELVE A MOSTRAR LAS 3 LÍNEAS
  });
})();
</script>


</body>
</html>



	</body>
	</html>

	