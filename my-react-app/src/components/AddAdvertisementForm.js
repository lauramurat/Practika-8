import React, { useState, useContext } from 'react';
import { AdContext } from '../contexts/AdvertisementContext';
import '../styles.css';
const AddAdForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { addAd } = useContext(AdContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addAd(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />

            <button type="submit">Add</button>
        </form>
    );
};

export default AddAdForm;
