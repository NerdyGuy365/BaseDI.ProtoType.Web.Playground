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
    return (
        <div id="InternetAndBusinessesOnline_SitePromotion_1_0_1_Standard_Div_1-1-1">
            <Body_1_3 
                ApplicationName={props.ApplicationName} 
                NavigationLinks={props.NavigationLinks}
                RenderID={props.RenderID}               
                />
        </div>)
}

export default Container_1_1;
//END CONTAINER - 1-1










































//BEGIN BODY - 1-3
const Body_1_3 = (props: IGlobalBodyProps) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return (<BrowserRouter> 
        <div>       
                <ul>
                    {props.NavigationLinks != undefined && props.NavigationLinks.map((item: { name: string, link: string, renderID: string }, index: number) => {
                        return <li key={index}>
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                    })}
                </ul>
                {props.NavigationLinks != undefined && props.NavigationLinks.map((item: { name: string, link: string, renderID: string }, index: number) => {
                    return <Route key={index} exact path={item.link} render={() => <ScreenFactory ApplicationName={props.ApplicationName} NavigationLinks={props.NavigationLinks} RenderID={item.renderID} RouteID={props.RouteID} />} />
                })}
        </div>
        </BrowserRouter>)
}
//END BODY - 1-3






















