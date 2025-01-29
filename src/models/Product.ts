import mongoose, { Document, Schema } from 'mongoose';

interface IReview {
  userId: mongoose.Types.ObjectId;
  rating: number;
  comment?: string;
  createdAt: Date;
}

export interface IProduct extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
  ratings: number;
  reviews: IReview[];
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a product description'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a product price'],
    min: [0, 'Price cannot be negative'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide a product image URL'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a product category'],
  },
  stock: {
    type: Number,
    required: [true, 'Please provide stock quantity'],
    min: [0, 'Stock cannot be negative'],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [{
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
}, {
  timestamps: true,
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema); 