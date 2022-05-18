function Pessoa({nome, idade, cargo, foto}) {
    return(
        <div>
            <img src={foto}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Cargo: {cargo}</p>
        </div>
    )
}

export default Pessoa