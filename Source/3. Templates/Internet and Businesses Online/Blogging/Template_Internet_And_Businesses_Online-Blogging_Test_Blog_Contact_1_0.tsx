//IMPORT REACT STUFF
import * as React from 'react';

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
        <div about="Contact Container" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-1">
            <Header_1_2
            />

            <Body_1_3
            />

            <Footer_1_4
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
        <div about="Contact Header" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-2" className="container-fluid">
            <div about="Contact Header Row" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-2-1" className="row">
                <div about="Contact Header Column" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-2-1-1" className="col">
                    <div about="Contact Header Column Container" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-2-1-1-1">

                        <p about="Test Ingredient Container" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-2-1-1-1-1" className="standard_literal_paragraph">Contact Template Header</p>

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
        <div about="Contact Body" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-3" className="container-fluid">
            <div about="Contact Body Row" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-3-1" className="row">
                <div about="Contact Header Column" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-3-1-1" className="col">
                    <div about="Contact Header Column Container" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-3-1-1-1">

                        <p about="Test Ingredient Container" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-3-1-1-1-1">Contact Template Header</p>

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
        <div about="Contact Footer" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-4" className="container-fluid">
            <div about="Contact Footer Row" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-4-1" className="row">
                <div about="Contact Footer Column" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-4-1-1" className="col">
                    <div about="Contact Header Column Container" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-4-1-1-1">

                        <p about="Test Ingredient Container" id="Standard_PlaceHolder_1_0_Contact_Standard_Div_1-1-4-1-1-1-1">Contact Template Footer</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
//END FOOTER - 1-4