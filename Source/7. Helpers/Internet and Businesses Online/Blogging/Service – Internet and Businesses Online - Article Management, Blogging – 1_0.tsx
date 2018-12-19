//IMPORT REACT STUFF
import * as React from 'react';

//IMPORT EXTRA STUFF
import axios from 'axios';
import { validateAll  } from 'indicative';

//IMPORT APPLICATION STYLES

//IMPORT APPLICATION CONTENT

//IMPORT APPLICATION COMPONENTS
import { Global, IGlobalContainerProps, IGlobalHeaderProps, IGlobalBodyProps, IGlobalFooterProps } from '../../../Global';

//SET TARGET MARKET INFORMATION
const marketMainCategory = "Internet and Businesses Online";
const marketNicheCategory = "Blogging";

//BEGIN SERVICES
export default class Software_Programming_Helper_HandleArticleManagement_1_0 {
    ///////////////////////////////////////////////////////
    //----> Create Methods
    ///////////////////////////////////////////////////////
    public async Software_Programming_HandleCreate_SaveArticle()
    {
        try
        {
            //Step: DEFINE client side validation rules.

            //Step: DEFINE client side validation error messages.

            //Step: VALIDATE client side error messages.

            //Step: PERFORM task

            //Step: RESPOND back
        }
        catch (errors) {

        }
    }























    ///////////////////////////////////////////////////////
    //----> Read Methods
    ///////////////////////////////////////////////////////

    //One Item
    public async Software_Programming_HandleRead_GetArticleByID()
    {
        try
        {
            //Step: DEFINE client side validation rules.

            //Step: DEFINE client side validation error messages.

            //Step: VALIDATE client side error messages.

            //Step: PERFORM task

            //Step: RESPOND back
        }
        catch (errors) {

        }
    }
    public async Software_Programming_HandleRead_GetArticleCategories()
    {
        try
        {
            //Step: DEFINE client side validation rules.

            //Step: DEFINE client side validation error messages.

            //Step: VALIDATE client side error messages.

            //Step: PERFORM task

            //Step: RESPOND back
        }
        catch (errors) {

        }
    }

    //Multiple Items
    public async Software_Programming_HandleRead_GetArticlesAny() {
        try {
            //Step: DEFINE client side validation rules.

            //Step: DEFINE client side validation error messages.

            //Step: VALIDATE client side error messages.

            //Step: PERFORM task

            //Step: RESPOND back
        }
        catch (errors) {

        }
    }
    public async Software_Programming_HandleRead_GetArticlesBySearchPhrase() {
        try {
            //Step: DEFINE client side validation rules.

            //Step: DEFINE client side validation error messages.

            //Step: VALIDATE client side error messages.

            //Step: PERFORM task

            //Step: RESPOND back
        }
        catch (errors) {

        }
    }























    ///////////////////////////////////////////////////////
    //----> Update Methods
    ///////////////////////////////////////////////////////
    public async Software_Programming_HandleUpdate_EditArticle() {
        try {
            //Step: DEFINE client side validation rules.

            //Step: DEFINE client side validation error messages.

            //Step: VALIDATE client side error messages.

            //Step: PERFORM task

            //Step: RESPOND back
        }
        catch (errors) {

        }
    }























    ///////////////////////////////////////////////////////
    //----> Delete Methods
    ///////////////////////////////////////////////////////
    public async Software_Programming_HandleDelete_RemoveArticleByID()
    {
        try
        {
            //Step: DEFINE client side validation rules.

            //Step: DEFINE client side validation error messages.

            //Step: VALIDATE client side error messages.

            //Step: PERFORM task

            //Step: RESPOND back
        }
        catch (errors) {

        }
    }
}
//END SERVICES

























//BEGIN SERVICE HELPERS
    ///////////////////////////////////////////////////////
    //Helper Methods
    ///////////////////////////////////////////////////////
//END SERVICE HELPERS




//export default class ArticlesService {
//    async getArticles(url = `${config.apiUrl}/articles`) {
//        const response = await Axios.get(url);

//        return response.data.data;
//    }
//    async getUserArticles(token, url = `${config.apiUrl}/user/articles`) {
//        const response = await Axios.get(url, {
//            headers: {
//                Authorization: `Bearer ${token}`,
//            },
//        });

//        return response.data.data;
//    }
//    async deleteArticle(id, token) {
//        await Axios.delete(`${config.apiUrl}/articles/${id}`, {
//            headers: {
//                Authorization: `Bearer ${token}`,
//            },
//        });

//        return true;
//    }
//    async getArticle(slug) {
//        const response = await Axios.get(`${config.apiUrl}/article/${slug}`);

//        return response.data.data;
//    }
//    async getArticleCategories() {
//        const categories = JSON.parse(localStorage.getItem('categories'));

//        if (categories) {
//            return categories;
//        }
//        const response = await Axios.get(`${config.apiUrl}/categories`);
//        localStorage.setItem('categories', JSON.stringify(response.data.categories));
//        return response.data.categories;
//    }

//    createArticle = async (data, token) => {
//        if (!data.image) {
//            return Promise.reject([{
//                message: 'The image is required.',
//            }]);
//        }

//        try {
//            const rules = {
//                title: 'required',
//                content: 'required',
//                category: 'required',
//            };

//            const messages = {
//                required: 'The {{ field }} is required.',
//            };

//            await validateAll(data, rules, messages);

//            const image = await this.uploadToCloudinary(data.image);
//            const response = await Axios.post(`${config.apiUrl}/articles`, {
//                title: data.title,
//                content: data.content,
//                category_id: data.category,
//                imageUrl: image.secure_url,
//            }, {
//                    headers: {
//                        Authorization: `Bearer ${token}`,
//                    },
//                });


//            return response.data;
//        } catch (errors) {
//            if (errors.response) {
//                return Promise.reject(errors.response.data);
//            }

//            return Promise.reject(errors);
//        }
//    }

//    updateArticle = async (data, article, token) => {
//        let image;
//        if (data.image) {
//            image = await this.uploadToCloudinary(data.image);
//        }

//        try {
//            const rules = {
//                title: 'required',
//                content: 'required',
//                category: 'required',
//            };

//            const messages = {
//                required: 'The {{ field }} is required.',
//            };

//            await validateAll(data, rules, messages);

//            const response = await Axios.put(`${config.apiUrl}/articles/${article.id}`, {
//                title: data.title,
//                content: data.content,
//                category_id: data.category,
//                imageUrl: image ? image.secure_url : article.imageUrl,
//            }, {
//                    headers: {
//                        Authorization: `Bearer ${token}`,
//                    },
//                });


//            return response.data;
//        } catch (errors) {
//            if (errors.response) {
//                return Promise.reject(errors.response.data);
//            }

//            return Promise.reject(errors);
//        }
//    }

//    async uploadToCloudinary(image) {
//        const form = new FormData();
//        form.append('file', image);
//        form.append('upload_preset', 'g5ziunzg');

//        const response = await Axios.post('https://api.cloudinary.com/v1_1/bahdcoder/image/upload', form);

//        return response.data;
//    }
//}