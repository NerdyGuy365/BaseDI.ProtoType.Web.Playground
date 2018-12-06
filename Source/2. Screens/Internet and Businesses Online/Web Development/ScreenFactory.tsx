//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as Screen_Internet_And_Businesses_Online_Blogging_Test_Blog_Home_1_0 } from '../../../2. Screens/Internet and Businesses Online/Blogging/Screen_Internet_And_Businesses_Online-Blogging_Test_Blog_Home_1_0';
import { default as Screen_Internet_And_Businesses_Online_Blogging_Test_Blog_About_1_0 } from '../../../2. Screens/Internet and Businesses Online/Blogging/Screen_Internet_And_Businesses_Online-Blogging_Test_Blog_About_1_0';
import { default as Screen_Internet_And_Businesses_Online_Blogging_Test_Blog_Contact_1_0 } from '../../../2. Screens/Internet and Businesses Online/Blogging/Screen_Internet_And_Businesses_Online-Blogging_Test_Blog_Contact_1_0';

//DECLARE FACTORY METHOD
const Screen = (props: IGlobalContainerProps): any => {
    switch (props.RenderID != undefined && props.RenderID != null && props.RenderID.toLowerCase())
    {
        case "screen_internet_and_businesses_online-blogging_test_blog_home_1_0":
            return new Screen_Internet_And_Businesses_Online_Blogging_Test_Blog_Home_1_0(props);
        case "screen_internet_and_businesses_online-blogging_test_blog_about_1_0":
            return new Screen_Internet_And_Businesses_Online_Blogging_Test_Blog_About_1_0(props);
        case "screen_internet_and_businesses_online-blogging_test_blog_contact_1_0":
            return new Screen_Internet_And_Businesses_Online_Blogging_Test_Blog_Contact_1_0(props);
    }
}

const ScreenFactory = (props: IGlobalContainerProps): any => {
    return Screen(props)
}

export default ScreenFactory;



