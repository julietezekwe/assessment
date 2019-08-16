import autoBind from 'auto-bind';
/**
   * Creates an instance of NumberServices.
   */
class NumberService {
  /**
   * Creates an instance of NumberServices.
   * @param {object} param
   * @memberof NumberServices
   */
  constructor({ numberRepository, redis }) {
    this.numberRepository = numberRepository;
    this.redis = redis;
    autoBind(this);
  }

  /**
   * Retrieves number
   * @param {number} - id
   *@returns {object} - number
   */
  async retrieveNumber(id) {
    try {
      let number;
      // retrieve number from redis
      number = await this.redis.getObject('id', id);
      if (number && Object.entries(number).length > 0) {
        return number;
      }
      number = await this.numberRepository.findById(id);
      return number;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Retrieves all numbers
   * @param {number} - query
   *@returns {object} - number
   */
  async retrieveAllNumbers(options) {
    try {
      const numbers = await this.numberRepository.findAll(options);
      return numbers;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Inserts bulk numbers
   *@returns {object} - success
   */
  async insertBulkNumbers() {
    try {
      const success = await this.numberRepository.bulkInsert();
      return success;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Retrieves number details
   * @param {number} - id
   *@returns {object} - number
   */
  async createANumber(options) {
    try {
      const numbers = await this.numberRepository.create(options);
      return numbers;
    } catch (error) {
      throw error;
    }
  }
}
export default NumberService;
