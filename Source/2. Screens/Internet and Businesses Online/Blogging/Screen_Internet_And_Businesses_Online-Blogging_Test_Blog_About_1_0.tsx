//IMPORT REACT STUFF
import * as React from 'react';

//IMPORT EXTRA STUFF

//IMPORT SCREEN SPECIFIC STYLES

//IMPORT SCREEN SPECIFIC CONTENT

//IMPORT SCREEN SPECIFIC COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import TemplateFactory from '../../../3. Templates/Internet and Businesses Online/Web Development/TemplateFactory';

//BEGIN CONTAINER - 1-1
class Container_1_1 extends React.Component<IGlobalContainerProps, any>{
    ///////////////////////////////////////////////////////
    //Class Setup
    ///////////////////////////////////////////////////////
    constructor(props: IGlobalContainerProps) {
        super(props);

        this.state = {}

        //WIRE EVENTS

        //SET DEFAULTS
        this.screenTemplate = "Template_Internet_And_Businesses_Online-Blogging_Test_Blog_About_1_0";
    }

    screenTemplate: string;

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
        return (<TemplateFactory {...this.props} RenderID={this.screenTemplate} NavigationLinks={this.state.NavigationLinks} />)
    }
}

export default Container_1_1;
//END CONTAINER - 1-1


















