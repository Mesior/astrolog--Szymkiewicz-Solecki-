import type { AstroObject } from '../types';


interface CatalogListProps {
    objects: AstroObject[];
    onSelectObject: (obj: AstroObject) => void;
}

function CatalogList({ objects, onSelectObject }: CatalogListProps) {
    return (
        <div className="catalog-list">
            <h2>Katalog Obiektów</h2>
            <ul>
                {objects.map((obj) => (
                    <li
                        key={obj.id}
                        onClick={() => onSelectObject(obj)}
                        className="catalog-item"
                    >
                        <img src={obj.image} alt={obj.name} className="thumbnail" />
                        <span>{obj.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CatalogList;