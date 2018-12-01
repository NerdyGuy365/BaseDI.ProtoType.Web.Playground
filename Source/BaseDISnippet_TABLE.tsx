//IMPORT REACT STUFF
import * as React from 'react';
import { Link } from 'react-router-dom';

//IMPORT EXTRA STUFF

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
//import { Global } from '../../../Global';

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
    render() {
        return (
            <table id="Bill_Of_Material_Category_1_0_1_Standard_Table_1-1-1" className="table">
                <Header_1_2

                />

                <Body_1_3

                />

                <Footer_1_4

                />
            </table>
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
        <thead id="Bill_Of_Material_Category_1_0_1_Standard_TableHeader_1-1-2" className="table_header">
            <tr id="Bill_Of_Material_Category_1_0_1_Standard_TableRow_1-1-2-1" className="table_header_row">
                <th id="Bill_Of_Material_Category_1_0_1_Standard_TableColumn_1-1-2-1-1" className="table_header_column">
                    <div id="Bill_Of_Material_Category_1_0_1_Standard_Div_1-1-2-1-1-1-1" className="table_header_column_container">

                    </div>
                </th>
            </tr>
        </thead>
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
        <tbody id="Bill_Of_Material_Category_1_0_1_Standard_TableBody_1-1-3" className="table_body">
            <tr id="Bill_Of_Material_Category_1_0_1_Standard_TableRow_1-1-3-1" className="table_body_row">
                <td id="Bill_Of_Material_Category_1_0_1_Standard_TableColumn_1-1-3-1-1" className="table_body_column">
                    <div id="Bill_Of_Material_Category_1_0_1_Standard_Div_1-1-3-1-1-1-1" className="table_body_column_container">

                    </div>
                </td>
            </tr>
        </tbody>
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
        <tfoot id="Bill_Of_Material_Category_1_0_1_Standard_TableFooter_1-1-4" className="table_footer">
            <tr id="Bill_Of_Material_Category_1_0_1_Standard_TableRow_1-1-4-1" className="table_footer_row">
                <td id="Bill_Of_Material_Category_1_0_1_Standard_TableColumn_1-1-4-1-1" className="table_footer_column">
                    <div id="Bill_Of_Material_Category_1_0_1_Standard_Div_1-1-4-1-1-1-1" className="table_footer_column_container">

                    </div>
                </td>
            </tr>
        </tfoot>
    )
}
//END FOOTER - 1-4