//  - Leer el estado GLOBAL de Zustand SIN props.
//  - useEffect para un "efecto secundario": cambiar el título
//    de la pestaña del navegador cada vez que cambia el carrito.
// ============================================================
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import logo from '../assets/logo.svg';
import { useCarritoStore } from '../store/useCarritoStore.js';

function Header() {
  const navigate = useNavigate();

  const totalUnidades = useCarritoStore((state) =>
    state.productos.reduce((acumulado, p) => acumulado + p.cantidad, 0)
  );

  useEffect(() => {
    document.title =
      totalUnidades > 0 ? `(${totalUnidades}) MercaCauca` : 'MercaCauca';
  }, [totalUnidades]);

  return (
    <header className="header">
      <div className="header__marca">
         <img src={logo} alt="Logo de MercaCauca" className="header__logo" />
        <div>
          <h1 className="header__titulo">MercaCauca</h1>
          <p className="header__lema">Tu mercado en línea hecho con React</p>
        </div>
      </div>

      {/* Botón del carrito: navega a /compras y muestra el contador */}
      <button
        type="button"
        className="header__carrito"
        onClick={() => navigate('/compras')}
        aria-label={`Ver carrito, ${totalUnidades} productos`}
      >
        🛒
        {/* Solo mostramos la burbuja si hay productos */}
        {totalUnidades > 0 && (
          <span className="header__burbuja">{totalUnidades}</span>
        )}
      </button>
    </header>
  );
}

export default Header;
