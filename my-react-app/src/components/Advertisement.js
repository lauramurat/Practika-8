import React, { useContext, useState } from 'react';
import { AdContext } from '../contexts/AdvertisementContext';
import EditAdForm from './EditAdForm';
import './AdItem.css';

const AdItem = ({ ad }) => {
    const { removeAd } = useContext(AdContext);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="ad-item">
            {isEditing ? (
                <EditAdForm ad={ad} toggleEdit={toggleEdit} />
            ) : (
                <>
                    <h3>{ad.title}</h3>
                    <p>{ad.description}</p>
                    <div className="ad-item-buttons">
                        <button className="edit-button" onClick={toggleEdit}>Edit</button>
                        <button className="delete-button" onClick={() => removeAd(ad.id)}>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AdItem;
