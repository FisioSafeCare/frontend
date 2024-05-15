import React, { useState } from 'react';

function ProfileForm() {
    const [characteristics, setCharacteristics] = useState({
        characteristic_1: '',
        characteristic_2: '',
        characteristic_3: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Implement profile creation logic
        console.log('Profile Created', characteristics);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Profile</h2>
            <label>
                Characteristic 1:
                <input type="text" value={characteristics.characteristic_1} onChange={(e) => setCharacteristics({ ...characteristics, characteristic_1: e.target.value })} />
            </label>
            <label>
                Characteristic 2:
                <input type="text" value={characteristics.characteristic_2} onChange={(e) => setCharacteristics({ ...characteristics, characteristic_2: e.target.value })} />
            </label>
            <label>
                Characteristic 3:
                <input type="text" value={characteristics.characteristic_3} onChange={(e) => setCharacteristics({ ...characteristics, characteristic_3: e.target.value })} />
            </label>
            <button type="submit">Create Profile</button>
        </form>
    );
}

export default ProfileForm;