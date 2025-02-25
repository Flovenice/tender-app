import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Purchase = sequelize.define('purchase', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    purchaser: {type: DataTypes.STRING},
    item: {type: DataTypes.STRING},
    number: {type: DataTypes.STRING},
    price: {type: DataTypes.FLOAT},
    law: {type: DataTypes.STRING},
    link: {type: DataTypes.STRING},
    method: {type: DataTypes.STRING},
    expire_date: {type: DataTypes.DATE},
    platform: {type: DataTypes.STRING},
    application_securing: {type: DataTypes.FLOAT},
    contract_securing: {type: DataTypes.FLOAT},
    contact: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING, defaultValue: "CURRENT"}
})

User.hasMany(Purchase);
Purchase.belongsTo(User);

export {User, Purchase};