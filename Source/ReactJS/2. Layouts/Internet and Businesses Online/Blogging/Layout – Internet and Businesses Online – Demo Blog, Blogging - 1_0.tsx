//IMPORT REACT STUFF
import * as React from 'react';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import { default as ScreenFactory } from '../../../3. Screens/Computers and Technology/Programming/ScreenFactory';

//IMPORT EXTRA STUFF

//IMPORT APPLICATION STYLES
import { Container, Row, Col } from 'reactstrap';

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as Software_Programming_Helper_HandleBlogManagementState_1_0 } from '../../../8. Helpers/Internet and Businesses Online/Blogging/State – Internet and Businesses Online – Duplicate Blog, Blogging - 1_0';

//BEGIN CONTAINER - 1-1
const Container_1_1 = (props) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    const Main = withRouter((props2: any) => {
        return (
            <div about="Layout Container" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-1" className="container-fluid container-fluid-padding-extension-0">

                <Header_1_2
                    {...props}
                    {...props2} />

                <Body_1_3
                    {...props}
                    {...props2} />

                <Footer_1_4
                    {...props}
                    {...props2} />
            </div>
        )
    })

    return (<BrowserRouter>
        <Main />
    </BrowserRouter>)
}

export default Container_1_1;
//END CONTAINER - 1-1



















//BEGIN HEADER - 1-2
const Header_1_2 = (props) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    const propsValues: any = props;

    const stateManager: Software_Programming_Helper_HandleBlogManagementState_1_0 = props.StateManager;
    const navigationLinks: any = stateManager.stateStore.getState().navigationLinks;

    return (
        <div about="Layout Header Shelf" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-2" className="container-fluid container-fluid-padding-extension-0">

            <div about="Layout Header Row 1" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-2-1" className="row row-margin-extension-0 row-width-extension-100">

                <div about="Layout Header Row 1 - Column 1" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-2-1-1" className="row row-margin-extension-0 row-width-extension-100">

                    <div about="Layout Header Row 1 - Column 1 - Container" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-2-1-1-1-1" className="container-fluid container-fluid-padding-extension-0">

                        <div about="Layout Menu Shelf" id="Navigation_Menu_1_0_Layout_Standard_Div_1-1-3" className="container-fluid container-fluid-padding-extension-0 ">

                            <div about="Layout Menu Row 1" id="Navigation_Menu_1_0_Layout_Standard_Div_1-1-3-1" className="row row-margin-extension-0 row-width-extension-100">

                                {navigationLinks && navigationLinks != undefined && navigationLinks.length > 0 && navigationLinks.map((item: { name: string, link: string, renderID: string }, index: number) => {
                                    return <div about={`Layout Menu Column ${index + 1} - ${item.name} Link`} key={index + 1} id={"Navigation_Menu_1_0_Menu_Standard_Div_1-1-3-1-" + (index + 1)} className="col col-padding-extension-0">

                                        <div about={`Layout Menu Row 1 - Column ${index + 1} - Container - ${item.name} Link`} id={"Navigation_Menu_1_0_Menu_Standard_Div_1-1-3-1-" + (index + 1) + "-1"} className="standard_div_container">

                                            <Link about={`Layout Menu Row 1 - Column ${index + 1} - Ingredient - ${item.name} Link`} id={"Navigation_Menu_1_0_Menu_Standard_Div_1-1-3-1-" + (index + 1) + "-1-1"} to={item.link}>{item.name}</Link>

                                        </div>

                                    </div>
                                })
                                }

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>)
}
//END HEADER - 1-2























//BEGIN BODY - 1-3
const Body_1_3 = (props) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    const propsValues: any = props;

    const stateManager: Software_Programming_Helper_HandleBlogManagementState_1_0 = props.StateManager;
    let navigationLinks: any = stateManager.stateStore.getState().navigationLinks;

    return (
        <div about="Layout Body Shelf" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-3" className="container-fluid container-fluid-padding-extension-0">

            <div about="Layout Body Row 1" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-3-1" className="row row-margin-extension-0 row-width-extension-100">

                <div about="Layout Body Row 1 - Column 1" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-3-1-1" className="col col-padding-extension-0">

                    <div about="Layout Body Row 1 - Column 1 - Container" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-3-1-1-1-1" className="container-fluid container-fluid-padding-extension-0">
                        {
                            navigationLinks && navigationLinks != undefined && navigationLinks.length > 0 && navigationLinks.map((item: { name: string, link: string, renderID: string }, index: number) => {
                                return <Route key={index} exact path={item.link} render={(props) => <ScreenFactory RenderID={item.renderID} {...propsValues} />} />
                            })
                        }
                    </div>

                </div>

            </div>

        </div>)
}
//END BODY - 1-3
























//BEGIN FOOTER - 1-4
const Footer_1_4 = (props) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    const propsValues: any = props;

    const stateManager: Software_Programming_Helper_HandleBlogManagementState_1_0 = props.StateManager;
    const navigationLinks: any = stateManager.stateStore.getState().navigationLinks;

    return (
        <div about="Layout Footer Shelf" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-4" className="container-fluid container-fluid-padding-extension-0">

            <div about="Layout Footer Row 1" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-4-1" className="row row-margin-extension-0 row-width-extension-100">

                <div about="Layout Footer Row 1 - Column 1" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-4-1-1" className="col col-padding-extension-0">

                    <div about="Layout Footer Row 1 - Column 1 - Container" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-4-1-1-1" className="container-fluid container-fluid-padding-extension-0">

                        <p about="Layout Footer Row 1 - Column 1 - Container Ingredient" id="Standard_PlaceHolder_1_0_Layout_Standard_Div_1-1-4-1-1-1-1"></p>

                    </div>

                </div>

            </div>

        </div>
    )
}
//END FOOTER - 1-4





















