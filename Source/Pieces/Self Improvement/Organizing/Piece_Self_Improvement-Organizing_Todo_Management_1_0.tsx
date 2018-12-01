//IMPORT REACT STUFF
import * as React from 'react';

//IMPORT EXTRA STUFF
import axios from 'axios';

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT
import '../../../Content/Internet and Businesses Online/Web Design/Web Design - Alien Loader, Web Development - 1.0.gif';

//IMPORT APPLICATION COMPONENTS
import { Global } from '../../../Global';

//BEGIN CONTAINER - 1-1
interface IContainerProps
{
    DomainName:string
}

class Container_1_1 extends React.Component<IContainerProps, any>{
    ///////////////////////////////////////////////////////
    //Class Setup
    ///////////////////////////////////////////////////////
    constructor(props: IContainerProps)
    {
        super(props);
        
        this.state = {
            isUpdating: false,
            isUpdatingIndex: null,
            newTodo: '',
            todos: [],
            loading: true
        }

        //WIRE EVENTS
        this.BulletedList_Helper_Events_Helper_GetNewItemID = this.BulletedList_Helper_Events_Helper_GetNewItemID.bind(this);

        this.Button_Mouse_Events_OnClick_CreateTodo = this.Button_Mouse_Events_OnClick_CreateTodo.bind(this);
        this.Button_Mouse_Events_OnClick_DeleteTodo = this.Button_Mouse_Events_OnClick_DeleteTodo.bind(this);
        this.Button_Mouse_Events_OnClick_UpdateTodoComplete = this.Button_Mouse_Events_OnClick_UpdateTodoComplete.bind(this);
        this.Button_Mouse_Events_OnClick_UpdateTodoStart = this.Button_Mouse_Events_OnClick_UpdateTodoStart.bind(this);

        this.TextBox_Form_Events_OnChange_Todo = this.TextBox_Form_Events_OnChange_Todo.bind(this);
        this.TextBox_State_Events_OnStateChange_Todo = this.TextBox_State_Events_OnStateChange_Todo.bind(this);
    }      

    ///////////////////////////////////////////////////////
    //Buttons
    ///////////////////////////////////////////////////////
    async Button_Mouse_Events_OnClick_CreateTodo() {
        const todos = this.state.todos;

        const response = await axios.post(`${Global().APIMockUrl}/todos`, {
            name: this.state.newTodo
        });

        todos.push(response.data);

        this.setState({
            todos: todos
        });

        this.PlaceHolder_Helper_Events_Helper_SetDisplayNotification("Todo created successfully!");
    }
    async Button_Mouse_Events_OnClick_DeleteTodo(index: number) {
        const oldTodos = this.state.todos;

        const Id = this.state.todos[index].id;

        const response = await axios.delete(`${Global().APIMockUrl}/todos/${Id}`);

        delete oldTodos[index];

        this.setState({
            todos: oldTodos
        });

        this.PlaceHolder_Helper_Events_Helper_SetDisplayNotification("Todo deleted successfully!");
    }
    async Button_Mouse_Events_OnClick_UpdateTodoComplete() {
        const updateTodo = this.state.todos[this.state.isUpdatingIndex];

        updateTodo.name = this.state.newTodo;

        const todos = this.state.todos;

        const response = await axios.put(`${Global().APIMockUrl}/todos/${updateTodo.id}`, {
            name: updateTodo.name
        });

        todos[this.state.isUpdatingIndex] = response.data;

        this.setState({
            isUpdating: false,
            isUpdatingIndex: null,
            todos: todos,
            newTodo: ''
        });

        this.PlaceHolder_Helper_Events_Helper_SetDisplayNotification("Todo updated successfully!");
    }
    Button_Mouse_Events_OnClick_UpdateTodoStart = (index: number): void => {
        const updateTodo = this.state.todos[index];

        this.setState({
            newTodo: updateTodo.name,
            isUpdating: true,
            isUpdatingIndex: index
        });
    }
    Button_Helper_Events_Helper_IsTodoInUpdateMode = (): boolean => {
        return Boolean(this.state.isUpdating);
    }

    ///////////////////////////////////////////////////////
    //Bulleted List
    ///////////////////////////////////////////////////////
    BulletedList_Helper_Events_Helper_GetNewItemID = (): number => {
        var lastTodo = this.state.todos[this.state.todos.length - 1];

        if (lastTodo) {
            return lastTodo.id + 1;
        }

        return 1;
    }
    BulletedList_Helper_Events_Helper_ReadTodos = (): any[] => {
        return this.state.todos;
    }
 
