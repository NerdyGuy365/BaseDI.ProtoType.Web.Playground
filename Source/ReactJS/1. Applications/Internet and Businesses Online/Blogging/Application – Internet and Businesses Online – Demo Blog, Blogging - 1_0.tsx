//IMPORT REACT STUFF
import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

//IMPORT EXTRA STUFF
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as LayoutFactory, LayoutNameEnum } from '../../../2. Layouts/Computers and Technology/Programming/LayoutFactory';
import { default as Software_Programming_Helper_HandleBlogManagementState_1_0 } from '../../../8. Helpers/Internet and Businesses Online/Blogging/State – Internet and Businesses Online – Duplicate Blog, Blogging - 1_0';

//BEGIN CONTAINER - 1-1
class Container_1_1 extends React.Component<any, any>
{
    constructor(props: any)
    {
        super(props);

        this.stateManager = new Software_Programming_Helper_HandleBlogManagementState_1_0(props); 
    } 
     
    stateManager: Software_Programming_Helper_HandleBlogManagementState_1_0;

    async componentDidMount()
    {
        //const response = await axios.get(`${Global().APIMockUrl}/APIVERB`);

        //setTimeout(() => {
        //    this.setState({
        //        todos: response.data,
        //        loading: false
        //    })
        //}, 1500)
    }

    render()
    {
        return (<Provider store={this.stateManager.stateStore}>
                    <Container_1_3 {...this.props} StateManager={this.stateManager} />
                </Provider>)
    }
}

export default Container_1_1;
//END CONTAINER - 1-1

//BEGIN CONTAINER - 1-2
class Container_1_2 extends React.Component<any, any> {
    ///////////////////////////////////////////////////////
    //Class Setup
    ///////////////////////////////////////////////////////
    constructor(props: any)
    {
        super(props);

        this.state = { navigationLinks: [] }

        //WIRE EVENTS

        //SET DEFAULTS        
        this.applicationLayoutName = LayoutNameEnum.Layout_Internet_And_Businesses_Online_Duplicate_Blog_Blogging_1_0;
     }

    applicationLayoutName: string;

    ///////////////////////////////////////////////////////
    //Standalone Helpers
    ///////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////
    //ReactJS Proprietary 
    ///////////////////////////////////////////////////////
    async componentDidMount() 
    {         
        //const response = await axios.get(`${Global().APIMockUrl}/APIVERB`);

        //setTimeout(() => {
        //    this.setState({
        //        todos: response.data,
        //        loading: false
        //    })
        //}, 1500)
    }

    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    render()
    {

        return (<LayoutFactory
                    {...this.props}
                    LayoutName={this.applicationLayoutName} />)
    }
}
//END CONTAINER - 1-2

//BEGIN CONTAINER - 1-3
const Container_1_3 = (props: any) => {
    const ConnectionToPropsContainer = connect(props.StateManager.Software_Programming_Helper_HandleStateToPropsConnection, props.StateManager.Software_Programming_Helper_HandleStateDispatchToPropsConnection)(Container_1_2);

    return (<ConnectionToPropsContainer {...props} />)
}

//END CONTAINER - 1-3












