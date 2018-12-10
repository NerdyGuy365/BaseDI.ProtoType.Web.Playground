//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as Template_Internet_And_Businesses_Online_Blogging_Test_Blog_Home_1_0 } from '../../../3. Templates/Internet and Businesses Online/Blogging/Template_Internet_And_Businesses_Online-Blogging_Test_Blog_Home_1_0';
import { default as Template_Internet_And_Businesses_Online_Blogging_Test_Blog_About_1_0 } from '../../../3. Templates/Internet and Businesses Online/Blogging/Template_Internet_And_Businesses_Online-Blogging_Test_Blog_About_1_0';
import { default as Template_Internet_And_Businesses_Online_Blogging_Test_Blog_Contact_1_0 } from '../../../3. Templates/Internet and Businesses Online/Blogging/Template_Internet_And_Businesses_Online-Blogging_Test_Blog_Contact_1_0';

//DECLARE FACTORY METHOD
const Template = (props: IGlobalContainerProps): any => {
    switch (props.RenderID != undefined && props.RenderID != null && props.RenderID.toLowerCase())
    {
        case "template_internet_and_businesses_online-blogging_test_blog_home_1_0":
            return Template_Internet_And_Businesses_Online_Blogging_Test_Blog_Home_1_0(props);
        case "template_internet_and_businesses_online-blogging_test_blog_about_1_0":
            return Template_Internet_And_Businesses_Online_Blogging_Test_Blog_About_1_0(props);
        case "template_internet_and_businesses_online-blogging_test_blog_contact_1_0":
            return Template_Internet_And_Businesses_Online_Blogging_Test_Blog_Contact_1_0(props);
    }
}

const TemplateFactory = (props: IGlobalContainerProps): any => {
    return Template(props)
}

export default TemplateFactory;