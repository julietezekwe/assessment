import { Router } from 'express';

const NumbersRoute = ({ numbersController }) => {
  const router = Router();
  router.get('/:id', numbersController.getNumber);
  router.get('/', numbersController.getAllNumbers);
  router.post('/', numbersController.createNumber);
  router.post('/bulk', numbersController.insertMutipleNumbers);
  return router;
};
export default NumbersRoute;
