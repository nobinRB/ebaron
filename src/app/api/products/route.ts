import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import type { IProduct } from '@/models/Product';

// Increased timeouts for production environment
const DB_TIMEOUT = 10000; // 10 seconds
const QUERY_TIMEOUT = 8000; // 8 seconds

export async function GET() {
  let mongoose;
  
  try {
    // Connect to database with longer timeout
    console.log('Connecting to database...');
    mongoose = await Promise.race([
      connectDB(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Database connection timeout')), DB_TIMEOUT)
      )
    ]);

    if (!mongoose) {
      console.error('Database connection failed');
      return NextResponse.json(
        { error: 'Database connection failed. Please check your connection string and network.' },
        { status: 500 }
      );
    }

    // Add index if not exists for better performance
    await Product.collection.createIndex({ name: 1 });

    console.log('Fetching products...');
    const products: IProduct[] = await Promise.race([
      Product.find({})
        .sort({ createdAt: -1 }) // Sort by newest first
        .lean()
        .exec(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Products fetch timeout')), QUERY_TIMEOUT)
      )
    ]) as IProduct[];

    // Debug logging
    if (products && products.length > 0) {
      console.log(`Found ${products.length} products`);
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
    
    return NextResponse.json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error : undefined
    }, { status });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.imageUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const product = await Product.create(body);
    return NextResponse.json(product.toObject(), { status: 201 });
    
  } catch (error) {
    console.error('Failed to create product:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create product';
    
    return NextResponse.json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error : undefined
    }, { status: 500 });
  }
}