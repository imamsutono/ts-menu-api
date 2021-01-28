/**
 * Required external modules
 */

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

/**
 * App variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 * App configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
