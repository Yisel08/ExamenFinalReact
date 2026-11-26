import { useNavigate, useLocation } from 'react-router-dom';

const BOTONES = [
  { texto: 'Inicio', icono: '🏠', ruta: '/', exacta: true },
  { texto: 'Vitrina', icono: '🛍️', ruta: '/vitrina', exacta: false },
  { texto: 'Mi canasta', icono: '🛒', ruta: '/micanasta', exacta: true },
  { texto: 'Mi pedido', icono: '🧾', ruta: '/mipedido', exacta: true },
];

function Navbar() {
  const navigate = useNavigate(); // función para cambiar de ruta
  const { pathname } = useLocation(); // URL actual, ej: "/catalogo/axios"

  // Decide si un botón debe verse como "activo"
  const estaActivo = (boton) =>
    boton.exacta ? pathname === boton.ruta : pathname.startsWith(boton.ruta);

  return (
    <nav className="navbar" aria-label="Navegación principal">
      {BOTONES.map((boton) => (
        <button
          key={boton.ruta}
          type="button"
          // Clase base + clase de estado activo (CSS puro)
          className={`navbar__btn ${estaActivo(boton) ? 'navbar__btn--activo' : ''}`}
          onClick={() => navigate(boton.ruta)}
        >
          <span aria-hidden="true">{boton.icono}</span> {boton.texto}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
