// ============================================================
// Footer.jsx — PIE DE PÁGINA (componente estático)
// Solo muestra información. Calcula el año actual con JavaScript.
// ============================================================

function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {anio} MercaCauca
      </p>
      <p className="footer__apis">
        Datos de prueba:{' '}
        <a href="https://fakestoreapi.com" target="_blank" rel="noreferrer">
          FakeStoreAPI
        </a>{' '}
        y{' '}
        <a href="https://dummyjson.com" target="_blank" rel="noreferrer">
          DummyJSON
        </a>
      </p>
    </footer>
  );
}

export default Footer;
