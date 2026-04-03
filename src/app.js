require('dotenv').config();
const express = require('express');
const cors = require('cors');
const prisma = require('./config/db');
const testRoutes = require('./routes/test.routes');

const app = express();
const authRoutes = require('./routes/auth.routes');
app.use(cors());
app.use(express.json());


const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

app.use(helmet());

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

const transactionRoutes = require('./routes/transaction.routes');

app.use('/transactions', transactionRoutes);

const dashboardRoutes = require('./routes/dashboard.routes');

app.use('/dashboard', dashboardRoutes);

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));




app.use('/test', testRoutes);
app.use('/auth', authRoutes);

// health
app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

// example route
app.get('/', (req, res) => res.json({ message: 'Finance backend up' }));
app.get('/test-db', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// catch-all error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'internal error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));