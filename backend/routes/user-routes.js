import express from 'express';
import { deleteUser, getAllUsers, signup } from '../controller/user-controller';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/signup', signup);
router.post('/delUser', deleteUser);

export default router;
