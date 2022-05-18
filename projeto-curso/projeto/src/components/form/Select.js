import style from './Select.module.css'

function Select({name, options, text, handleOnChange, value}){
    return(
        <div className={style.select_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option disabled >Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>                      
                ))}
            </select> 
        </div>
    )
}

export default Select