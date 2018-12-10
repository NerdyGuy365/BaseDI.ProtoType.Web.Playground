//IMPORT REACT STUFF
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//IMPORT EXTRA STUFF
import "babel-polyfill"

//IMPORT APPLICATION STYLES
import './5. Styles/Internet and Businesses Online/Web Design/Web Design - Bootstrap_Min, Web Development - 4.1.3.css';

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { default as ApplicationFactory } from './1. Applications/Internet and Businesses Online/Web Development/ApplicationFactory';
import { IGlobalContainerProps } from './Global';

//APPLICATION NAME
const applicationName: string = "Application_Internet_And_Businesses_Online-Blogging_Test_BlogApplication_1_0";

//BEGIN APPLICATION STARTUP - 0-0
const ApplicationStartUp = (props: IGlobalContainerProps) =>
{    
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return (ApplicationFactory(props)) 
}

export {
    ApplicationStartUp
}
//END APPLICATION STARTUP - 0-0

//BEGIN RENDERING APPLICATION
ReactDOM.render(<ApplicationStartUp ApplicationName={applicationName} />, document.getElementById('app'))

//END RENDERING APPLICATION


