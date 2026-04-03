const prisma = require('../config/db');

exports.getSummary = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const income = await prisma.transaction.aggregate({
      _sum: { amount: true },
      where: { type: "INCOME", createdBy: userId }
    });

    const expense = await prisma.transaction.aggregate({
      _sum: { amount: true },
      where: { type: "EXPENSE", createdBy: userId }
    });

    res.json({
      totalIncome: income._sum.amount || 0,
      totalExpense: expense._sum.amount || 0,
      netBalance: (income._sum.amount || 0) - (expense._sum.amount || 0)
    });

  } catch (err) {
    next(err);
  }
};

exports.getTrends = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const transactions = await prisma.transaction.findMany({
      where: { createdBy: userId }
    });

    const trends = {};

    transactions.forEach(t => {
      const month = new Date(t.date).toISOString().slice(0, 7);

      if (!trends[month]) {
        trends[month] = { income: 0, expense: 0 };
      }

      if (t.type === "INCOME") {
        trends[month].income += t.amount;
      } else {
        trends[month].expense += t.amount;
      }
    });

    res.json(trends);

  } catch (err) {
    next(err);
  }
};