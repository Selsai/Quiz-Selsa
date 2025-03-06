import React from 'react';

function FilterQuiz({ setCategory }) {
    return (
        <div className="mb-3">
            <label className="form-label">
                <i className="fas fa-filter"></i> Filtrer par catégorie :
            </label>
            <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
                <option value="All">Toutes</option>
                <option value="Math">📐 Maths</option>
                <option value="Science">🔬 Sciences</option>
                <option value="Histoire">🏛️ Histoire</option>
            </select>
        </div>
    );
}

export default FilterQuiz;
