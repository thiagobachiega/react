import style from './Noticia.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Form from '../components/Form'

function Noticia() {

    const { id } = useParams()

    const [noticia, setNoticia] = useState([])

    function hChange(e){
        setNoticia({ ...noticia, [e.target.name]: e.target.value })
    }


    function hSubmit(e){
        e.preventDefault()
        noticia.data = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`

        fetch(`http://localhost:5000/noticias/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(noticia)
        })
            .then((resp) => console.log(resp))
    }

    useEffect(() => {
        fetch(`http://localhost:5000/noticias/${id}`,{
            method: "GET",
            headers: {
                'Content-Type' : 'application/json',
            }
        }).then((resp) => resp.json())
        .then((data) => {
            setNoticia(data)
        })

    }, [id])

    return(
        <div className={style.section_content}>
            <h1> {noticia.titulo} </h1>
            <Form
            handleOnChange={hChange}
            handleSubmit={hSubmit}
            dados={noticia}/>
        </div>
    )
}

export default Noticia