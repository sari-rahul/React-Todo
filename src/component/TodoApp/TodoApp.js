import React,{Component} from "react";
import "./TodoApp.css"

export class TodoApp extends Component {

    state = {
        input:"",
        items:[]
    }
    handleChange = event =>{
        this.setState({
            input: event.target.value
        });

    };

    deleteItem = key =>{
        this.setState({
            items:this.state.items.filter((data,index)=> index !== key)
        });
    };

    storeItems= event => {
        event.preventDefault();
        const { input } = this.state;


        this.setState({
            items:[...this.state.items,input],
            input:""
        });

    };

    render(){
        const {input,items} = this.state;
        return(
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems} >
                    <h1>TodoApp</h1>
                    <input 
                        type="text" 
                        value={input}
                        onChange={this.handleChange} 
                        placeholder="Enter Items" />
                </form>
                <ul>
                    { items.map((data,index)=>(
                        <li key={index}> 
                            {data} <i className="fa fa-trash" aria-hidden="true" onClick={ () => this.deleteItem(index)}></i>
                        </li>
                    ))}
                </ul>
            </div>
        );
                    }
    }

export default TodoApp;


