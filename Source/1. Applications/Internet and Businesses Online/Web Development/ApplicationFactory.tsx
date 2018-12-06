//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as Application_Internet_And_Businesses_Online_Blogging_Test_BlogApplication_1_0 } from '../Blogging/Application_Internet_And_Businesses_Online-Blogging_Test_BlogApplication_1_0';

//DECLARE FACTORY METHOD
const Application = (props: IGlobalContainerProps): any => {
    switch (props.ApplicationName != undefined && props.ApplicationName != null && props.ApplicationName.toLowerCase())
    {
        case "application_internet_and_businesses_online-blogging_test_blogapplication_1_0":
            return new Application_Internet_And_Businesses_Online_Blogging_Test_BlogApplication_1_0(props);
    }
}

const ApplicationFactory = (props: IGlobalContainerProps): any => {
    return Application(props)
}

export default ApplicationFactory;