import { Schema, model } from 'mongoose';

interface IAnalytic {
  userId: string;
  type: 'revenue' | 'expense' | 'profit';
  value: number;
  date: Date;
}

const analyticSchema = new Schema<IAnalytic>({
  userId: {
    type: String,
    required: true,
    index: true,
  },
  type: {
    type: String,
    enum: ['revenue', 'expense', 'profit'],
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

export const Analytic = model<IAnalytic>('Analytic', analyticSchema);
