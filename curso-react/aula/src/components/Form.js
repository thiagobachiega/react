import { useState } from 'react'

function Form(){

    function cadastro(event){
        event.preventDefault()
        console.log('cadastro realizado com sucesso!')
        console.log(nome)
    }
    
    const [nome, setNome] = useState()

   return(
       <div>
           <form onSubmit={cadastro}>
               <div>
                   <label>Nome:</label>
                   <input type="text" id="nome" name="nome" onChange={(e) => setNome(e.target.value)}></input>
               </div>
               <div>
                   <label>Senha:</label>
                   <input type="text" id="senha" name="senha"></input>
               </div>
               <div>
                    <input type='submit' value='Confirmar'></input>
               </div>
           </form>
       </div>
   )
}

export default Form