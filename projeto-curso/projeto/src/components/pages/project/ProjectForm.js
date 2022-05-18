import { useEffect, useState } from 'react'
import Form from "../../form/Form"
import Select from "../../form/Select"
import SubmitButton from "../../form/SubmitButton"


function ProjectForm({text, handleSubmit, projectData}) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            "Content-type": 'aplication/json'
        }
    })
        .then((resp) => resp.json())
        .then((data) => { 
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...ProjectForm, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({ ...ProjectForm, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIdex].text,
        }})
    }

    return(
        <form onSubmit={submit}>
            <Form type="text" text="Nome do projeto:" name="inputTxt" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name ? project.name : ''}/>
            <Form type="number" text="Orçamento do projeto:" name="inputNum" placeholder="Insira o orçamento do projeto" handleOnChange={handleChange} value={project.budget ? project.budget : ''}/>
            <Select name="category_id" text="Selecione a categoria:" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''}/>
            <SubmitButton text={text}/>
        </form>
    )
}

export default ProjectForm