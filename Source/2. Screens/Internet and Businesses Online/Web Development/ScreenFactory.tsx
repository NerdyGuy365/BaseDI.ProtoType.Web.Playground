//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as Screen_Internet_And_Businesses_Online_Demo_Blog_About_Blogging_1_0 } from '../../../2. Screens/Internet and Businesses Online/Blogging/Screen – Internet and Businesses Online – Demo Blog _ About, Blogging – 1_0';
import { default as Screen_Internet_And_Businesses_Online_Demo_Blog_Contact_Blogging_1_0 } from '../../../2. Screens/Internet and Businesses Online/Blogging/Screen – Internet and Businesses Online – Demo Blog _ Contact, Blogging – 1_0';
import { default as Screen_Internet_And_Businesses_Online_Demo_Blog_Home_Blogging_1_0 } from '../../../2. Screens/Internet and Businesses Online/Blogging/Screen – Internet and Businesses Online – Demo Blog _ Home, Blogging – 1_0';

//DECLARE FACTORY ENUM
enum ScreenNameEnum {
    Screen_Internet_And_Businesses_Online_Demo_Blog_About_Blogging_1_0 = "screen – internet and businesses online – demo blog _ about, blogging – 1_0",
    Screen_Internet_And_Businesses_Online_Demo_Blog_Contact_Blogging_1_0 = "screen – internet and businesses online – demo blog _ contact, blogging – 1_0",
    Screen_Internet_And_Businesses_Online_Demo_Blog_Home_Blogging_1_0 = "screen – internet and businesses online – demo blog _ home, blogging – 1_0"
}

export { ScreenNameEnum }

//DECLARE FACTORY METHOD
const Screen = (props: IGlobalContainerProps): any => {
    switch (props.RenderID != undefined && props.RenderID != null && props.RenderID.toLowerCase())
    {
        case ScreenNameEnum.Screen_Internet_And_Businesses_Online_Demo_Blog_About_Blogging_1_0:
            return new Screen_Internet_And_Businesses_Online_Demo_Blog_About_Blogging_1_0(props);
        case ScreenNameEnum.Screen_Internet_And_Businesses_Online_Demo_Blog_Contact_Blogging_1_0:
            return new Screen_Internet_And_Businesses_Online_Demo_Blog_Contact_Blogging_1_0(props);
        case ScreenNameEnum.Screen_Internet_And_Businesses_Online_Demo_Blog_Home_Blogging_1_0:
            return new Screen_Internet_And_Businesses_Online_Demo_Blog_Home_Blogging_1_0(props);
    }
}

const ScreenFactory = (props: IGlobalContainerProps): any => {
    return Screen(props)
}

export default ScreenFactory;



