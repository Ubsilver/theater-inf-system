import http from 'http';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const server = http.createServer(async (req, res) => {
    const fieldsToSelect = {
        id: true,
        photo: true,
        last_name: true,
        first_name: true,
        pol: true,
        data_rojdenia: true,
        deti: true,
        data_priema_na_rabotu: true,
        zarplata: true,
        doljnolst: true,
        podrazdelenie: true,
        zvanie_sotrudnikov: true,
        role_sotrudnika: true,
      };
  if (req.url === '/api/employees' && req.method === 'GET') {
    try {
      const employees = await prisma.sotrudniki.findMany({ select: fieldsToSelect });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(employees));
    } catch (error) {
      console.error('Error fetching employees:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
