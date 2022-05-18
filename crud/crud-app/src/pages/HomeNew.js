import style from './HomeNew.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import NoticiaLinha from '../components/NoticiaLinha'

function HomeNew() {

    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/noticias",{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }, 
    }).then((resp) => resp.json())
    .then((data) => {
        setNoticias(data)})
    .catch((err) => console.log(err))
    }, [])

    function delNoticia(id) {
        fetch(`http://localhost:5000/noticias/${id}`,{
        method: "DELETE",
        headers: {
            'Content-Type': 'aplication/json',
        }
        }).then((resp) => resp.json)
        .then(data => {
            setNoticias(noticias.filter((noticia) => noticia.id !== id))
        })
    }


    return(
        <section className={style.section_content}>
            <h1>Ultimas Noticias</h1>
            <ul>
            {noticias.length > 0 && noticias.map((noticia) => (<NoticiaLinha
             id={noticia.id}   
             titulo={noticia.titulo} 
             descricao={noticia.descricao} 
             data={noticia.data}
             handleDelete={delNoticia}/>))}
             </ul>
        </section>
    )
}

export default HomeNew