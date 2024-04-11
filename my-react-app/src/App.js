import React from 'react';
import AddAdForm from './components/AddAdvertisementForm';
import AdList from './components/AdvertisementList';
import AdContextProvider from './contexts/AdvertisementContext';
import './App.css';
import './styles.css';
import './components/AdItem.css';

const App = () => {
    return (
        <div className="app">
            <h1>Bulletin Board</h1>
            <AdContextProvider>
                <AddAdForm />
                <AdList />
            </AdContextProvider>
        </div>
    );
};

export default App;
