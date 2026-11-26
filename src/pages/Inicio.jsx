import { useNavigate } from 'react-router-dom';

import bannerCatalogo from '../assets/banner-catalogo.svg';
import bannerCompras from '../assets/banner-compras.svg';

function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="inicio">
      <h2 className="inicio__titulo">Bienvenido a MercaCauca</h2>
      <p className="inicio__texto">
        Explora productos reales traídos desde APIs libres, agrégalos a tu
        carrito y revisa el resumen de tu compra.
      </p>

      <div className="inicio__tarjetas">
        {/* Tarjeta de la Section 1 */}
        <article className="tarjeta-inicio">
          <img src={bannerCatalogo} alt="Vista previa de la vitrina" />
          <h3>vitrina</h3>
          <p>Productos con fetch (FakeStoreAPI) y con Axios (DummyJSON).</p>
          <button
            type="button"
            className="btn btn--primario"
            onClick={() => navigate('/catalogo')}
          >
            Ver vitrina
          </button>
        </article>

        {/* Tarjeta de la Section 2 */}
        <article className="tarjeta-inicio">
          <img src={bannerCompras} alt="Vista previa del carrito" />
          <h3>Mis compras</h3>
          <p>Carrito global con Zustand: agregar, sumar, restar y eliminar.</p>
          <button
            type="button"
            className="btn btn--secundario"
            onClick={() => navigate('/compras')}
          >
            Ir al carrito
          </button>
        </article>
      </div>
    </div>
  );
}

export default Inicio;
