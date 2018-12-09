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
        <div about="Home Container" id={"Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-1"}>
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

    //COMPONENT CONTENT
    return (
        <div about="Home Header" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-2" className="container-fluid">
            <div about="Home Header Row" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-2-1" className="row">
                <div about="Home Header Column" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-2-1-1" className="col">
                    <div about="Home Header Column Container" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-2-1-1-1">

                        <p about="Test Ingredient Container" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-2-1-1-1-1" className="standard_literal_paragraph_container">Home Template Header</p>

                    </div>
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
        <div about="Home Body" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-3" className="container-fluid">
            <div about="Home Body Row" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-3-1" className="row">
                <div about="Home Header Column" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-3-1-1" className="col">
                    <div about="Home Header Column Container" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-3-1-1-1">

                        <p about="Test Ingredient Container" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-3-1-1-1-1" className="standard_literal_paragraph_container">Home Template Header</p>

                    </div>
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
        <div about="Home Footer" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-4" className="container-fluid">
            <div about="Home Footer Row" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-4-1" className="row">
                <div about="Home Footer Column" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-4-1-1" className="col">
                    <div about="Home Header Column Container" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-4-1-1-1">

                        <p about="Test Ingredient Container" id="Standard_PlaceHolder_1_0_Home_Standard_Div_1-1-4-1-1-1-1" className="standard_literal_paragraph_container">Home Template Footer</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
//END FOOTER - 1-4