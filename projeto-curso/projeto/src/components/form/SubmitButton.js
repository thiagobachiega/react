import style from './SubmitButton.module.css'

function SubmitButton({text}){
    return(
        <div className={style.SubmitButton_control}>
            <button>{text}</button>
        </div>
    )
}

export default SubmitButton