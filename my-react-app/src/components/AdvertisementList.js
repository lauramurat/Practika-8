import React, { useContext } from 'react';
import { AdContext } from '../contexts/AdvertisementContext';
import AdItem from './Advertisement';

const AdList = () => {
    const { ads } = useContext(AdContext);

    return (
        <div>
            {ads.map(ad => (
                <AdItem key={ad.id} ad={ad} />
            ))}
        </div>
    );
};

export default AdList;
