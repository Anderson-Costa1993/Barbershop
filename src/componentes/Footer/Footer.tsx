import style from "./footer.module.css";

export function Footer() {
  return (
    <>
      <div className={style["container-footer"]}>
        <section className={style["section-redes"]}>
          <h1>Redes Sociais</h1>
          <ul>
            <li>
              <a href="">
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
        </section>
        <div className={style['contaier-credits']}>
          <p>© 2023. BARBEARIA</p>
          <p>Desenvolvido por Anderson.Dev</p>
        </div>
      </div>
    </>
  );
}
