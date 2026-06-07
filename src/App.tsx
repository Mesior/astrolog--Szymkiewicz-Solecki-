import { useState } from 'react';
import CatalogList from './components/CatalogList';
import ObjectDetails from './components/ObjectDetails';
import DiscoveryForm from './components/DiscoveryForm';
import type { AstroObject } from './types';
import './App.css';





const initialObjects: AstroObject[] = [
    { id: 1, name: "Mars", type: "Planeta", distance: "225 mln km", image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&q=80" },
    { id: 2, name: "Syriusz", type: "Gwiazda", distance: "8.6 lat świetlnych", image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500&q=80" },
    { id: 3, name: "Andromeda", type: "Galaktyka", distance: "2.5 mln lat świetlnych", image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=500&q=80" },
    { id: 4, name: "Księżyc", type: "Satelita", distance: "384 tys. km", image: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=500&q=80" },
    { id: 5, name: "Kometa Halleya", type: "Kometa", distance: "Zmienna", image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=500&q=80" }
];


function App() {
    const [objects, setObjects] = useState<AstroObject[]>(initialObjects);
    const [selectedObject, setSelectedObject] = useState<AstroObject | null>(null);

    const handleAddDiscovery = (newDiscovery: Omit<AstroObject, 'id'>) => {
        const newObject: AstroObject = {
            ...newDiscovery,
            id: Date.now()
        };
        setObjects([...objects, newObject]);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>🌌 AstroLog</h1>
                <p>Katalog Ciał Niebieskich i Rejestr Odkryć</p>
            </header>

            <main className="app-layout">
                <aside className="sidebar">
                    <CatalogList objects={objects} onSelectObject={setSelectedObject} />
                </aside>

                <section className="main-content">
                    <ObjectDetails selectedObject={selectedObject} />
                    <DiscoveryForm onAddDiscovery={handleAddDiscovery} />
                </section>
            </main>
        </div>
    );
}

export default App;