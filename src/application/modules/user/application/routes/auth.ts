//@ts-nocheck

import { checkSchema } from 'express-validator';
import { Router } from 'express';
import {
  registerUserMongoController,
  loginUserMongoController,
} from '../controllers';

const router = Router();

router.get(
  '/login',
  checkSchema({
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
      errorMessage: 'password is required',
      isLength: {
        errorMessage: 'At least 6 chars',
        options: { min: 6 },
      },
    },
  }),
  (req, res) => loginUserMongoController.execute(req, res),
);
router.post(
  '/register',
  checkSchema({
    name: {
      in: ['body'],
      errorMessage: 'name is required',
      notEmpty: true,
    },
    email: {
      in: ['body'],
      errorMessage: 'email is required',
      notEmpty: true,
    },
    username: {
      in: ['body'],
      errorMessage: 'username is required',
      notEmpty: true,
    },
    password: {
      in: ['body'],
      errorMessage: 'password is required',
      isLength: {
        errorMessage: 'At least 6 chars, max 54 chars',
        options: { min: 6, max: 54 },
      },
    },
    countryId: {
      in: ['body'],
      errorMessage: 'countryId is required',
      notEmpty: true,
    },
  }),
  (req, res) => registerUserMongoController.execute(req, res),
);

export default router;
