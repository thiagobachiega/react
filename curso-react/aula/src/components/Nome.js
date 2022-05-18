function Nome({setNome}){
    return(
        <div>
            <input type='text' placeholder="Digite o seu nome" onChange={(e) => setNome(e.target.value)}></input>
        </div>
    )
}

export default Nome