'use client';

import { useState } from 'react';

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    'Electronics',
    'Clothing',
    'Books',
    'Home & Garden',
    'Sports',
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-black">Categories</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedCategories([...selectedCategories, category]);
                } else {
                  setSelectedCategories(
                    selectedCategories.filter((cat) => cat !== category)
                  );
                }
              }}
              className="mr-2"
            />
            <label htmlFor={category} className="text-black">{category}</label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-black">Price Range</h3>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full"
          />
          <div className="flex justify-between">
            <span className="text-black">${priceRange[0]}</span>
            <span className="text-black">${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 