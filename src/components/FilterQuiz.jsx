import React from 'react';

function FilterQuiz({ setCategory }) {
  return (
    <div className="filter-quiz mb-4">
      <label className="form-label d-block mb-2">
        <i className="fas fa-filter me-2"></i> Filtrer par catégorie :
      </label>
      <select className="form-select custom-select" onChange={(e) => setCategory(e.target.value)}>
        <option value="All">🌟 Toutes les catégories</option>
        <option value="Math">📐 Mathématiques</option>
        <option value="Science">🔬 Sciences</option>
        <option value="Histoire">🏛️ Histoire</option>
        <option value="Gastronomie">🍽️ Gastronomie</option>
      </select>
    </div>
  );
}

export default FilterQuiz;
