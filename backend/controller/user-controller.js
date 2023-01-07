import User from '../model/User';
import bcryptjs from 'bcryptjs';

export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        return console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: 'No users found!' });
    }

    return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return console.log(err);
    }

    if (existingUser) {
        return res
            .status(400)
            .json({ message: 'User already exists, try to login!' });
    }

    const hashedPassword = bcryptjs.hashSync(password);

    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs: [],
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ user });
};

export const deleteUser = async (req, res, next) => {
    const { email, password } = req.body;
    const userId = req.params.id;

    let userDel;
    try {
        userDel = await User.findById(userId);
        if (await bcryptjs.compareSync(password, userDel.password)) {
            userDel = await User.findOneAndDelete({ email });
        }
    } catch (err) {
        return console.log(err);
    }

    if (!userDel) {
        return res.status(500).json({ message: 'Unable to delete User' });
    }

    return res.status(200).json({ userDel });
};

export const editUser = async (req, res, next) => {
    const { name, email, password, newPass } = req.body;
    const userId = req.params.id;

    let userUpdate;
    try {
        userUpdate = await User.findById(userId);
        if (await bcryptjs.compareSync(password, userUpdate.password)) {
            userUpdate = await User.findByIdAndUpdate(userId, {
                name,
                email,
                password: newPass,
            });
        }
    } catch (err) {
        return console.log(err);
    }
    if (!userUpdate) {
        return res.status(500).json({ message: 'Unable to Update the user!' });
    }
    return res.status(200).json({ userUpdate });
};

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return console.log(err);
    }

    if (!existingUser) {
        return res.status(404).json({ message: 'No User found!' });
    }

    return bcryptjs.compareSync(password, existingUser.password)
        ? res.status(200).json({ message: 'Logged In successfully!' })
        : res.status(400).json({
              message: 'Wrong Credentials detected, please enter correct ones',
          });
};
