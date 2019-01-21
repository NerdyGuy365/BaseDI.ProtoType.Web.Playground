//IMPORT REACT STUFF
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//IMPORT EXTRA STUFF
import "babel-polyfill"

//IMPORT APPLICATION STYLES
import '../Shared/6. Styles/Internet and Businesses Online/Web Design/Style _ Internet and Businesses Online _ Bootstrap, Web Design _ 4_1_3.css';
import '../Shared/6. Styles/Internet and Businesses Online/Web Design/Style _ Internet and Businesses Online _ Bootstrap Extensions, Web Design _ 4_1_3.css';
import '../Shared/6. Styles/Internet and Businesses Online/Web Design/Style _ Internet and Businesses Online _ BaseDI Extensions, Web Design _ 1_0.css';

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { default as ApplicationFactory, ApplicationNameEnum } from './1. Applications/Computers and Technology/Programming/ApplicationFactory';
import { IGlobalContainerProps } from './Global';

//APPLICATION NAME
const applicationName: string = ApplicationNameEnum.Application_Internet_And_Businesses_Online_Duplicate_Blog_Blogging_1_0;

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


