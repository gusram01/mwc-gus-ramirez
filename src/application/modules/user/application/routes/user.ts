import { Router } from 'express';
import {
  createUserMongoController,
  getUserMongoController,
} from '../controllers';

const router = Router();

router.get('/:id', (req, res) => getUserMongoController.execute(req, res));
router.post('/', (req, res) => createUserMongoController.execute(req, res));

export default router;
