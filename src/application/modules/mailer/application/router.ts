//@ts-nocheck

import { checkSchema } from 'express-validator';
import { Router } from 'express';
import { mailController } from '.';

const router = Router();

router.get(
  '/',
  checkSchema({
    message: {
      in: ['body'],
      errorMessage: 'message is required',
      notEmpty: true,
    },
    email: {
      in: ['body'],
      errorMessage: 'email is required',
      notEmpty: true,
    },
  }),
  (req, res) => mailController.execute(req, res),
);

export default router;
