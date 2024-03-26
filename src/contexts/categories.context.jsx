import {createContext, useEffect, useState} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {}
});


const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
           const categories = await getCategoriesAndDocuments();
            setCategoriesMap(categories);
        }

        getCategoriesMap();
    }, []);


    const value = {
        categoriesMap
    }

    return (
        <CategoriesContext.Provider value={}>
            {children}
        </CategoriesContext.Provider>
    );
};

export default CategoriesProvider;