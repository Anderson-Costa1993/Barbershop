import style from './unidade.module.css'
import imgsalao from './../../assets/imgSalao.jpg';

export function Unidade () {

  return (
    <div className={style['container-unidade']}>
      <h1 className={style.title}>Nossa Unidade</h1>
      <img className={style.img} src={imgsalao} alt="" />
    </div>
  )

}