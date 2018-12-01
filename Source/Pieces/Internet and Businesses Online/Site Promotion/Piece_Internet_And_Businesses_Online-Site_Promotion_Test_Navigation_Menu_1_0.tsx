//IMPORT REACT STUFF
import * as React from 'react';
import { Link } from 'react-router-dom';

//IMPORT EXTRA STUFF

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { Global } from '../../../Global';

//BEGIN CONTAINER - 1-1
interface IContainerProps {
 }

class Container_1_1 extends React.Component<IContainerProps, any>{
    ///////////////////////////////////////////////////////
    //Class Setup
    ///////////////////////////////////////////////////////
    constructor(props: IContainerProps) {
        super(props);

        this.state = {
        }

        //WIRE EVENTS

        //SET DEFAULTS
    }  

    ///////////////////////////////////////////////////////
    //ReactJS Proprietary 
    ///////////////////////////////////////////////////////
    async componentDidMount() {
        //const response = await axios.get(`${Global().APIMockUrl}/todos`);

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
    render() {
        return (
            <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-1" className="container">
                <Header_1_2

                />

                <Body_1_3

                />

                <Footer_1_4

                />
            </div>
            )
    }
}

export default Container_1_1;
//END CONTAINER - 1-1



















//BEGIN HEADER - 1-2
interface IHeaderProps {

}

const Header_1_2 = (props: IHeaderProps) => {

    //COMPONENT CONTENT
    return (
        <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-2" className="container">
            <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-2-1">
                <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-2-1-1">
                    <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-2-1-1-1-1">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
//END HEADER - 1-2























//BEGIN BODY - 1-3
interface IBodyProps {
}

const Body_1_3 = (props: IBodyProps) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return (
        <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-3" className="container">
            <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-3-1">
                <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-3-1-1">
                    <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-3-1-1-1-1">
                        <table id="Navigation_Menu_1_0_1_Standard_Div_1-1-3-1-1-1-1-1" >
                            <tr id="Navigation_Menu_1_0_1_Standard_Div_1-1-3-1-1-1-1-2">
                                <td id="Navigation_Menu_1_0_1_Standard_Div_1-1-3-1-1-1-1-3" className="p-2">
                                    <Link to="/">Home</Link>
                                </td>
                                <td id="Navigation_Menu_1_0_1_Standard_Div_1-1-3-1-1-1-1-4">
                                    <Link to="/About">About Us</Link>
                                </td>
                            </tr>
                        </table>                      
                    </div>
                </div>
            </div>
        </div>
    )
}
//END BODY - 1-3
























//BEGIN FOOTER - 1-4
interface IFooterProps {
}

const Footer_1_4 = (props: IFooterProps) => {
    ///////////////////////////////////////////////////////
    //COMPONENT CONTENT
    ///////////////////////////////////////////////////////
    return (
        <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-4" className="container">
            <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-4-1">
                <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-4-1-1">
                    <div id="Navigation_Menu_1_0_1_Standard_Div_1-1-4-1-1-1-1">
                    </div>
                </div>
            </div>
        </div>
    )
}
//END FOOTER - 1-4