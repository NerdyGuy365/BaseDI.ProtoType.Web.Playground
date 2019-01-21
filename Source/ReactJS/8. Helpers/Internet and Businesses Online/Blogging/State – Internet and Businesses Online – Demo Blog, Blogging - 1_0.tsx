//IMPORT REACT STUFF
import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

//IMPORT EXTRA STUFF
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { ScreenNameEnum } from '../../../3. Screens/Computers and Technology/Programming/ScreenFactory';

//IMPORT STATE HELPERS
import { default as Software_Programming_Helper_HandleArticleManagement_1_0 } from '../../../8. Helpers/Internet and Businesses Online/Blogging/Service – Internet and Businesses Online - Article Management, Blogging – 1_0';

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
            this.Software_Programming_Helper_HandleStateChangesReducer,
            this.initialState,
            composeWithDevTools(applyMiddleware(thunk)));

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

    //Make sure we have a place to react to any state changes to our application.
    private Software_Programming_Helper_HandleStateChangesReducer = (oldState, action) => {  
        console.log(action.payload);

        if (action.type == "navigationLinks")
        {         
            return ({
                navigationLinks: action.payload
            })
        }
 
        return oldState;
    }

    //Make sure entire application can see state through props.
    public Software_Programming_Helper_HandleStateToPropsConnection = state => {
        return {
            navigationLinks: state.navigationLinks
        };
    };

    //Make sure entire application can access dispatch changes to state through props.
    public Software_Programming_Helper_HandleStateDispatchToPropsConnection = dispatch => ({
        getNavigationLinks: () => {
            //dispatch(this.Software_Programming_Helper_HandleStateDispatchToPropsConnectionActionFactory())
        }  
    });
    private Software_Programming_Helper_HandleStateDispatchToPropsConnectionActionFactory(actionName:string, payload: any = null) : any {
        const getNavigationLinks = {
            type: "navigationLinks",
            payload: payload
        }

        return getNavigationLinks;
    }     

    ///////////////////////////////////////////////////////
    //Standalone Helpers
    ///////////////////////////////////////////////////////
    public Software_Programming_Helper_HandleReadMockDefaultState =
    {
        navigationLinks: [
            { name: "Home", link: "/", renderID: ScreenNameEnum.Screen_Internet_And_Businesses_Online_Duplicate_Blog_Home_Blogging_1_0 },
            { name: "About", link: "/About", renderID: ScreenNameEnum.Screen_Internet_And_Businesses_Online_Duplicate_Blog_About_Blogging_1_0 },
            { name: "Contact", link: "/Contact", renderID: ScreenNameEnum.Screen_Internet_And_Businesses_Online_Duplicate_Blog_Contact_Blogging_1_0 }
        ]
    }
    public Software_Programming_Helper_HandleStateDispatch = {
        getNavigationLinks: (payload: any = null) => {
            this.stateStore.dispatch(this.Software_Programming_Helper_HandleStateDispatchToPropsConnectionActionFactory("getNavigationLinks", payload))
        }  
    }
}

export default Software_Programming_Helper_HandleBlogManagementState_1_0
//END STATE
