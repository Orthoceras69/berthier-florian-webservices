import express from 'express';
import usersController from '#src/controllers/usersController'
import authGard from '#src/middleware/authGard'
const router = express.Router();


router.get('/',authGard.protect,usersController.allUsers);

router.post('/',usersController.createUser);

export default router;