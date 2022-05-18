import style from './Form.module.css'

function Form({type, name, placeholder, text, handleOnChange, value}){
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}></input>
        </div>
    )
}

export default Form