    ///////////////////////////////////////////////////////
    //Place Holders
    ///////////////////////////////////////////////////////
    PlaceHolder_Helper_Events_Helper_DisplayLoader = (): boolean => {
        return Boolean(this.state.loading);
    }
    PlaceHolder_Helper_Events_Helper_DisplayNotification = (): string => {
        return this.state.notification;
    }
    PlaceHolder_Helper_Events_Helper_SetDisplayNotification = (notification: string): void => {
        this.setState({
            notification: notification
        });

        setTimeout(() => {
            this.setState({
                notification: null
            });
        }, 2000)
    }

    ///////////////////////////////////////////////////////
    //Text Boxes
    ///////////////////////////////////////////////////////
    TextBox_Form_Events_OnChange_Todo = (inputData: string): void => {
        this.setState({
            newTodo: inputData
        });
    }
    TextBox_State_Events_OnStateChange_Todo = () : string => {
        return String(this.state.newTodo);
    }

    ///////////////////////////////////////////////////////
    //ReactJS Proprietary 
    ///////////////////////////////////////////////////////
    async componentDidMount()
    {
        const response = await axios.get(`${Global().APIMockUrl}/todos`);

        setTimeout(() => {
            this.setState({
                todos: response.data,
                loading: false
            })
        }, 1500)
    }

    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    render() {
        return (
            <div id="Data_FormsView_1_0_1_Standard_Div_1-1-1" className="container">
                <Header_1_2
                    Button_Helper_Events_Helper_IsTodoInUpdateMode={this.Button_Helper_Events_Helper_IsTodoInUpdateMode}
                    Button_Mouse_Events_OnClick_CreateTodo={this.Button_Mouse_Events_OnClick_CreateTodo}
                    Button_Mouse_Events_OnClick_UpdateTodoComplete={this.Button_Mouse_Events_OnClick_UpdateTodoComplete}
                    PlaceHolder_Helper_Events_Helper_DisplayNotification={this.PlaceHolder_Helper_Events_Helper_DisplayNotification}
                    TextBox_Form_Events_OnChange_Todo={this.TextBox_Form_Events_OnChange_Todo}
                    TextBox_State_Events_OnStateChange_Todo={this.TextBox_State_Events_OnStateChange_Todo}
                />

                <Body_1_3
                    Button_Helper_Events_Helper_IsTodoInUpdateMode={this.Button_Helper_Events_Helper_IsTodoInUpdateMode}
                    Button_Mouse_Events_OnClick_DeleteTodo={this.Button_Mouse_Events_OnClick_DeleteTodo}
                    Button_Mouse_Events_OnClick_UpdateTodoStart={this.Button_Mouse_Events_OnClick_UpdateTodoStart}
                    BulletedList_Helper_Events_Helper_ReadTodos={this.BulletedList_Helper_Events_Helper_ReadTodos}
                    PlaceHolder_Helper_Events_Helper_DisplayLoader={this.PlaceHolder_Helper_Events_Helper_DisplayLoader}
                />

                <Footer_1_4

                />            
            </div>
        )
    }
}

export default Container_1_1;
//END CONTAINER - 1-1



















//BEGIN HEADER - 1-2
interface IHeaderProps {
    Button_Mouse_Events_OnClick_CreateTodo: () => void,
    Button_Helper_Events_Helper_IsTodoInUpdateMode: () => boolean,
    Button_Mouse_Events_OnClick_UpdateTodoComplete: () => void,
    PlaceHolder_Helper_Events_Helper_DisplayNotification: () => string,
    TextBox_Form_Events_OnChange_Todo: ((inputData: string) => void),
    TextBox_State_Events_OnStateChange_Todo: () => string
}

