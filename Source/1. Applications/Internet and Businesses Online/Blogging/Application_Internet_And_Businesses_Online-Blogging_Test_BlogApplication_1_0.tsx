//IMPORT REACT STUFF
import * as React from 'react';
import { BrowserRouter, Route, Link, LinkProps } from 'react-router-dom';

//IMPORT EXTRA STUFF

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as ScreenFactory, ScreenDefaults } from '../../../2. Screens/Internet and Businesses Online/Web Development/ScreenFactory';

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
        return (<BrowserRouter >                
            <div>       
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                </ul>                
        
                <Route exact path="/" render={() => <ScreenFactory ApplicationName={this.props.ApplicationName} NavigationLinks={this.state.NavigationLinks} RenderID="Screen_Internet_And_Businesses_Online-Blogging_Test_Blog_Home_1_0" RouteID={this.props.RouteID} />} />
                <Route path="/About" render={() => <ScreenFactory ApplicationName={this.props.ApplicationName} NavigationLinks={this.state.NavigationLinks} RenderID="Screen_Internet_And_Businesses_Online-Blogging_Test_Blog_About_1_0" RouteID={this.props.RouteID} />} />

                </div>
              </BrowserRouter>)
    }
}

export default Container_1_1;
//END CONTAINER - 1-1













