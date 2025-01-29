// import { NextResponse } from 'next/server';
// import connectDB from '@/lib/mongodb';
// import Product from '@/models/Product';

// export async function GET(
//   request: Request, // <-- Use `Request` instead of `NextRequest`
//   context: { params: { id: string } }
// ): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const productId = context.params.id;
//     const product = await Product.findById(productId).lean().exec();

//     if (!product) {
//       return NextResponse.json(
//         { error: 'Product not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(product);
//   } catch (error) {
//     console.error('Failed to fetch product:', error);
//     return NextResponse.json(
//       { error: error instanceof Error ? error.message : 'Failed to fetch product' },
//       { status: 500 }
//     );
//   }
// }