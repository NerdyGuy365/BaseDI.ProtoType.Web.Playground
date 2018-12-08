//IMPORT REACT STUFF
import * as React from 'react';

//IMPORT EXTRA STUFF

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as PieceFactory } from '../../../4. Pieces/Internet and Businesses Online/Web Development/PieceFactory';

//BEGIN CONTAINER - 1-1
const Container_1_1 = (props: IGlobalContainerProps) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return (
        <div id="InternetAndBusinessesOnline_Blogging_1_0_1_Standard_Div_1-1-1">
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
        </div>)
}

export default Container_1_1;
//END CONTAINER - 1-1



















//BEGIN HEADER - 1-2
const Header_1_2 = (props: IGlobalHeaderProps) => {
    const pieceMenuRenderID = "Piece_Internet_And_Businesses_Online-Site_Promotion_Test_Navigation_Menu_1_0";

    console.log("Template Called");
    //COMPONENT CONTENT
    return (
        <div id="InternetAndBusinessesOnline_Blogging_1_0_1_Standard_Div_1-1-2" className="container-fluid">
            <div id="InternetAndBusinessesOnline_Blogging_1_0_1_Standard_Div_1-1-2-1" className="row">
                <div id="InternetAndBusinessesOnline_Blogging_1_0_1_Standard_Div_1-1-2-1-1" className="col">
     
                </div>
            </div>
        </div>
    )
}
//END HEADER - 1-2























//BEGIN BODY - 1-3
const Body_1_3 = (props: IGlobalBodyProps) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return (
        <div id="InternetAndBusinessesOnline_Blogging_1_0_1_Standard_Div_1-1-3" className="container-fluid">
            <div id="InternetAndBusinessesOnline_Blogging_1_0_1_Standard_Div_1-1-3-1" className="row">
                <div id="InternetAndBusinessesOnline_Blogging_1_0_1_Standard_Div_1-1-3-1-1" className="col">
                    <p>Home Template Body</p>
                </div>
            </div>
        </div>
    )
}
//END BODY - 1-3
























//BEGIN FOOTER - 1-4
const Footer_1_4 = (props: IGlobalFooterProps) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return (
        <div id="InternetAndBusinessesOnline_Blogging_1_0_1_Standard_Div_1-1-4" className="container-fluid">
            <div id="InternetAndBusinessesOnline_Blogging_1_0_1_Standard_Div_1-1-4-1" className="row">
                <div id="InternetAndBusinessesOnline_Blogging_1_0_1_Standard_Div_1-1-4-1-1" className="col">
                    <p>Home Template Footer</p>
                </div>
            </div>
        </div>
    )
}
//END FOOTER - 1-4