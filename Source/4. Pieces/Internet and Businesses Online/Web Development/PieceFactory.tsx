//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';
import { default as Piece_Self_Improvement_Demo_Todo_Manager_Organizing_1_0 } from '../../../4. Pieces/Self Improvement/Organizing/Piece – Self Improvement – Demo Todo Manager, Organizing – 1_0';

//DECLARE FACTORY ENUM
enum PieceNameEnum {
    Piece_Self_Improvement_Demo_Todo_Manager_Organizing_1_0 = "piece – self improvement – demo todo manager, organizing – 1_0"
}

export { PieceNameEnum }

//DECLARE FACTORY METHOD
const Piece = (props: IGlobalContainerProps): any => {
    switch (props.RenderID != undefined && props.RenderID != null && props.RenderID.toLowerCase()) {
        case PieceNameEnum.Piece_Self_Improvement_Demo_Todo_Manager_Organizing_1_0:
            return new Piece_Self_Improvement_Demo_Todo_Manager_Organizing_1_0(props);
    }
}

const PieceFactory = (props: IGlobalContainerProps): any => {
    return Piece(props)
}

export default PieceFactory;