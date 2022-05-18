import style from './Form.module.css'

function Form({ handleSubmit, handleOnChange, dados}) {
    return(
        <form className={style.form} onSubmit={handleSubmit} onChange={handleOnChange}>
                <label for='titulo'>Titulo: </label>
                <input  type='text' name='titulo' id='titulo' className={style.titulo}/>
                <label for='descricao'>Descrição: </label>
                <input  type='text' name='descricao' id='descricao' className={style.descricao}/>
                <label for='texto'>Noticia: </label>
                <textarea name='texto' id='texto' className={style.texto}></textarea>
                <input type='submit' className={style.submit}></input>
        </form>
    )
}

export default Form