//IMPORT REACT STUFF
import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';

//DECLARE FACTORY METHOD
const ApplicationRoute = (props: RouteProps): any => {
    return new Route(props);
}

const ApplicationRouteFactory = (props: RouteProps): any => {
    return ApplicationRoute(props)
}

export default ApplicationRouteFactory;