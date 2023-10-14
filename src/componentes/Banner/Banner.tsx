import style from './banner.module.css'
import banner from './../../assets/banner.jpg';

export function Banner() {

  const phoneNumber = '5511984117403';
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank'); // Abre o link em uma nova aba
  };

  return (
    <div className={style['containe-img']}>
      <img className={style.img} src={banner} alt="" />
      <h1 className={style.title}>Barba, Cabelo e Bigode!</h1>
      <h2 className={style.subtitle}>Agende seu Horário  <i className="bi bi-whatsapp" onClick={handleClick}></i></h2>
    </div>
  );
}
