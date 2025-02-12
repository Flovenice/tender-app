import ApiError from '../error/ApiError.js';
import { Purchase } from '../models/models.js';

class PurchaseController{
    async create(req, res, next) {
        try {
            const {id, purchaser, item, number, price, law, link, method, expire_date, platform, application_securing, contract_securing, contact} = req.body;
            const purchase = await Purchase.create({id, purchaser, item, number, price, law, link, method, expire_date, platform, application_securing, contract_securing, contact});
            return res.json(purchase);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let purchases = await Purchase.findAll({limit, offset});
        return res.json(purchases);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const purchase = await Purchase.findOne({where: {id}});
        return res.json(purchase);
    }
}

export default new PurchaseController();