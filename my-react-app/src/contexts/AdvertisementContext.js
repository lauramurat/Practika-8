// src/contexts/AdContext.js

import React, { createContext, useReducer } from 'react';
import adReducer from '../reducers/adReducer';

export const AdContext = createContext();


const AdContextProvider = (props) => {
    const [ads, dispatch] = useReducer(adReducer, []);

    const addAd = (title, description) => {
        dispatch({ type: 'ADD_AD', ad: { title, description } });
    };

    const removeAd = (id) => {
        dispatch({ type: 'REMOVE_AD', id });
    };

    const editAd = (id, title, description) => {
        dispatch({ type: 'EDIT_AD', id, ad: { title, description } });
    };

    return (
        <AdContext.Provider value={{ ads, addAd, removeAd, editAd }}>
            {props.children}
        </AdContext.Provider>
    );
};

export default AdContextProvider;
