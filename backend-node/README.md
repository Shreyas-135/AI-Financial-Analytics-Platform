# Node.js/Express Backend

REST API backend for Financial Analytics Platform.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 🗂️ Structure

```
src/
├── config/        # Configuration files
├── middleware/    # Express middleware
├── models/        # Mongoose schemas
├── routes/        # API routes
├── services/      # Business logic
├── __tests__/     # Tests
└── server.ts      # Entry point
```

## 📚 API Routes

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Analytics
- `GET /api/analytics/dashboard` - Get dashboard data
- `GET /api/analytics/metrics` - Get metrics

### AI
- `POST /api/ai/generate-report` - Generate financial report

## 🧪 Testing

```bash
npm test
```
