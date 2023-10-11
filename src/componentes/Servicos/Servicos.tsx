import style from "./servicos.module.css";
import barba from "./../../assets/barba.jpeg";
import corte from "./../../assets/serviceCorte.jpg";
import barbaCorte from "./../../assets/barbar&corte.jpg";

export function Servicos() {
  return (
    <>
      <div className={style["container-servicos"]} id="servicesSection">
        <h1 className={style.title}>Serviços</h1>
        <div className={style["contain-card-service"]}>
          <div className={style["card1-service"]}>
            <img src={barba} alt="" className={style["img-service"]} />
            <span className={style["text-barba"]}>Barba</span>
            <span className={style["text-barba"]}>R$20,00</span>
          </div>

          <div className={style["card1-service"]}>
            <img src={corte} alt="" className={style["img-service"]} />
            <span className={style["text-barba"]}>Corte</span>
            <span className={style["text-barba"]}>R$25,00</span>
          </div>

          <div className={style["card1-service"]}>
            <img src={barbaCorte} alt="" className={style["img-service"]} />
            <span className={style["text-barba"]}>Corte + Barba</span>
            <span className={style["text-barba"]}>R$40,00</span>
          </div>

          <div className={style["card1-service"]}>
            <img
              src="https://media.istockphoto.com/id/915637778/pt/foto/young-stylish-hairdresser-blow-drying-hipster-mans-hair.jpg?s=612x612&w=0&k=20&c=1KpWHnc2qa35Ka5TFBkZlOuZcpRlOZ6UCnpjkdLDELE="
              alt=""
              className={style["img-service"]}
            />
            <span className={style["text-barba"]}>Progressiva</span>
            <span className={style["text-barba"]}>R$35,00</span>
          </div>

          <div className={style["card1-service"]}>
            <img
              src="https://media.istockphoto.com/id/1506098850/pt/foto/holding-a-hair-dryer-in-his-hands-the-hairdresser-dries-and-styles-the-hair-of-a-child-boy-the.jpg?s=612x612&w=0&k=20&c=RK8q9Qi7vw4NY3DAxpP9t3GDr3iFXWYgAGOSoGazR4E="
              alt=""
              className={style["img-service"]}
            />
            <span className={style["text-barba"]}>Corte Infrantil</span>
            <span className={style["text-barba"]}>R$20,00</span>
          </div>

          <div className={style["card1-service"]}>
            <img
              src="https://media.istockphoto.com/id/526651763/pt/foto/homem-suas-sobrancelhas-cortados-na-barbearia.jpg?s=612x612&w=0&k=20&c=g6zq6aSspnXT6fBfsuQb5JLTpc_7-C6e7lpjm8fbXbk="
              alt=""
              className={style["img-service"]}
            />
            <span className={style["text-barba"]}>Sobrancelha</span>
            <span className={style["text-barba"]}>R$7,00</span>
          </div>
        </div>

        <p className={style.paragraph}>
          Serviços que vão além de barba, cabelo e bigode. Nossos serviços
          costumam superar expectativas.
        </p>
      </div>
      <div></div>
    </>
  );
}
