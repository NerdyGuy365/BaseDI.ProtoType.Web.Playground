//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as Layout_Internet_And_Businesses_Online_Duplicate_Blog_Blogging_1_0 } from '../../Internet and Businesses Online/Blogging/Layout – Internet and Businesses Online – Duplicate Blog, Blogging - 1_0';

//DECLARE FACTORY ENUM
enum LayoutNameEnum {
    Layout_Internet_And_Businesses_Online_Duplicate_Blog_Blogging_1_0 = "layout - internet and businesses online - Duplicate blog, blogging - 1.0",
}

export { LayoutNameEnum }

//DECLARE FACTORY METHOD
const Layout = (props: any): any => {
    switch (props.LayoutName != undefined && props.LayoutName != null && props.LayoutName.toLowerCase())
    {
        case LayoutNameEnum.Layout_Internet_And_Businesses_Online_Duplicate_Blog_Blogging_1_0:
            return Layout_Internet_And_Businesses_Online_Duplicate_Blog_Blogging_1_0(props);
    }
}

const LayoutFactory = (props: any): any => {
    return Layout(props)
}

export default LayoutFactory;