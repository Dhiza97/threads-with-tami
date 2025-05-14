import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB disconnected');
  });

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/threadswithtami` as string);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

connectDB();