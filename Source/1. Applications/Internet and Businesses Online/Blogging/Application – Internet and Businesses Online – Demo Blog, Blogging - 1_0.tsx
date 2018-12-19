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
import { default as ApplicationFactory, ApplicationNameEnum } from '../../../1. Applications/Computers and Technology/Programming/ApplicationFactory';
import { ScreenNameEnum } from '../../../2. Screens/Computers and Technology/Programming/ScreenFactory';
import { default as Software_Programming_Helper_HandleBlogManagementState_1_0 } from '../../../7. Helpers/Internet and Businesses Online/Blogging/State – Internet and Businesses Online – Demo Blog, Blogging - 1_0';

//BEGIN CONTAINER - 1-1
class Container_1_1 extends React.Component<IGlobalContainerProps, any>
{
    constructor(props: IGlobalContainerProps)
    {
        super(props);

        this.stateManager = new Software_Programming_Helper_HandleBlogManagementState_1_0(props); 
    } 
     
    stateManager: Software_Programming_Helper_HandleBlogManagementState_1_0;

    async componentDidMount()
    {
        this.stateManager.Software_Programming_Helper_HandleStateDispatch({
            type: 'navigationLinks'
        });

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
                    <Container_1_3 {...this.props} />
                </Provider>)
    }
}

export default Container_1_1;
//END CONTAINER - 1-1

//BEGIN CONTAINER - 1-2
class Container_1_2 extends React.Component<IGlobalContainerProps, any> {
    ///////////////////////////////////////////////////////
    //Class Setup
    ///////////////////////////////////////////////////////
    constructor(props: IGlobalContainerProps)
    {
        super(props);

        this.state = { navigationLinks: [] }

        //WIRE EVENTS

        //SET DEFAULTS        
        this.sitePromoter = ApplicationNameEnum.Application_Internet_And_Businesses_Online_Demo_Blog_Site_Promotion_1_0;
     }

    sitePromoter: string;

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

        return (<ApplicationFactory
                    {...this.props}
                    ApplicationName={this.sitePromoter} />)
    }
}
//END CONTAINER - 1-2

//BEGIN CONTAINER - 1-3
const Container_1_3 = connect(Software_Programming_Helper_HandleBlogManagementState_1_0.Software_Programming_Helper_HandleStateConnection)(Container_1_2)
//END CONTAINER - 1-3












