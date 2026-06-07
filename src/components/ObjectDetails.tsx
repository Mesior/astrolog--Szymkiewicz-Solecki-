import type { AstroObject } from '../types';

interface ObjectDetailsProps {
    selectedObject: AstroObject | null;
}

function ObjectDetails({ selectedObject }: ObjectDetailsProps) {
    if (!selectedObject) {
        return (
            <div className="object-details placeholder">
                <h2>Panel Obserwacyjny</h2>
                <p>Wybierz obiekt z katalogu po lewej stronie, aby rozpocząć obserwację. 🔭</p>
            </div>
        );
    }

    return (
        <div className="object-details">
            <h2>Panel Obserwacyjny: {selectedObject.name}</h2>
            <div className="details-card">
                <img src={selectedObject.image} alt={selectedObject.name} className="large-image" />
                <div className="info">
                    <p><strong>Typ obiektu:</strong> {selectedObject.type}</p>
                    <p><strong>Odległość od Ziemi:</strong> {selectedObject.distance}</p>
                </div>
            </div>
        </div>
    );
}

export default ObjectDetails;