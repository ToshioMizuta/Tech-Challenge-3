import React from "react";
import { Table, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const opcaoCabecalho = ['Titulo' , 'Editora']


class Estante extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id: 0,
            titulo:'',
            editora:'',
            estante: []
         }
    }

    componentDidMount(){
       this.buscaLivro();
    }

    //componentWillUnmount(){

    //}

    buscaLivro = () => {
        fetch("http://localhost:3000/livros")
        .then(response => response.json())
        .then(dados => {
            this.setState({estante : dados})
        })
    }

    deletarLivro = (_id) => {
        fetch("http://localhost:3000/livros/"+ _id, {method: 'DELETE'})
        .then(response => {
            if(response.ok){
                this.buscaLivro();
            }
        })
    }

    carregarLivros = (_id) => {
        fetch("http://localhost:3000/livros/"+ _id,)
        .then(response => response.json())
        .then(livro => {
            this.setState({
                id: livro._id,
                titulo: livro.titulo,
                editora: livro.editora
            })
        })
    }

    atualizaTitulo = (e) => {
        this.setState(
            {
            titulo: e.target.value
            }
        )
    }

    atualizaEditora =(e) => {
        this.setState(
            {
            editora: e.target.value
            }
        )
    }


    cadastraLivros = (livro) => {
        fetch("http://localhost:3000/livros", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(livro)
        })
        .then(response => {
            if(response.ok){
                this.buscaLivro();
            }
            else{
                alert("não foi possível adicionar o Livro!")
            }
        })
    }

    atualizaLivros = (livro) => {
        fetch("http://localhost:3000/livros/"+livro._id,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(livro)
        })
            .then(response => {
                if(response.ok) {
                    this.buscaLivro();
                }else {
                    alert('Não foi possível atualizar o Livro!')
                }
            })
    }

    
    submit = () => {

        if(this.state.id === 0){
            const livro = {
                titulo: this.state.titulo,
                editora: this.state.editora,
               }
               this.cadastraLivros(livro);
        }else{
            const livro = {
                id: this.state._id,
                titulo: this.state.titulo,
                editora: this.state.editora
            }
            this.atualizaLivros(livro);
        }

          
    }

    renderTabela(){
    return(
        <div>
            <h1>Estante de Livros</h1>
        <Table bordered striped hover>
             <thead>
                <tr>
                    {opcaoCabecalho.map((texto) =>(
                        <th>{texto}</th>
                        ))}
                </tr>
              </thead>
              <tbody>
                    {this.state.estante.map((estante) => 
                        <tr>
                            <td>{estante.titulo}</td>
                            <td>{estante.editora}</td>
                            <td> 
                                <Button variant="secondary" onClick={() => this.carregarLivros(estante._id)}>Atualizar</Button>
                                <Button variant="danger" onClick={() => this.deletarLivro(estante._id)}>Excluir</Button>
                            </td>
                        </tr>
                       )}
               </tbody>
        </Table>
    </div>
     )
            
  }

  render(){
    return(
        <div>
        <h2>Formulário para cadastro de livro</h2>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control 
                    type="text" 
                    value = {this.state.id}
                    readOnly={true}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Título do Livro</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Insira o Título do livro que deseja adicionar" 
                    value = {this.state.titulo}
                    onChange={this.atualizaTitulo}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Editora</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Insira a editora do livro" 
                value={this.state.editora} 
                onChange={this.atualizaEditora}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.submit}>
                Salvar
            </Button>
            </Form>

            {this.renderTabela()}
        </div>
    )
  }
  
}

export default Estante;