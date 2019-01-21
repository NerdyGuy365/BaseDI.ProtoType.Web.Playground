//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as Template_Internet_And_Businesses_Online_Duplicate_Blog_About_Blogging_1_0 } from '../../../4. Templates/Internet and Businesses Online/Blogging/Template – Internet and Businesses Online – Duplicate Blog ~ About, Blogging – 1_0';
import { default as Template_Internet_And_Businesses_Online_Duplicate_Blog_Contact_Blogging_1_0 } from '../../../4. Templates/Internet and Businesses Online/Blogging/Template – Internet and Businesses Online – Duplicate Blog ~ Contact, Blogging – 1_0';
import { default as Template_Internet_And_Businesses_Online_Duplicate_Blog_Home_Blogging_1_0 } from '../../../4. Templates/Internet and Businesses Online/Blogging/Template – Internet and Businesses Online – Duplicate Blog ~ Home, Blogging – 1_0';

//DECLARE FACTORY ENUM
enum TemplateNameEnum {
    Template_Internet_And_Businesses_Online_Duplicate_Blog_About_Blogging_1_0 = "template – internet and businesses online – Duplicate blog _ about, blogging – 1_0",
    Template_Internet_And_Businesses_Online_Duplicate_Blog_Contact_Blogging_1_0 = "template – internet and businesses online – Duplicate blog _ contact, blogging – 1_0",
    Template_Internet_And_Businesses_Online_Duplicate_Blog_Home_Blogging_1_0 = "template – internet and businesses online – Duplicate blog _ home, blogging – 1_0"
}

export { TemplateNameEnum }

//DECLARE FACTORY METHOD
const Template = (props: any): any => {
    switch (props.RenderID != undefined && props.RenderID != null && props.RenderID.toLowerCase())
    {
        case TemplateNameEnum.Template_Internet_And_Businesses_Online_Duplicate_Blog_About_Blogging_1_0:
            return Template_Internet_And_Businesses_Online_Duplicate_Blog_About_Blogging_1_0(props);
        case TemplateNameEnum.Template_Internet_And_Businesses_Online_Duplicate_Blog_Contact_Blogging_1_0:
            return Template_Internet_And_Businesses_Online_Duplicate_Blog_Contact_Blogging_1_0(props);
        case TemplateNameEnum.Template_Internet_And_Businesses_Online_Duplicate_Blog_Home_Blogging_1_0:
            return Template_Internet_And_Businesses_Online_Duplicate_Blog_Home_Blogging_1_0(props);
    }
}

const TemplateFactory = (props: any): any => {
    return Template(props)
}

export default TemplateFactory;