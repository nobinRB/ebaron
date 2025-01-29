import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import type { IProduct } from '@/models/Product';

export async function GET() {
  try {
    console.log('Connecting to database...');
    const mongoose = await Promise.race([
      connectDB(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Database connection timeout')), 5000)
      )
    ]);

    if (!mongoose) {
      console.error('Database connection failed');
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    console.log('Fetching products...');
    const products: IProduct[] = await Promise.race([
      Product.find({}).lean().exec(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Products fetch timeout')), 4000)
      )
    ]) as IProduct[];
    
    // Debug log to see what's in the database
    if (products && products.length > 0) {
      products.forEach(product => {
        console.log(`Product: ${product.name}, Image: ${product.imageUrl}`);
      });
    } else {
      console.log('No products found in database');
      return NextResponse.json([]);
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch products';
    const status = errorMessage.includes('timeout') ? 504 : 500;
    return NextResponse.json({ error: errorMessage }, { status });
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