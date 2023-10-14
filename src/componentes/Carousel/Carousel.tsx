import corte1 from "./../../assets/imgcorte1.jpg";
import corte2 from "./../../assets/imgcorte2.jpg";
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
                src={corte1}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                className={style["section-carousel-img"]}
                src={corte2}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                className={style["section-carousel-img"]}
                src={corte1}
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
