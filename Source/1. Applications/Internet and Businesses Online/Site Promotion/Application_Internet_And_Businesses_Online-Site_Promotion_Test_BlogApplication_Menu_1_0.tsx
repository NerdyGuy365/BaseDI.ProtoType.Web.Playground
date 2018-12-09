//IMPORT REACT STUFF
import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { default as ScreenFactory } from '../../../2. Screens/Internet and Businesses Online/Web Development/ScreenFactory';

//IMPORT EXTRA STUFF

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';

//BEGIN CONTAINER - 1-1
const Container_1_1 = (props: IGlobalContainerProps) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return (<BrowserRouter>
        <div about="Application Container" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-1">
            <Header_1_2
                ApplicationName={props.ApplicationName}
                NavigationLinks={props.NavigationLinks}
                RenderID={props.RenderID}
                RouteID={props.RouteID}
            />

            <Body_1_3
                ApplicationName={props.ApplicationName}
                NavigationLinks={props.NavigationLinks}
                RenderID={props.RenderID}
                RouteID={props.RouteID}
            />

            <Footer_1_4
                ApplicationName={props.ApplicationName}
                NavigationLinks={props.NavigationLinks}
                RenderID={props.RenderID}
                RouteID={props.RouteID}
            />            
        </div>
    </BrowserRouter>)
}

export default Container_1_1;
//END CONTAINER - 1-1



















//BEGIN HEADER - 1-2
const Header_1_2 = (props: IGlobalHeaderProps) => {
    //COMPONENT CONTENT
    return (
            <div about="Application Header Container" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-2" className="container-fluid">
                <div about="Application Header Row" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-2-1">
                    <div about="Application Header Column" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-2-1-1">
                        <div about="Application Header Column Container" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-2-1-1-1-1">

                            <div about="Menu Ingredient Container" id="Navigation_Menu_1_0_Application_Standard_Div_1-1-3" className="container-fluid mb-2">
                                <div about="Menu Ingredient Row" id="Navigation_Menu_1_0_Application_Standard_Div_1-1-3-1" className="row">
                                    {props.NavigationLinks != undefined && props.NavigationLinks.map((item: { name: string, link: string, renderID: string }, index: number) => {
                                    return <div about="Menu Ingredient Column" key={index} id={"Navigation_Menu_1_0_Menu_Standard_Div_1-1-3-1-" + (index + 1)} className="col-sm-1">
                                        <div about="Menu Ingredient Column Container" id={"Navigation_Menu_1_0_Menu_Standard_Div_1-1-3-1-" + (index + 1) + "-1"} className="navigation_menu_div">
                                            <Link about="Menu Ingredient" id={"Navigation_Menu_1_0_Menu_Standard_Div_1-1-3-1-" + (index + 1) + "-1-1"} to={item.link}>{item.name}</Link>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>)
}
//END HEADER - 1-2























//BEGIN BODY - 1-3
const Body_1_3 = (props: IGlobalBodyProps) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return (
        <div about="Application Body Container" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-3" className="container-fluid">
            <div about="Application Body Row" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-3-1">
                <div about="Application Body Column" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-3-1-1">
                    <div about="Application Body Column Container" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-3-1-1-1-1">
                        {props.NavigationLinks != undefined && props.NavigationLinks.map((item: { name: string, link: string, renderID: string }, index: number) => {
                            return <Route key={index} exact path={item.link} render={() => <ScreenFactory ApplicationName={props.ApplicationName} NavigationLinks={props.NavigationLinks} RenderID={item.renderID} RouteID={props.RouteID} />} />
                        })}
                    </div>
                </div>
            </div>
        </div>)
}
//END BODY - 1-3
























//BEGIN FOOTER - 1-4
const Footer_1_4 = (props: IGlobalFooterProps) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return (
        <div about="Application Footer Container" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-4" className="container-fluid">
            <div about="Application Footer Row" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-4-1" className="row">
                <div about="Application Footer Column" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-4-1-1" className="col">
                    <div about="Application Footer Column Container" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-4-1-1-1">

                        <p about="Test Ingredient Container" id="Standard_PlaceHolder_1_0_Application_Standard_Div_1-1-4-1-1-1-1"></p>

                    </div>
                </div>
            </div>
        </div>
    )
}
//END FOOTER - 1-4





















