import mongoose from 'mongoose';

import User from './user';

import {DATABASE_URL} from '../config/development';

const connectDb = () => {
  
  if (process.env.NODE_ENV == 'development') {
    return mongoose.connect(
      DATABASE_URL,
      { useNewUrlParser: true },
    );
  }

  if (process.env.NODE_ENV == 'production') {
    return mongoose.connect(
      DATABASE_URL,
      { useNewUrlParser: true },
    );
  }
};

const models = { User };

export { connectDb };

export default models;
