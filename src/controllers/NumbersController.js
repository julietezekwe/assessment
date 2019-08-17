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
  async getNumber(req, res) {
    const { id } = req.params;
    try {
      const number = await this.numberService.retrieveNumber(id);
      return res.status(200).json(number);
    } catch (error) {
      return res.json(error);
    }
  }

  /**
   * Retrieves a number
   * @param {object} req
   * @param {object} res
   *@returns {object} - number
   */
  async getAllNumbers(req, res) {
    const { limit, page } = req.query;
    try {
      const number = await this
        .numberService.retrieveAllNumbers({ limit: limit || 10, page: page || 1 });
      return res.status(200).json(number);
    } catch (error) {
      return res.json(error);
    }
  }

  /**
   * Inserts numbers
   * @param {object} req
   * @param {object} res
   *@returns {object} - number
   */
  async createNumber(req, res) {
    const { number } = req.body;
    try {
      const insertedNumber = await this.numberService.createANumber({ number });
      return res.status(200).json(insertedNumber);
    } catch (error) {
      return res.json(error);
    }
  }


  /**
   * Inserts multiple
   * @param {object} req
   * @param {object} res
   *@returns {booleann} - true
   */
  async insertMutipleNumbers(req, res) {
    const { sex, age, name } = req.body;
    try {
      const number = await this.numberService.insertBulkNumbers({ sex, age, name });
      return res.status(200).json(number);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default NumberController;
