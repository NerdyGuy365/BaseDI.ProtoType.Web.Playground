//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as Application_Internet_And_Businesses_Online_Duplicate_Blog_Blogging_1_0 } from '../../Internet and Businesses Online/Blogging/Application – Internet and Businesses Online – Duplicate Blog, Blogging - 1_0';

//DECLARE FACTORY ENUM
enum ApplicationNameEnum {
    Application_Internet_And_Businesses_Online_Duplicate_Blog_Blogging_1_0 = "application - internet and businesses online - Duplicate blog, blogging - 1.0",
}

export { ApplicationNameEnum }

//DECLARE FACTORY METHOD
const Application = (props: any): any => {
    switch (props.ApplicationName != undefined && props.ApplicationName != null && props.ApplicationName.toLowerCase())
    {
        case ApplicationNameEnum.Application_Internet_And_Businesses_Online_Duplicate_Blog_Blogging_1_0:
            return new Application_Internet_And_Businesses_Online_Duplicate_Blog_Blogging_1_0(props);
    }
}

const ApplicationFactory = (props: any): any => {
    return Application(props)
}

export default ApplicationFactory;