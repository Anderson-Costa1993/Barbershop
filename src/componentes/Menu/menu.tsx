import stytle from './menu.module.css'

interface MenuProps  {
  isOpen: boolean;
  closeDropdown: () => void;
}

export function Menu(props: MenuProps) {

  const { isOpen, closeDropdown } = props;

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {isOpen && (
        <ul className={stytle.itens}>
          <li className={stytle.li} onClick={closeDropdown} > <a className={stytle.link} href="#"onClick={() => scrollToSection('servicesSection')}>Serviços</a></li>
          <li className={stytle.li} onClick={closeDropdown} ><a className={stytle.link} href="#"onClick={() => scrollToSection('carouselExampleAutoplaying')}>Nossos Trabalhos</a></li>
          <li  className={stytle.li} onClick={closeDropdown}><a className={stytle.link} href="#"onClick={() => scrollToSection('locationSection')}>Localização</a></li>
        </ul>
      )}
      {isOpen && <div className="overlay" onClick={closeDropdown}></div>}
    </div>
  );
};

export default Menu;

