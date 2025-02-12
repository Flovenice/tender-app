import ApiError from "../error/ApiError.js";
import { User } from '../models/models.js';
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

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден'));
        }
        const encodedPassword = bcrypt.compareSync(password, user.password);
        if (!encodedPassword) {
            return next(ApiError.badRequest('Неверный пароль'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    }

    async delete(req, res, next) {
        const {id} = req.body;
        if (!id) {
            return next(ApiError.badRequest('ID не задан'));
        }
        const candidate = await User.findOne({where: {id}});
        if (!candidate) {
            return next(ApiError.badRequest('Пользователь не существует'));
        }
        User.destroy({where: {id}});
        res.json(`Пользователь с ID ${id} успешно удален!`);
    }
}

export default new UserController();