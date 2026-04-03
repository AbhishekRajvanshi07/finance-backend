const prisma = require('../config/db');
const { createTransactionSchema } = require('../validators/transaction.validator');

exports.createTransaction = async (req, res, next) => {
  try {
    const parsed = createTransactionSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.errors
      });
    }

    const { amount, type, category, date, notes } = parsed.data;

    const transaction = await prisma.transaction.create({
      data: {
        amount,
        type,
        category,
        date: new Date(date),
        notes,
        createdBy: req.user.userId,
      },
    });

    res.status(201).json({
      success: true,
      data: transaction
    });

  } catch (err) {
    next(err);
  }
};

exports.getTransactions = async (req, res, next) => {
  try {
    let { type, category, startDate, endDate, page = 1, limit = 10 } = req.query;

    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;

    const filters = {
      createdBy: req.user.userId
    };

    if (type) filters.type = type;
    if (category) filters.category = category;

    if (startDate || endDate) {
      filters.date = {};
      if (startDate) filters.date.gte = new Date(startDate);
      if (endDate) filters.date.lte = new Date(endDate);
    }

    const transactions = await prisma.transaction.findMany({
      where: filters,
      skip: (pageNum - 1) * limitNum,
      take: limitNum,
      orderBy: { date: 'desc' },
    });

    res.json(transactions);

  } catch (err) {
    next(err);
  }
};

exports.updateTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updated = await prisma.transaction.updateMany({
      where: {
        id,
        createdBy: req.user.userId
      },
      data: req.body,
    });

    if (updated.count === 0) {
      return res.status(404).json({ error: "Transaction not found or unauthorized" });
    }

    res.json({ message: "Updated successfully" });

  } catch (err) {
    next(err);
  }
};

exports.deleteTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await prisma.transaction.deleteMany({
      where: {
        id,
        createdBy: req.user.userId
      },
    });

    if (deleted.count === 0) {
      return res.status(404).json({ error: "Transaction not found or unauthorized" });
    }

    res.json({ message: "Deleted successfully" });

  } catch (err) {
    next(err);
  }
};