import ApiError from "../error/ApiError.js";
import { Purchase, User } from '../models/models.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const generateJwt = function(id, email, role) {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'});
}

class UserController{
    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Неверный email или пароль'));
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь уже существует'));
        }
        const hashedPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, password: hashedPassword, role});
        const token = generateJwt(user.id, user.email, user.role);

        return res.json({token});
    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('ID not defined!'));
        }
        res.json(id);
    }
}

export default new UserController();