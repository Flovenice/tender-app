import dotenv from 'dotenv';
import express from 'express';
import sequelize from './db.js';
import { User, Purchase} from './models/models.js';
import cors from 'cors';
import router from '../server/routes/index.js';
import errorHandler from '../server/middleware/ErrorHandlingMiddleware.js';
import authMiddleware from './middleware/authMiddleware.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(authMiddleware);

app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start();
