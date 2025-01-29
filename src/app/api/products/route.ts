import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import type { IProduct } from '@/models/Product';

export async function GET() {
  try {
    console.log('Connecting to database...');
    const mongoose = await connectDB();
    if (!mongoose) {
      console.error('Database connection failed');
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    console.log('Fetching products...');
    const products = await Product.find({}).lean().exec();
    
    // Debug log to see what's in the database
    products.forEach(product => {
      console.log(`Product: ${product.name}, Image: ${product.imageUrl}`);
    });
    
    if (!products || products.length === 0) {
      return NextResponse.json([]);
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch products' },
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