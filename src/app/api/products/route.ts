import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import type { IProduct, IProductBase } from '@/models/Product';

export async function GET() {
  try {
    // Connect to database
    console.log('Attempting database connection...');
    await connectDB();
    
    // Fetch products with a reasonable timeout
    console.log('Fetching products...');
    const products = await Product.find({})
      .lean()
      .limit(100)  // Limit results to prevent overload
      .sort({ createdAt: -1 })  // Sort by newest first
      .exec() as (IProductBase & { _id: unknown; __v: number; })[];

    if (!products || products.length === 0) {
      console.log('No products found');
      return NextResponse.json([]);
    }

    console.log(`Successfully fetched ${products.length} products`);
    return NextResponse.json(products);

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        error: 'Database operation failed',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    
    const product = await Product.create(body);
    return NextResponse.json(product.toObject(), { status: 201 });
  } catch (error) {
    console.error('Failed to create product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
} 