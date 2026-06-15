# Financial Analytics Frontend

Next.js + React + TypeScript dashboard for the AI-Powered Financial Analytics Platform.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build
```bash
npm run build
npm start
```

## 📁 Structure

```
frontend/
├── pages/              # Next.js pages
├── components/         # Reusable React components
├── hooks/              # Custom React hooks
├── services/           # API client services
├── store/              # Zustand state management
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── __tests__/          # Jest tests
├── cypress/            # E2E tests
└── public/             # Static assets
```

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run test:e2e
```

## 📦 Dependencies

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Zustand**: State management
- **React Query**: Data fetching
- **Recharts**: Visualizations
- **React Hook Form**: Form handling
- **Axios**: HTTP client

## 🎨 Features

- Responsive dashboard
- Real-time data visualization
- Authentication & authorization
- Financial data analysis
- AI-powered insights
- Export to PDF/Excel
- Dark mode support

## 🔑 Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_FASTAPI_URL=http://localhost:8000
```
