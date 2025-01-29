'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

interface ProductGridProps {
  products?: Product[];
  limit?: number;
}

export default function ProductGrid({ products: propProducts, limit }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(!propProducts);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (propProducts) {
      const limitedProducts = limit ? propProducts.slice(0, limit) : propProducts;
      setProducts(limitedProducts);
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        console.log('Fetching products...');
        const response = await fetch('/api/products');
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        console.log('Product URLs:', data.map((p: Product) => p.imageUrl));
        
        // If limit is provided, only show that many products
        const limitedProducts = limit ? data.slice(0, limit) : data;
        setProducts(Array.isArray(limitedProducts) ? limitedProducts : []);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit, propProducts]);

  console.log('Current products:', products);

  if (loading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  if (!products.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">No products available</p>
        <p className="text-sm">Visit /api/products/seed to add sample products</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
} 