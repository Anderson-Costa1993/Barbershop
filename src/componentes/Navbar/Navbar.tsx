import style from "./navbar.module.css";
import logo from "./../../assets/logo2.png";

interface NavbarProps {
  toggleDropdown: () => void;
  isOpen: boolean;
  closeDropdown: () => void;
}

export function Navbar(props: NavbarProps) {
  const { toggleDropdown } = props;

  return (
    <nav className={style.nav} id="sectionNav">
      <a className={style["btn-home"]} href="#sectionNav">
        <i
          className="bi bi-shift-fill"
          style={{ color: "#ff0808", fontSize: "22px" }}
        ></i>
      </a>
      <div className={style["div-btn"]}>
        <i
          onClick={toggleDropdown}
          className="bi bi-list"
          style={{ fontSize: "28px", color: "#000000" }}
        ></i>
      </div>
      <img className={style["logo-mobile"]} src={logo} alt="" />
      <ul className={style.itens}>
        <li>
          <img className={style.logo} src={logo} alt="" />
        </li>
        <li className={style.li}>
          {" "}
          <a className={style.link} href="#sectionNav">
            Home
          </a>
        </li>
        <li className={style.li}>
          {" "}
          <a className={style.link} href="#servicesSection">
            Serviços
          </a>
        </li>
        <li className={style.li}>
          <a className={style.link} href="#carouselExampleAutoplaying">
            Nossos Trabalhos
          </a>
        </li>
        <li className={style.li}>
          <a className={style.link} href="#locationSection">
            Localização
          </a>
        </li>
        <div className={style["container-social-media"]}>
          <span>|</span>
          <a href="https://www.instagram.com/barbearia_salaoimperio/?igshid=NjIwNzIyMDk2Mg%3D%3D">
            {" "}
            <i className="bi bi-instagram"></i>
          </a>
          <a href="">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </ul>
      <div className={style["container-social-media-mobile"]}>
        <span>|</span>
        <a href="https://www.instagram.com/barbearia_salaoimperio/?igshid=NjIwNzIyMDk2Mg%3D%3D">
          {" "}
          <i className="bi bi-instagram"></i>
        </a>
        <a href="">
          <i className="bi bi-facebook"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
