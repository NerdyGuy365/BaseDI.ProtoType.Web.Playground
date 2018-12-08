//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';

//DECLARE FACTORY METHOD
const Piece = (props: IGlobalContainerProps): any => {
    //switch (props.RenderID != undefined && props.RenderID != null && props.RenderID.toLowerCase()) {
    //    case "piece_internet_and_businesses_online-site_promotion_test_navigation_menu_1_0":
    //        return Piece_Internet_And_Businesses_Online_Site_Promotion_Test_Navigation_Menu_1_0(props);
    //}
}

const PieceFactory = (props: IGlobalContainerProps): any => {
    return Piece(props)
}

export default PieceFactory;