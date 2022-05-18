import style from './NewProject.module.css'
import ProjectForm from './project/ProjectForm'

function NewProject() {


    function createPost(project) {
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} text="Criar Projeto"/>
        </div>
    )
}

export default NewProject