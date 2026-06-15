import { Router, Request, Response } from 'express';
import { OpenAI } from 'openai';

const router = Router();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Generate financial report
router.post('/generate-report', async (req: Request, res: Response) => {
  try {
    const { data } = req.body;

    const message = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: `Generate a financial report based on this data: ${JSON.stringify(data)}`,
        },
      ],
    });

    res.json({ report: message.choices[0].message.content });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
