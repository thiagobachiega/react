import imgsavings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
import style from './Home.module.css'

function Home() {
    return (
        <div className={style.home_container}>
            <h1>Bem-vindo ao <span>Project</span></h1>
            <p>Começe a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={imgsavings}></img>
        </div>
    )
}

export default Home