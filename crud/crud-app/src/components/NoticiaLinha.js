import style from './NoticiaLinha.module.css'
import { ImPencil } from "react-icons/im"
import { ImBin } from "react-icons/im"
import { Link } from 'react-router-dom'


function NoticiaLinha ({id, titulo, texto, descricao, data, handleDelete}) {

    function deleteNoticia(e){
        e.preventDefault()
        handleDelete(id)
    }

    return(
        <div className={style.listcontent}>
            <li className={style.noticia}>
                <div className={style.list_title}>
                <strong>{titulo}</strong>
                </div>
                <div className={style.list_desc}>
                    {descricao}
                </div>
                <div className={style.list_date}>
                    {data}
                <div className={style.edit}>
                    <Link to={`/noticias/${id}`}>
                        <ImPencil className={style.btn_edit} />
                    </Link>
                    <ImBin className={style.btn_edit} onClick={deleteNoticia}/>
                </div>
                </div>
            </li>
        </div>
    )
}

export default NoticiaLinha