'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/products/ProductGrid';
import FilterSidebar from '@/components/filters/FilterSidebar';
import { Product } from '@/types/product';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300">
      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/6">
            <FilterSidebar />
          </aside>
          
          <div className="w-full md:w-5/6">
             {/* Wrapping SearchResults in Suspense for async fetching */}
             <Suspense fallback={<div>Loading search results...</div>}>
              <SearchResults query={query} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchResults({ query }: { query: string | null }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        try {
          setLoading(true);
          const response = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch search results');
          }
          
          const data = await response.json();
          setProducts(data);
          setError(null);
        } catch (error) {
          console.error('Error fetching search results:', error);
          setError(error instanceof Error ? error.message : 'An unknown error occurred');
          setProducts([]);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSearchResults();
  }, [query]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="bg-gray-300 h-64 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          Search Error
        </h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className=" rounded-lg">
      <h1 className="text-xl font-semibold mb-8 text-gray-800">
        {products.length > 0
          ? `Search Results for "${query}"`
          : 'No Products Found'}
      </h1>
      
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div>
          <p className="text-xl text-gray-600 mb-4">
            We couldn't find any products matching your search.
          </p>
          <p className="text-gray-500">
            Try different keywords or browse our categories.
          </p>
        </div>
      )}
    </div>
  );
}
