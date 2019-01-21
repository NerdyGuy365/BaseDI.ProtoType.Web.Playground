//IMPORT REACT STUFF
import * as React from 'react';

//IMPORT EXTRA STUFF

//IMPORT SCREEN SPECIFIC STYLES

//IMPORT SCREEN SPECIFIC CONTENT

//IMPORT SCREEN SPECIFIC COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as TemplateFactory, TemplateNameEnum } from '../../../4. Templates/Computers and Technology/Programming/TemplateFactory';

//BEGIN CONTAINER - 1-1
class Container_1_1 extends React.Component<any, any>{
    ///////////////////////////////////////////////////////
    //Class Setup
    ///////////////////////////////////////////////////////
    constructor(props: any) {
        super(props);

        this.state = {}

        //WIRE EVENTS

        //SET DEFAULTS
        this.screenTemplate = TemplateNameEnum.Template_Internet_And_Businesses_Online_Duplicate_Blog_Home_Blogging_1_0;
    }

    screenTemplate: string;

    ///////////////////////////////////////////////////////
    //ReactJS Proprietary 
    ///////////////////////////////////////////////////////
    async componentDidMount() {
        //const response = await axios.get(`${Global().APIMockUrl}/APIVERB`);

        console.log("Current State = " + JSON.stringify(this.props.StateManager.stateStore.getState()));

        //this.props.StateManager.Software_Programming_Helper_HandleStateDispatch.getNavigationLinks({ navigationLinks: [{}] });

        //console.log("Current State = " + JSON.stringify(this.props.StateManager.stateStore.getState()));


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
        return (<TemplateFactory 
                    {...this.props} 
                    RenderID={this.screenTemplate} 
                    NavigationLinks={this.state.NavigationLinks} />)
    }
}

export default Container_1_1;
//END CONTAINER - 1-1


















