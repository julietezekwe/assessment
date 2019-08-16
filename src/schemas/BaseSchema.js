import { Schema } from 'mongoose';
/**
 * @description Base Mongo Schema
 * @class BaseSchema
 */
class BaseSchema extends Schema {
  /**
   * constructor
   * @param {object} definitions
   * @param {object} schemaOptions
   */
  constructor(definitions, schemaOptions) {
    const defaultDefinition = {};
    super(
      { ...defaultDefinition, ...definitions },
      { ...schemaOptions },
    );
  }
}
export default BaseSchema;
