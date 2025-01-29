import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.toLowerCase();

    console.log('Search query:', query);

    if (!query) {
      return NextResponse.json([]);
    }

    // Connect to database
    await dbConnect();
    console.log('Connected to MongoDB');

    // Search products using MongoDB's text search and regex for partial matches
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } }
      ]
    }).limit(10); // Limit to 10 results for better performance

    console.log('Found products:', products.length);
    
    return NextResponse.json(products);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Failed to search products' }, { status: 500 });
  }
}
