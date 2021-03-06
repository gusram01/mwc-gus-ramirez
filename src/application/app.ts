import express from 'express';
import helmet from 'helmet';

import router from './router';

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());

app.use('/', router.auth);
app.use('/user', router.user);
app.use('/countries', router.country);
app.use('/notification', router.mail);

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
