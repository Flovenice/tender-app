import ApiError from "../error/ApiError.js";

class UserController{
    async registration(req, res) {
        const {email, password, role} = req.query;
        
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