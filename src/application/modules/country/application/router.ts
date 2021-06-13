import { Router } from 'express';
import { countriesController } from '.';

const router = Router();

router.get('/', (req, res) => countriesController.execute(req, res));

export default router;
