import { Router, Request, Response } from 'express';
import { Analytic } from '@/models/Analytic';

const router = Router();

// Get dashboard metrics
router.get('/dashboard', async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);

    const analytics = await Analytic.find({
      userId,
      date: { $gte: startDate },
    }).sort({ date: 1 });

    const revenue = analytics
      .filter((a) => a.type === 'revenue')
      .reduce((sum, a) => sum + a.value, 0);
    const expenses = analytics
      .filter((a) => a.type === 'expense')
      .reduce((sum, a) => sum + a.value, 0);

    res.json({
      revenue,
      expenses,
      profit: revenue - expenses,
      analytics,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dashboard' });
  }
});

// Get metrics by period
router.get('/metrics', async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;
    const period = (req.query.period as string) || 'month';

    let startDate = new Date();
    if (period === 'week') startDate.setDate(startDate.getDate() - 7);
    else if (period === 'month') startDate.setMonth(startDate.getMonth() - 1);
    else if (period === 'year') startDate.setFullYear(startDate.getFullYear() - 1);

    const metrics = await Analytic.find({
      userId,
      date: { $gte: startDate },
    });

    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
});

export default router;
