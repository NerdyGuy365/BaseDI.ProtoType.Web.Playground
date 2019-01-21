//IMPORT REACT STUFF
import * as React from 'react';

//IMPORT EXTRA STUFF

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as PieceFactory } from '../../../5. Pieces/Computers and Technology/Programming/PieceFactory';

//BEGIN CONTAINER - 1-1
const Container_1_1 = (props: any) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    const templateKey: string = "About";

    return (
        <div about={`${templateKey} Container Shelf`} id={`Standard_PlaceHolder_1_0_${templateKey}_Standard_Div_1-1-1`} className="container-fluid shelf-show-grid-border container-fluid-padding-extension-0">

            <Header_1_2
                {...props}
                TemplateKey={templateKey} />

            <Body_1_3
                {...props}
                TemplateKey={templateKey} />

            <Footer_1_4
                {...props}
                TemplateKey={templateKey} />

        </div>)
}

export default Container_1_1;
//END CONTAINER - 1-1



















//BEGIN HEADER - 1-2
const Header_1_2 = (props: any) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    const pieceMenuRenderID = "";

    //COMPONENT CONTENT
    return (
        <div about={`${props.TemplateKey} Header Shelf`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-2`} className="container-fluid container-fluid-padding-extension-0 basedi-shelf-show-grid-border">

            <div about={`${props.TemplateKey} Header Row 1`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-2-1`} className="row row-margin-extension-0 row-width-extension-100 basedi-row-show-grid-border">

                <div about={`${props.TemplateKey} Header Row 1 - Column 1`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-2-1-1`} className="col col-padding-extension-0 basedi-column-show-grid-border">

                    <div about={`${props.TemplateKey} Header Row 1 - Column 1 - Container`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-2-1-1-1`} className="container-fluid container-fluid-padding-extension-0 basedi-container-show-grid-border">

                        <p about="Test Ingredient Container" id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-2-1-1-1-1`} className="standard_literal_paragraph_container">About Template Header</p>

                    </div>

                </div>

            </div>

        </div>
    )
}
//END HEADER - 1-2























//BEGIN BODY - 1-3
const Body_1_3 = (props: any) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    const pieceMenuRenderID = "";

    //COMPONENT CONTENT
    return (
        <div about={`${props.TemplateKey} Body Shelf`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-3`} className="container-fluid container-fluid-padding-extension-0 basedi-shelf-show-grid-border">

            <div about={`${props.TemplateKey} Body Row 1`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-3-1`} className="row row-margin-extension-0 row-width-extension-100 basedi-row-show-grid-border">

                <div about={`${props.TemplateKey} Body Row 1 - Column 1`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-3-1-1`} className="col col-padding-extension-0 basedi-column-show-grid-border">

                    <div about={`${props.TemplateKey} Body Row 1 - Column 1 - Container`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-3-1-1-1`} className="container-fluid container-fluid-padding-extension-0 basedi-container-show-grid-border">

                        <p about="Test Ingredient Container" id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-3-1-1-1-1`} className="standard_literal_paragraph_container">About Template Body</p>

                    </div>

                </div>

            </div>

        </div>
    )
}
//END BODY - 1-3
























//BEGIN FOOTER - 1-4
const Footer_1_4 = (props: any) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    const pieceMenuRenderID = "";

    //COMPONENT CONTENT
    return (
        <div about={`${props.TemplateKey} Footer Shelf`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-4`} className="container-fluid container-fluid-padding-extension-0 basedi-shelf-show-grid-border">

            <div about={`${props.TemplateKey} Footer Row 1`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-4-1`} className="row row-margin-extension-0 row-width-extension-100 basedi-row-show-grid-border">

                <div about={`${props.TemplateKey} Footer Row 1 - Column 1`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-4-1-1`} className="col col-padding-extension-0 basedi-column-show-grid-border">

                    <div about={`${props.TemplateKey} Footer Row 1 - Column 1 - Container`} id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-4-1-1-1`} className="container-fluid container-fluid-padding-extension-0 basedi-container-show-grid-border">

                        <p about="Test Ingredient Container" id={`Standard_PlaceHolder_1_0_${props.TemplateKey}_Standard_Div_1-1-4-1-1-1-1`} className="standard_literal_paragraph_container">About Template Footer</p>
                        
                    </div>

                </div>

            </div>

        </div>
    )
}
//END FOOTER - 1-4