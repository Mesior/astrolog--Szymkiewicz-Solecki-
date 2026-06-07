import { useState } from 'react';
import type { FormEvent } from 'react';
import type { AstroObject } from '../types';


interface DiscoveryFormProps {
    onAddDiscovery: (newDiscovery: Omit<AstroObject, 'id'>) => void;
}

function DiscoveryForm({ onAddDiscovery }: DiscoveryFormProps) {
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [distance, setDistance] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !type || !distance || !image) {
            alert('Wypełnij wszystkie pola zgłoszenia!');
            return;
        }

        onAddDiscovery({ name, type, distance, image });

        setName('');
        setType('');
        setDistance('');
        setImage('');
    };

    return (
        <div className="discovery-form">
            <h2>Zgłoś Odkrycie (Anomalię)</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Nazwa obiektu:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="np. Kepler-186f" />
                </div>
                <div className="input-group">
                    <label>Typ obiektu:</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="np. Egzoplaneta" />
                </div>
                <div className="input-group">
                    <label>Odległość:</label>
                    <input type="text" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="np. 500 lat świetlnych" />
                </div>
                <div className="input-group">
                    <label>Link do zdjęcia:</label>
                    <input type="url" value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." />
                </div>
                <button type="submit" className="btn-submit">Dodaj do Katalogu</button>
            </form>
        </div>
    );
}

export default DiscoveryForm;