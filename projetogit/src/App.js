import React, { useState } from 'react';
import './App.css'
import githubImage from './git.jpg'  


function App() {
  const [userData, setUserData] = useState('')
  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => { //Evento acionado ao clicar no botão search do formulario
    event.preventDefault(); //Previne que seja executado o comportamento padrão do evento, que no caso é clicar no botão search.
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse))
  }

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github Profile</h1>
      <form onSubmit={handleSubmit}> 
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" required value={search} onChange={handleChange}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Search</button>
            </span>
          </div>
        </div>
      </form>
      {!userData && (
        <img src={githubImage} className="responsive rounded-circle" height="200px"></img>
       )}
      {userData && (
        <div className="py-5"> 
          <img src={userData.avatar_url} className="responsive rounded-circle" height="200px"></img>
        <h1>
          <a href='#' target='_new'>{userData.name}</a>
        </h1>
        <h3>{userData.location}</h3>
        <p>
          <a href={userData.blog} target="_new" >{userData.blog} </a>
        </p>
      </div>
      )}
    </div>
  ); 
}

export default App;
