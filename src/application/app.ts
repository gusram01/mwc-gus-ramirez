import express from 'express';
import helmet from 'helmet';

import router from './router';

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());

app.use('/user', router.user);

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
