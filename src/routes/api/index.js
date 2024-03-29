import express from 'express';
import ping from './ping.js';
import auth from './auth.js';
import users from './users.js';
import projects from './projects.js';
import skills from './skills.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});

router.use('/ping', ping);
router.use('/auth', auth);
router.use('/users', users);
router.use('/projects', projects);
router.use('/skills', skills)

export default router;
