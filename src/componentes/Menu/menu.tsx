import stytle from "./menu.module.css";

interface MenuProps {
  isOpen: boolean;
  closeDropdown: () => void;
}

export function Menu(props: MenuProps) {
  const { isOpen, closeDropdown } = props;

  return (
    <div>
      {isOpen && (
        <ul className={stytle.itens}>
          <li className={stytle.li}>
            <a className={stytle.link} href="#servicesSection">
              Serviços
            </a>
          </li>
          <li className={stytle.li}>
            <a className={stytle.link} href="#carouselExampleAutoplaying">
              Nossos Trabalhos
            </a>
          </li>
          <li className={stytle.li}>
            <a className={stytle.link} href="#locationSection">
              Localização
            </a>
          </li>
        </ul>
      )}
      {isOpen && <div className="overlay" onClick={closeDropdown}></div>}
    </div>
  );
}

export default Menu;
