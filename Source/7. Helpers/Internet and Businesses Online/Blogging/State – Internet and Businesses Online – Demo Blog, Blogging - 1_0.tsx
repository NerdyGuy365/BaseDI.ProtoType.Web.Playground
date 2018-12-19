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
import { ScreenNameEnum } from '../../../2. Screens/Computers and Technology/Programming/ScreenFactory';

//IMPORT STATE HELPERS
import { default as Software_Programming_Helper_HandleArticleManagement_1_0 } from '../../../7. Helpers/Internet and Businesses Online/Blogging/Service – Internet and Businesses Online - Article Management, Blogging – 1_0';

//SET TARGET MARKET INFORMATION
const marketMainCategory = "Internet and Businesses Online";
const marketNicheCategory = "Blogging";

//BEGIN STATE
class Software_Programming_Helper_HandleBlogManagementState_1_0
{
    ///////////////////////////////////////////////////////
    //Class Setup
    ///////////////////////////////////////////////////////
    constructor(props: IGlobalContainerProps) {
        this.initialState = this.Software_Programming_Helper_HandleReadMockDefaultState;

        this.stateStore = createStore(
            this.Software_Programming_Helper_HandleStateStore,
            this.initialState,
            composeWithDevTools(applyMiddleware()));

        //WIRE EVENTS
        this.ArticleService = new Software_Programming_Helper_HandleArticleManagement_1_0();

        //SET DEFAULTS
    }

    private initialState: any;
    public stateStore: any;

    ///////////////////////////////////////////////////////
    //Service Helpers
    ///////////////////////////////////////////////////////
    private ArticleService:Software_Programming_Helper_HandleArticleManagement_1_0;

    ///////////////////////////////////////////////////////
    //State Handler Helpers
    ///////////////////////////////////////////////////////
    private Software_Programming_Helper_HandleStateStore = (oldState, action) => {
        if (action.type == "navigationLinks") {
            return oldState
        }
        return oldState;
    }
    public static Software_Programming_Helper_HandleStateConnection = state => {
        return {
            navigationLinks: state.navigationLinks
        };
    };

    ///////////////////////////////////////////////////////
    //Standalone Helpers
    ///////////////////////////////////////////////////////
    public Software_Programming_Helper_HandleReadMockDefaultState =
    {
        navigationLinks: [
            { name: "Home", link: "/", renderID: ScreenNameEnum.Screen_Internet_And_Businesses_Online_Demo_Blog_Home_Blogging_1_0 },
            { name: "About", link: "/About", renderID: ScreenNameEnum.Screen_Internet_And_Businesses_Online_Demo_Blog_About_Blogging_1_0 },
            { name: "Contact", link: "/Contact", renderID: ScreenNameEnum.Screen_Internet_And_Businesses_Online_Demo_Blog_Contact_Blogging_1_0 }
        ]
    }
    public Software_Programming_Helper_HandleStateDispatch(state: any) 
    {
        this.stateStore.dispatch(state);
    }
}

export default Software_Programming_Helper_HandleBlogManagementState_1_0
//END STATE
