//IMPORT REACT STUFF
import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//IMPORT EXTRA STUFF

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as ScreenFactory } from '../../../2. Screens/Internet and Businesses Online/Web Development/ScreenFactory';
import { default as Piece_Internet_And_Businesses_Online_Site_Promotion_Test_Navigation_Menu_1_0 } from '../../../4. Pieces/Internet and Businesses Online/Site Promotion/Piece_Internet_And_Businesses_Online-Site_Promotion_Test_Navigation_Menu_1_0'

//BEGIN CONTAINER - 1-1
class Container_1_1 extends React.Component<IGlobalContainerProps, any> {
    ///////////////////////////////////////////////////////
    //Class Setup
    ///////////////////////////////////////////////////////
    constructor(props: IGlobalContainerProps)
    {
        super(props);

        this.state = { NavigationLinks: this.Web_Development_Programming_Helper_ReadMockLinks() }

        //WIRE EVENTS

        //SET DEFAULTS        
        this.startUpScreen = "Screen_Internet_And_Businesses_Online-Blogging_Test_Blog_Home_1_0";
    }

    startUpScreen: string;

    ///////////////////////////////////////////////////////
    //Standalone Helpers
    ///////////////////////////////////////////////////////
    Web_Development_Programming_Helper_ReadMockLinks = (): { name: string, link: string, renderID: string }[] => {
        let navigationLinks = [
            { name: "Home", link: "/", renderID: "Screen_Internet_And_Businesses_Online-Blogging_Test_Blog_Home_1_0" },
            { name: "About", link: "/About", renderID: "Screen_Internet_And_Businesses_Online-Blogging_Test_Blog_About_1_0" },
            { name: "Contact", link: "/Contact", renderID: "Screen_Internet_And_Businesses_Online-Blogging_Test_Blog_Contact_1_0" }
        ];

        return navigationLinks;
    }

    ///////////////////////////////////////////////////////
    //ReactJS Proprietary 
    ///////////////////////////////////////////////////////
    async componentDidMount() {
        //const response = await axios.get(`${Global().APIMockUrl}/APIVERB`);

        //setTimeout(() => {
        //    this.setState({
        //        todos: response.data,
        //        loading: false
        //    })
        //}, 1500)
    }

    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    render()
    {
        return (<Header_1_2
                    ApplicationName={this.props.ApplicationName}
                    NavigationLinks={this.state.NavigationLinks}
                    RouteID={this.props.RouteID} />)
    }
}

export default Container_1_1;
//END CONTAINER - 1-1



















//BEGIN HEADER - 1-2
const Header_1_2 = (props: IGlobalHeaderProps) => {
    //COMPONENT CONTENT
    return (<Piece_Internet_And_Businesses_Online_Site_Promotion_Test_Navigation_Menu_1_0
                ApplicationName={props.ApplicationName} 
                NavigationLinks={props.NavigationLinks}
                RenderID={props.RenderID}
           />)
}
//END HEADER - 1-2













