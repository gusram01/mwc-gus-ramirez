import { Router } from 'express';
import {
  createUserMongoController,
  deleteUserMongoController,
  getUserMongoController,
  updateUserMongoController,
} from '../controllers';

const router = Router();

router.get('/:id', (req, res) => getUserMongoController.execute(req, res));
router.post('/', (req, res) => createUserMongoController.execute(req, res));
router.put('/:id', (req, res) => updateUserMongoController.execute(req, res));
router.delete('/:id', (req, res) =>
  deleteUserMongoController.execute(req, res),
);

export default router;