const Header_1_2 = (props:IHeaderProps) => {
    //FORM EVENTS
    const TextBox_Form_Events_OnChange_Todo = (event: any) => {
        props.TextBox_Form_Events_OnChange_Todo(event.target.value);

    }

    //COMPONENT CONTENT
    return (
        <div id="Data_FormsView_1_0_1_Standard_Div_1-1-2" className="container">
            <div id="Data_FormsView_1_0_1_Standard_Div_1-1-2-1">
                <div id="Data_FormsView_1_0_1_Standard_Div_1-1-2-1-1">
                    <div id="Data_FormsView_1_0_1_Standard_Div_1-1-2-1-1-1-1">
                        <header className="App-header" id="Data_FormsView_1_0_1_Standard_Div_1-1-2-1-1-1-1-1">
                            <h1 className="App-title text-center" id="Data_FormsView_1_0_1_Standard_Div_1-1-2-1-1-1-1-2">Organize Your Life - My Todo List</h1>
                        </header>
                        <input
                            id="Data_FormsView_1_0_1_Standard_Div_1-1-2-1-1-1-1-3"

                            name="TextBox_Todo" type="text" className="my-2 form-control" placeholder="Add a new todo"

                            onChange={TextBox_Form_Events_OnChange_Todo}

                            value={props.TextBox_State_Events_OnStateChange_Todo()}
                        />

                        {
                            props.PlaceHolder_Helper_Events_Helper_DisplayNotification() &&
                            <div className="alert mt-3 alert-success" id="Data_FormsView_1_0_1_Standard_Div_1-1-2-1-1-1-1-4">
                                <p className="text-center" id="Data_FormsView_1_0_1_Standard_Div_1-1-2-1-1-1-1-5">{props.PlaceHolder_Helper_Events_Helper_DisplayNotification()}</p>
                            </div>
                        }

                        <button
                            id="Data_FormsView_1_0_1_Standard_Div_1-1-2-1-1-1-1-6"

                            onClick={() => { props.Button_Helper_Events_Helper_IsTodoInUpdateMode() ? props.Button_Mouse_Events_OnClick_UpdateTodoComplete() : props.Button_Mouse_Events_OnClick_CreateTodo() }}

                            className="btn btn-info mb-2 form-control"

                            disabled={props.TextBox_State_Events_OnStateChange_Todo().length < 5}>

                            {props.Button_Helper_Events_Helper_IsTodoInUpdateMode() ? 'Update todo' : 'Add todo'}

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
//END HEADER - 1-2























//BEGIN BODY - 1-3
interface IBodyProps {
    BulletedList_Helper_Events_Helper_ReadTodos: () => any[],
    Button_Helper_Events_Helper_IsTodoInUpdateMode: () => boolean,
    Button_Mouse_Events_OnClick_DeleteTodo: ((index: number) => void),
    Button_Mouse_Events_OnClick_UpdateTodoStart: ((index: number) => void),
    PlaceHolder_Helper_Events_Helper_DisplayLoader: () => boolean
}

const Body_1_3 = (props: IBodyProps) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return (
        <div id="Data_FormsView_1_0_1_Standard_Div_1-1-3" className="container">  
            <div id="Data_FormsView_1_0_1_Standard_Div_1-1-3-1">
                <div id="Data_FormsView_1_0_1_Standard_Div_1-1-3-1-1">
                    <div id="Data_FormsView_1_0_1_Standard_Div_1-1-3-1-1-1-1">
                        {
                            props.PlaceHolder_Helper_Events_Helper_DisplayLoader() &&
                            <img src="images/Web Design - Alien Loader, Web Development - 1.0.gif" alt="" id="Data_FormsView_1_0_1_Standard_Div_1-1-3-1-1-1-1-1" />
                        }

                        {
                            !props.Button_Helper_Events_Helper_IsTodoInUpdateMode() &&

                            <ul className="list-group" id="Data_FormsView_1_0_1_Standard_Div_1-1-3-1-1-1-1-2">
                                {props.BulletedList_Helper_Events_Helper_ReadTodos().map((item: any, index: number) => {
                                    return <li key={index} className="list-group-item" id="Data_FormsView_1_0_1_Standard_Div_1-1-3-1-1-1-1-3">

                                        <button onClick={() => { props.Button_Mouse_Events_OnClick_UpdateTodoStart(index) }} className="btn-sm mr-4 btn btn-info" id="Data_FormsView_1_0_1_Standard_Div_1-1-3-1-1-1-1-4">U</button>

                                        {item.name}

                                        <button onClick={() => { props.Button_Mouse_Events_OnClick_DeleteTodo(index) }} className="btn-sm ml-4 btn btn-danger" id="Data_FormsView_1_0_1_Standard_Div_1-1-3-1-1-1-1-5">X</button>

                                    </li>
                                })}
                            </ul>
                        }    
                    </div>
                </div>
            </div>                    
        </div>
    )
} 
//END BODY - 1-3
























//BEGIN FOOTER - 1-4
interface IFooterProps {
}

const Footer_1_4 = (props: IFooterProps) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return(
        <div id="Data_FormsView_1_0_1_Standard_Div_1-1-4" className="container">
            <div id="Data_FormsView_1_0_1_Standard_Div_1-1-4-1">
                <div id="Data_FormsView_1_0_1_Standard_Div_1-1-4-1-1">
                    <div id="Data_FormsView_1_0_1_Standard_Div_1-1-4-1-1-1-1">
                    </div>
                </div>
            </div>
        </div>
    )
}
//END FOOTER - 1-4