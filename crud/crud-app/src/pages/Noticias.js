import { useState } from 'react'
import Form from '../components/Form'
import style from './Noticias.module.css'

function Noticias() {

    const [dados, setDados] = useState()

    function hChange(e) {
        setDados({ ...dados, [e.target.name]: e.target.value })
    }


    function hSubmit(e) {
        e.preventDefault()
        dados.data = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`


        fetch('http://localhost:5000/noticias',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(dados)
        })
            .then((resp) => console.log(resp))
    }
    return(
        <section className={style.section_content}>
            <h1> Adicionar Nova Noticia </h1>
            <Form
            handleOnChange={hChange}
            handleSubmit={hSubmit}
            dados={dados}/>
        </section>
    )
}

export default Noticias