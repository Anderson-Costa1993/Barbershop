import tesoura from "./../../assets/tesoura.png";
import maquina from "./../../assets/barbeador.png";
import navalha from "./../../assets/navalha.png";
import style from "./carousel.module.css";

export function Carousel() {
  return (
    <section
      className={style["section-carousel"]}
      id="carouselExampleAutoplaying"
    >
      <div className={style["div-carousel"]}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" style={{ maxWidth: "700px" }}>
            <div className="carousel-item active">
              <img
                className={style["section-carousel-img"]}
                src="https://img.freepik.com/fotos-gratis/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20824.jpg?w=1380&t=st=1719793673~exp=1719794273~hmac=4643193d5c089150cf1bbf7e051171965b79ec53f1eab81a008e219c3e7b72b0"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                className={style["section-carousel-img"]}
                src="https://img.freepik.com/fotos-gratis/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20861.jpg?w=1380&t=st=1719793580~exp=1719794180~hmac=c23b9196b6aea370b1538a3bac2855f8f52a0c87fcfa6ad768bc487b05a6c21b"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                className={style["section-carousel-img"]}
                src="https://img.freepik.com/fotos-gratis/cabeleireiro-em-uma-barbearia-penteando-o-cabelo-de-um-cliente_1303-20981.jpg?w=1380&t=st=1719793632~exp=1719794232~hmac=77c764e8af64f58bc4adfcd2367bc33ffcb0c59697d31b8a436ab7e4557a2229"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className={style["div-title"]}>
          <h1>Confira nossos trabalhos</h1>
          <div className={style["div-img"]}>
            <img src={tesoura} alt="" />
            <img src={maquina} alt="" />
            <img src={navalha} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
