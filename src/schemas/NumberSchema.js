
// import { SchemaTypes } from 'mongoose';
import BaseSchema from './BaseSchema';

const numberSchema = new BaseSchema({
  number: {
    type: String,
    required: true,
    index: true,
  },
});
export default numberSchema;
