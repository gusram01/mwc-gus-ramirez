import { Router } from 'express';
import { getUserController } from '../controllers';

const router = Router();

router.get('/:id', (req, res) => getUserController.execute(req, res));

export default router;
