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

    try {
        await User.findOne({ email })
            .then((userData) => {
                console.log(userData.name);
                return userData.password;
            })
            .then(async (passDB) => {
                // console.log(passDB);

                if (await bcryptjs.compareSync(password, passDB)) {
                    // console.log('Password matched!!');
                    await User.findOneAndDelete({ email });
                    return res.status(201).json({
                        message: 'User found & has been deleted successfully!!',
                    });
                } else {
                    return res.status(400).json({
                        message:
                            "Wrong User's credentials detected, please enter correct one!",
                    });
                }
            })
            .catch((err) => {
                return console.log(err);
            });
    } catch (err) {
        return console.log(err);
    }
};

export const editUser = async (req, res, next) => {
    const { newName, oldEmail, newEmail, oldPassword, newPassword } = req.body;

    try {
        if (!(await User.findOne({ email: oldEmail }))) {
            return res.status(400).json({ message: 'User does not exist!' });
        }

        await User.findOne({ email: oldEmail })
            .then((userData) => {
                // console.log(userData);
                return userData;
            })
            .then(async (userData) => {
                if (
                    await bcryptjs.compareSync(oldPassword, userData.password)
                ) {
                    const newHashedPassword = bcryptjs.hashSync(newPassword);
                    await User.findOneAndUpdate(
                        { email: oldEmail },
                        {
                            name: newName,
                            email: newEmail,
                            password: newHashedPassword,
                        }
                    );

                    return res.status(201).json({ message: 'Data updated!' });
                } else {
                    return res.status(400).json({
                        message:
                            "Wrong User's credentials detected, please enter correct one!",
                    });
                }
            })
            .catch((err) => {
                return console.log(err);
            });
    } catch (err) {
        return console.log(err);
    }
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
