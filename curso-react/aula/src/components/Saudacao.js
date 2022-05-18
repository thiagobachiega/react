function Saudacao({nome}){
    return(
        <>
        {nome && (<p>Olá, {nome} tudo bem?</p>)}
        </>
    )
}

export default Saudacao