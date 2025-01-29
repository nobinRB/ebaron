'use client';

import { Suspense } from 'react';
import ProductGrid from '@/components/products/ProductGrid';
import FilterSidebar from '@/components/filters/FilterSidebar';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300">
      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/6">
            <FilterSidebar />
          </aside>
          
          <div className="w-full md:w-5/6">
            <Suspense fallback={<div>Loading products...</div>}>
              <ProductGrid />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
} 