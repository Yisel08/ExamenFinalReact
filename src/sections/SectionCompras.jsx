import { NavLink, Outlet } from 'react-router-dom';

import banner from '../assets/banner-compras.svg';
import { useCarritoStore } from '../store/useCarritoStore.js';

function SectionCompras() {
  // Cantidad de productos DIFERENTES en el carrito
  const distintos = useCarritoStore((state) => state.productos.length);

  return (
    <section className="seccion">
      <img
        src={banner}
        alt="Portada de compras con un carrito de mercado"
        className="seccion__banner"
      />

      <div className="pestanas">
        <NavLink to="/micanasta" end className="pestanas__item">
          Carrito ({distintos})
        </NavLink>
        <NavLink to="/mipedido/resumen" className="pestanas__item">
          Resumen de compra
        </NavLink>
      </div>

      <div className="seccion__contenido">
        <Outlet />
      </div>
    </section>
  );
}

export default SectionCompras;
