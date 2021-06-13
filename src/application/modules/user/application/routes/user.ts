//@ts-nocheck

import { checkSchema } from 'express-validator';
import { Router } from 'express';
import {
  createUserMongoController,
  deleteUserMongoController,
  getUserMongoController,
  updateUserMongoController,
} from '../controllers';

const router = Router();

router.get('/:id', (req, res) => getUserMongoController.execute(req, res));
router.post(
  '/',
  checkSchema({
    name: {
      in: ['body'],
      errorMessage: 'name is required',
      notEmpty: true,
    },
    email: {
      in: ['body'],
      errorMessage: 'email is required',
      isEmail: true,
    },
    username: {
      in: ['body'],
      errorMessage: 'username is required',
      notEmpty: true,
    },
    password: {
      in: ['body'],
      errorMessage: 'password is required with at least 6 char',
      isLength: { min: 6 },
    },
    countryId: {
      in: ['body'],
      errorMessage: 'countryId is required',
      notEmpty: true,
    },
  }),
  (req, res) => createUserMongoController.execute(req, res),
);
router.put('/:id', (req, res) => updateUserMongoController.execute(req, res));
router.delete('/:id', (req, res) =>
  deleteUserMongoController.execute(req, res),
);

export default router;
