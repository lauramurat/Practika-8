import React, { useState, useContext } from 'react';
import { AdContext } from '../contexts/AdvertisementContext';

const EditAdForm = ({ ad, toggleEdit }) => {
    const [title, setTitle] = useState(ad.title);
    const [description, setDescription] = useState(ad.description);
    const { editAd } = useContext(AdContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        editAd(ad.id, title, description);
        toggleEdit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Save</button>
            <button onClick={toggleEdit}>Cancel</button>
        </form>
    );
};

export default EditAdForm;
