//IMPORT REACT STUFF
import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

//IMPORT EXTRA STUFF
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as ApplicationFactory, ApplicationNameEnum } from '../../../1. Applications/Internet and Businesses Online/Web Development/ApplicationFactory';
import { ScreenNameEnum } from '../../../2. Screens/Internet and Businesses Online/Web Development/ScreenFactory';

//BEGIN CONTAINER - 1-1
class Container_1_1 extends React.Component<IGlobalContainerProps, any> {
    ///////////////////////////////////////////////////////
    //Class Setup
    ///////////////////////////////////////////////////////
    constructor(props: IGlobalContainerProps)
    {
        super(props);

        this.state = { NavigationLinks: this.Software_Programming_Helper_HandleReadMockLinks() }

        this.stateStore = createStore(this.Software_Programming_Helper_HandleStateStore, composeWithDevTools(applyMiddleware()));

        //WIRE EVENTS

        //SET DEFAULTS        
        this.sitePromoter = ApplicationNameEnum.Application_Internet_And_Businesses_Online_Demo_Blog_Site_Promotion_1_0;
    }

    sitePromoter: string;
    stateStore:any; 

    ///////////////////////////////////////////////////////
    //State Helpers
    ///////////////////////////////////////////////////////
    Software_Programming_Helper_HandleStateStore = (oldState = {}, action) => {
        return []
    }

    ///////////////////////////////////////////////////////
    //Standalone Helpers
    ///////////////////////////////////////////////////////
    Software_Programming_Helper_HandleReadMockLinks = (): { name: string, link: string, renderID: string }[] => {
        let navigationLinks = [
            { name: "Home", link: "/", renderID: ScreenNameEnum.Screen_Internet_And_Businesses_Online_Demo_Blog_Home_Blogging_1_0 },
            { name: "About", link: "/About", renderID: ScreenNameEnum.Screen_Internet_And_Businesses_Online_Demo_Blog_About_Blogging_1_0 },
            { name: "Contact", link: "/Contact", renderID: ScreenNameEnum.Screen_Internet_And_Businesses_Online_Demo_Blog_Contact_Blogging_1_0 }
        ];

        return navigationLinks;
    }
    
    
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
        console.log(this.sitePromoter);
        return (<Provider store={this.stateStore}>
                    <ApplicationFactory
                        ApplicationName={this.sitePromoter}
                        NavigationLinks={this.state.NavigationLinks}
                     />            
                </Provider>)
    }
}

export default Container_1_1;
//END CONTAINER - 1-1












