//IMPORT REACT STUFF
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//IMPORT EXTRA STUFF
import "babel-polyfill"

//IMPORT APPLICATION STYLES
import './Styles/Internet and Businesses Online/Web Design/Web Design - Bootstrap_Min, Web Development - 4.1.3.css';

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { default as Piece_Self_Improvement_Organizing_Todo_Management_1_0 } from './Pieces/Self Improvement/Organizing/Piece_Self_Improvement-Organizing_Todo_Management_1_0';
import { default as Piece_Internet_And_Businesses_Online_Site_Promotion_Test_Navigation_Menu_1_0 } from './Pieces/Internet and Businesses Online/Site Promotion/Piece_Internet_And_Businesses_Online-Site_Promotion_Test_Navigation_Menu_1_0';
import { Global } from './Global';

//BEGIN APPLICATION STARTUP - 0-0
interface IApplicationStartUpProps {

}

const ApplicationStartUp = (props: IApplicationStartUpProps) =>
{    
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return (        
        <Piece_Self_Improvement_Organizing_Todo_Management_1_0 DomainName={Global().DomainName} />
    ) 
}

export {
    ApplicationStartUp
}
//END APPLICATION STARTUP - 0-0

const About = () => {
    return (<h1>About Us</h1>)
}

//BEGIN RENDERING APPLICATION
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Piece_Internet_And_Businesses_Online_Site_Promotion_Test_Navigation_Menu_1_0 />
            <Route exact path="/" component={ApplicationStartUp} />
            <Route path="/About" component={About} />
       </div>
    </BrowserRouter>, document.getElementById('app'))

//END RENDERING APPLICATION


