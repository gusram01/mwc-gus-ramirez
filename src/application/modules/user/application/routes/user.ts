import { Router } from 'express';
import { getUserMongoController } from '../controllers';

const router = Router();

router.get('/:id', (req, res) => getUserMongoController.execute(req, res));

export default router;
