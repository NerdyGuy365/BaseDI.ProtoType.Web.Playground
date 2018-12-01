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