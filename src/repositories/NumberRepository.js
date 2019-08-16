import BaseRepository from './BaseRepository';
import numberSchema from '../schemas/NumberSchema';
/**
 * @description BaseRepository
 * @class BaseRepository
 */
class NumberRepository extends BaseRepository {
  /**
   * NumberRepository constructor
   */
  constructor({ db }) {
    super('Number', numberSchema, db);
  }
}
export default NumberRepository;
