import express from 'express';
import {
    deleteUser,
    editUser,
    getAllUsers,
    signup,
} from '../controller/user-controller';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/signup', signup);
router.post('/delUser', deleteUser);
router.post('/editUser', editUser);

export default router;
