import style from "./localização.module.css";

export function Localizção() {
  return (
    <div className={style["div-location"]} id="locationSection">
      <h1 className={style.title}>Localização</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4133.176467739332!2d-46.404970388624825!3d-23.568293678706606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce659dc463b6e9%3A0x7c61c9081021dfc0!2zU2Fsw6NvIEltcMOpcmlv!5e1!3m2!1spt-BR!2sbr!4v1696617443871!5m2!1spt-BR!2sbr"
          width="90%"
          height="250"
          style={{ margin: "0 auto" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      <address className={style.adress}>
        Rua Igarapé Santa Cruz, 17 - Conj. Hab. Inacio Monteiro, São Paulo - SP,
        08472-320
      </address>
    </div>
  );
}
