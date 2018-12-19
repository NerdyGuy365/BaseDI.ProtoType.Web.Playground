//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as Application_Internet_And_Businesses_Online_Demo_Blog_Blogging_1_0 } from '../../Internet and Businesses Online/Blogging/Application – Internet and Businesses Online – Demo Blog, Blogging - 1_0';
import { default as Application_Internet_And_Businesses_Online_Demo_Blog_Site_Promotion_1_0 } from '../../Internet and Businesses Online/Site Promotion/Application – Internet and Businesses Online – Demo Blog, Site Promotion - 1_0';

//DECLARE FACTORY ENUM
enum ApplicationNameEnum {
    Application_Internet_And_Businesses_Online_Demo_Blog_Blogging_1_0 = "application - internet and businesses online - demo blog, blogging - 1.0",
    Application_Internet_And_Businesses_Online_Demo_Blog_Site_Promotion_1_0 = "application - internet and businesses online - demo blog, site promotion - 1.0"
}

export { ApplicationNameEnum }

//DECLARE FACTORY METHOD
const Application = (props: IGlobalContainerProps): any => {
    switch (props.ApplicationName != undefined && props.ApplicationName != null && props.ApplicationName.toLowerCase())
    {
        case ApplicationNameEnum.Application_Internet_And_Businesses_Online_Demo_Blog_Blogging_1_0:
            return new Application_Internet_And_Businesses_Online_Demo_Blog_Blogging_1_0(props);
        case ApplicationNameEnum.Application_Internet_And_Businesses_Online_Demo_Blog_Site_Promotion_1_0:
            return Application_Internet_And_Businesses_Online_Demo_Blog_Site_Promotion_1_0(props);
    }
}

const ApplicationFactory = (props: IGlobalContainerProps): any => {
    return Application(props)
}

export default ApplicationFactory;