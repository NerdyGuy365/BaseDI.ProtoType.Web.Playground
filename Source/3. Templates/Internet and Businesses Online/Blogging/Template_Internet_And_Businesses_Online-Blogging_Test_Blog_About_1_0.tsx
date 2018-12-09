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
    const templateKey:string = "About";

    return (
        <div about={`${templateKey} Container`} id={`Standard_PlaceHolder_1_0_${templateKey}_Standard_Div_1-1-1`}>
            <Header_1_2 {...props} TemplateKey={templateKey} />

            <Body_1_3 {...props} TemplateKey={templateKey} />

            <Footer_1_4 {...props} TemplateKey={templateKey} />
        </div>)
}

export default Container_1_1;
//END CONTAINER - 1-1



















//BEGIN HEADER - 1-2
const Header_1_2 = (props: IGlobalHeaderProps) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    const pieceMenuRenderID = "";

    //COMPONENT CONTENT
    return (
        <div about={`${props.TemplateKey} Header`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-2`} className="container-fluid">
            <div about={`${props.TemplateKey} Header Row`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-2-1`} className="row">
                <div about={`${props.TemplateKey} Header Column`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-2-1-1`} className="col">
                    <div about={`${props.TemplateKey} Header Column Container`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-2-1-1-1`}>

                        <p about="Test Ingredient Container" id="Standard_PlaceHolder_1_0_About_Standard_Div_1-1-2-1-1-1-1" className="standard_literal_paragraph_container">About Template Header</p>

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
    const pieceMenuRenderID = "";

    //COMPONENT CONTENT
    return (
        <div about={`${props.TemplateKey} Body`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-3`} className="container-fluid">
            <div about={`${props.TemplateKey} Body Row`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-3-1`} className="row">
                <div about={`${props.TemplateKey} Body Column`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-3-1-1`} className="col">
                    <div about={`${props.TemplateKey} Body Column Container`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-3-1-1-1`}>

                        <p about="Test Ingredient Container" id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-3-1-1-1-1`} className="standard_literal_paragraph_container">About Template Body</p>

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
    const pieceMenuRenderID = "";

    //COMPONENT CONTENT
    return (
        <div about={`${props.TemplateKey} Footer`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-4`} className="container-fluid">
            <div about={`${props.TemplateKey} Footer Row`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-4-1`} className="row">
                <div about={`${props.TemplateKey} Footer Column`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-4-1-1`} className="col">
                    <div about={`${props.TemplateKey} Footer Column Container`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-4-1-1-1`}>

                        <p about="Test Ingredient Container" id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-4-1-1-1-1`} className="standard_literal_paragraph_container">About Template Footer</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
//END FOOTER - 1-4