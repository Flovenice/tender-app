import ApiError from '../error/ApiError.js';
import { Purchase } from '../models/models.js';

class PurchaseController{
    async create(req, res, next) {
        try {
            const {id, purchaser, item, number, price, law, link, method, expire_date, platform, application_securing, contract_securing, contact} = req.body;
            const purchase = await Purchase.create({id, purchaser, item, number, price, law, link, method, expire_date, platform, application_securing, contract_securing, contact});
            return res.json(purchase);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

export default new PurchaseController();