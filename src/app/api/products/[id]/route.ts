import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';

interface RouteSegmentConfig {
  params: {
    id: string
  }
}

export async function GET(
  _request: NextRequest,
  context: RouteSegmentConfig
) {
  try {
    await connectDB();
    const productId = context.params.id;
    const product = await Product.findById(productId).lean().exec();

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch product' },
      { status: 500 }
    );
  }
}