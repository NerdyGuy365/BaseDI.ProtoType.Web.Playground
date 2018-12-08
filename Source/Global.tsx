//IMPORT REACT STUFF
import * as React from 'react';

//BEGIN GLOBAL - 0-0
const Global = () => {
    ///////////////////////////////////////////////////////
    //Standalone Helpers
    ///////////////////////////////////////////////////////
    const Web_Development_Programming_Helper_ReadDomain = (url: string, subdomain: boolean): string => {
        subdomain = subdomain || false;

        let urlTemp = url.replace(/(https?:\/\/)?(www.)?/i, '');
        let urlSplit: string[];

        if (!subdomain) {
            urlSplit = urlTemp.split('.');

            urlTemp = urlSplit.slice(urlSplit.length - 2).join('.');
        }

        if (urlTemp.indexOf('/') !== -1) {
            let urlFilter = urlTemp.split('/')[0];

            if (urlFilter.split(':').length > 0)
                urlFilter = urlFilter.split(':')[0];

            return urlFilter;
        }

        return urlTemp;
    }

    ///////////////////////////////////////////////////////
    //Variables
    ///////////////////////////////////////////////////////
    const domainName: string = Web_Development_Programming_Helper_ReadDomain(location.href, false);

    return ({
        APIMockUrl: 'https://5c0043c80296210013dc8003.mockapi.io',
        DomainName: domainName
    })
}

export {
    Global
}
//END GLOBAL - 0-0






















//EXPORT APPLICATIONS
//export { default as Application_Internet_And_Businesses_Online_Blogging_Test_BlogApplication_1_0 } from './1. Applications/Internet and Businesses Online/Blogging/Application_Internet_And_Businesses_Online-Blogging_Test_BlogApplication_1_0'



























//EXPORT SCREENS





















//EXPORT TEMPLATES
//export { default as Template_Internet_And_Businesses_Online_Blogging_Test_Blog_About_1_0 } from './3. Templates/Internet and Businesses Online/Blogging/Template_Internet_And_Businesses_Online-Blogging_Test_Blog_About_1_0';
//export { default as Template_Internet_And_Businesses_Online_Blogging_Test_Blog_Contact_1_0 } from './3. Templates/Internet and Businesses Online/Blogging/Template_Internet_And_Businesses_Online-Blogging_Test_Blog_Contact_1_0';
//export { default as Template_Internet_And_Businesses_Online_Blogging_Test_Blog_Home_1_0 } from './3. Templates/Internet and Businesses Online/Blogging/Template_Internet_And_Businesses_Online-Blogging_Test_Blog_Home_1_0';


























//EXPORT PIECES
//export { default as Piece_Internet_And_Businesses_Online_Site_Promotion_Blogging_Test_Navigation_Menu_1_0 } from './4. Pieces/Internet and Businesses Online/Site Promotion/Piece_Internet_And_Businesses_Online-Site_Promotion_Blogging_Test_Navigation_Menu_1_0';
//export { default as Piece_Internet_And_Businesses_Online_Site_Promotion_Test_Navigation_Menu_1_0 } from './4. Pieces/Internet and Businesses Online/Site Promotion/Piece_Internet_And_Businesses_Online-Site_Promotion_Test_Navigation_Menu_1_0';
//export { default as Piece_Self_Improvement_Organizing_Todo_Management_1_0 } from './4. Pieces/Self Improvement/Organizing/Piece_Self_Improvement-Organizing_Todo_Management_1_0';






















//BEGIN GLOBAL INTERFACES
interface IGlobalContainerProps {
    ApplicationName?:string,
    NavigationLinks?: { name: string, link: string, renderID: string }[],
    RenderID?:string,
    RouteID?:string
}

export {
    IGlobalContainerProps
}

interface IGlobalHeaderProps {
    ApplicationName?:string,
    NavigationLinks?: { name: string, link: string, renderID: string }[],
    RenderID?:string,
    RouteID?:string
}

export {
    IGlobalHeaderProps
}

interface IGlobalBodyProps {
    ApplicationName?:string,
    NavigationLinks?: { name: string, link: string, renderID: string }[],
    RenderID?:string,
    RouteID?:string
}

export {
    IGlobalBodyProps
}

interface IGlobalFooterProps {
    ApplicationName?:string,
    NavigationLinks?: { name: string, link: string, renderID: string }[],
    RenderID?:string,
    RouteID?:string
}

export {
    IGlobalFooterProps
}
//END GLOBAL INTERFACES

