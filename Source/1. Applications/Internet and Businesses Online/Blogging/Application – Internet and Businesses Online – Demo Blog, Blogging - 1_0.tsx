//IMPORT REACT STUFF
import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//IMPORT EXTRA STUFF

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as ApplicationFactory, ApplicationNameEnum } from '../../../1. Applications/Internet and Businesses Online/Web Development/ApplicationFactory';
import { ScreenNameEnum } from '../../../2. Screens/Internet and Businesses Online/Web Development/ScreenFactory';

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
        this.startUpComponent = ApplicationNameEnum.Application_Internet_And_Businesses_Online_Demo_Blog_Web_Design_1_0;
    }

    startUpComponent: string;

    ///////////////////////////////////////////////////////
    //Standalone Helpers
    ///////////////////////////////////////////////////////
    Web_Development_Programming_Helper_ReadMockLinks = (): { name: string, link: string, renderID: string }[] => {
        let navigationLinks = [
            { name: "Home", link: "/", renderID: ScreenNameEnum.Screen_Internet_And_Businesses_Online_Demo_Blog_Home_Blogging_1_0 },
            { name: "About", link: "/About", renderID: ScreenNameEnum.Screen_Internet_And_Businesses_Online_Demo_Blog_About_Blogging_1_0 },
            { name: "Contact", link: "/Contact", renderID: ScreenNameEnum.Screen_Internet_And_Businesses_Online_Demo_Blog_Contact_Blogging_1_0 }
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
        return (<ApplicationFactory
                    ApplicationName={this.startUpComponent}
                    NavigationLinks={this.state.NavigationLinks}
                    />)
    }
}

export default Container_1_1;
//END CONTAINER - 1-1












