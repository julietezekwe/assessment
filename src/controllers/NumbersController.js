import autoBind from 'auto-bind';
/**
   * Creates an instance of NumberController.
   */
class NumberController {
  /**
   * Creates an instance of NumberCnontroller.
   * @param {object} param
   * @memberof NumbersController
   */
  constructor({ numberService }) {
    this.numberService = numberService;
    autoBind(this);
  }

  /**
   * Retrieves a number
   * @param {object} req
   * @param {object} res
   *@returns {object} - number
   */
  async getNumber(req, res, next) {
    const { id } = req.params;
    try {
      const number = await this.numberService.retrieveNumber(id);
      return res.status(200).json(number);
    } catch (error) {
      return next(error);
    }
  }

  /**
   * Retrieves a number
   * @param {object} req
   * @param {object} res
   *@returns {object} - number
   */
  async getAllNumbers(req, res, next) {
    const { limit, page } = req.query;
    try {
      const number = await this
        .numberService.retrieveAllNumbers({ limit: limit || 10, page: page || 1 });
      return res.status(200).json(number);
    } catch (error) {
      return next(error);
    }
  }

  /**
   * Inserts numbers
   * @param {object} req
   * @param {object} res
   *@returns {object} - number
   */
  async createNumber(req, res, next) {
    const { number } = req.body;
    try {
      const insertedNumber = await this.numberService.createANumber({ number });
      return res.status(200).json(insertedNumber);
    } catch (error) {
      return next(error);
    }
  }


  /**
   * Inserts multiple
   * @param {object} req
   * @param {object} res
   *@returns {booleann} - true
   */
  async insertMutipleNumbers(req, res,next) {
    const { sex, age, name } = req.body;
    try {
      const number = await this.numberService.insertBulkNumbers({ sex, age, name });
      return res.status(200).json(number);
    } catch (error) {
      return next(error);
    }
  }
}

export default NumberController;
