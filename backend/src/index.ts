import express, { Request, Response, RequestHandler } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from the backend!');
});

const contactHandler: RequestHandler = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const newContact = await prisma.contact.create({
            data: {
                name,
                email,
                subject,
                message,
            },
        });
        res.status(201).json(newContact);
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({ error: 'Failed to create contact entry.' });
    }
};

app.post('/api/contact', contactHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
