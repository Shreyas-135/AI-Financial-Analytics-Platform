# 🚀 AI-Powered Financial Analytics Platform

A **production-grade full-stack application** showcasing modern tech stack expertise across frontend, backend, AI/ML, DevOps, and testing.

**Perfect portfolio project for 2026 job market** - Demonstrates mastery of 30+ technologies.

## 📊 Quick Stats

- **4 Backend Services**: Node.js, FastAPI, Spring Boot, Frontend
- **AI/ML Features**: OpenAI GPT, LangChain, RAG, Vector DB, NLP
- **Complete Testing**: Jest, Pytest, JUnit, Cypress, Selenium, Postman
- **DevOps Ready**: Docker, Kubernetes, AWS, CI/CD pipelines
- **Production Patterns**: Microservices, authentication, error handling

## 🛠️ Tech Stack

### Frontend
- React.js + Next.js + TypeScript
- Tailwind CSS + Shadcn/ui
- Zustand (state management)
- Axios + React Query

### Backends (Microservices)
- **Node.js/Express** - REST APIs, authentication
- **FastAPI** - ML pipeline, financial analysis
- **Spring Boot** - Heavy analytics, computations

### AI/ML
- OpenAI GPT API
- LangChain (RAG)
- Vector Databases
- NLP with scikit-learn

### DevOps
- Docker & Docker Compose
- Kubernetes
- AWS (ECS, RDS, S3)
- GitHub Actions CI/CD
- Nginx reverse proxy

### Databases
- MongoDB
- PostgreSQL
- Redis
- Pinecone (Vector DB)

### Testing
- Jest (JavaScript)
- Pytest (Python)
- JUnit (Java)
- Cypress (E2E)
- Selenium (UI)
- Postman (API)

## 📁 Project Structure

```
AI-Financial-Analytics-Platform/
├── frontend/                 # Next.js React dashboard
├── backend-node/             # Express.js APIs
├── backend-fastapi/          # FastAPI ML pipeline
├── backend-springboot/       # Spring Boot analytics
├── tests/                    # Comprehensive test suite
├── devops/                   # Docker, K8s, AWS configs
├── .github/workflows/        # CI/CD pipelines
├── docs/                     # Documentation
└── docker-compose.yml        # Local development
```

## 🚀 Quick Start

### Using Docker Compose (Recommended)

```bash
# Clone the repository
git clone https://github.com/Shreyas-135/AI-Financial-Analytics-Platform.git
cd AI-Financial-Analytics-Platform

# Setup environment
cp .env.example .env
# Edit .env with your API keys

# Start all services
docker-compose up -d

# Access applications
# Frontend: http://localhost:3000
# Node API: http://localhost:3001
# FastAPI: http://localhost:8000
# Spring Boot: http://localhost:8080
```

### Individual Service Setup

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Node.js Backend
```bash
cd backend-node
npm install
npm run dev
```

#### FastAPI Backend
```bash
cd backend-fastapi
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

#### Spring Boot Backend
```bash
cd backend-springboot
mvn clean install
mvn spring-boot:run
```

## 🧪 Running Tests

```bash
# All tests
npm run test:all

# Frontend tests
npm run test:frontend

# Backend tests
npm run test:backend

# E2E tests
npm run test:e2e

# API tests
npm run test:api
```

## ☸️ Kubernetes Deployment

```bash
# Create namespace
kubectl create namespace fintech

# Deploy all services
kubectl apply -f devops/kubernetes/ -n fintech

# Check status
kubectl get pods -n fintech
```

## 📚 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md)
- [API Documentation](./docs/API_DOCUMENTATION.md)
- [Setup Guide](./docs/SETUP_GUIDE.md)
- [Database Design](./docs/DATABASE_DESIGN.md)
- [Testing Strategy](./docs/TESTING_STRATEGY.md)
- [Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)
- [AI/ML Pipeline](./docs/AI_ML_PIPELINE.md)
- [Monitoring Setup](./docs/MONITORING.md)

## 🎯 Skills Showcase

✅ Languages: Java, Python, JavaScript, TypeScript, SQL
✅ Web: React, Next.js, Express, Node.js, FastAPI, Spring Boot, REST APIs
✅ Testing: Selenium, Cypress, JUnit, Postman, Pytest, BDD
✅ AI/ML: OpenAI, LangChain, RAG, Vector DB, NLP, Prompt Engineering
✅ DevOps: Docker, Kubernetes, AWS, Nginx, CI/CD, Linux, MLOps
✅ Tools: Git, Agile, Jira, Confluence, Power BI, Excel, Google Sheets
✅ Databases: MongoDB, PostgreSQL, Redis, Vector DB
✅ Methodologies: Microservices, RESTful APIs, Agile, Scrum

## 🔄 CI/CD Pipeline

Automated workflows for:
- Unit tests (Jest, JUnit, Pytest)
- Integration tests
- E2E tests (Cypress, Selenium)
- Code quality analysis
- Container builds
- AWS deployment
- Performance testing

## 📊 Project Features

### Dashboard
- Real-time financial metrics
- Interactive charts and graphs
- Data export (PDF, Excel, CSV)
- AI-powered insights

### APIs
- JWT authentication
- Rate limiting
- Request validation
- Error handling
- API documentation (Swagger)

### AI/ML
- Document analysis with RAG
- Sentiment analysis
- Entity extraction
- Report generation
- Financial recommendations

### DevOps
- Multi-container orchestration
- Auto-scaling policies
- Health checks
- Monitoring & alerting
- Centralized logging

## 🔒 Security Features

- JWT authentication
- Role-based access control (RBAC)
- Encrypted secrets management
- SQL injection prevention
- CORS configuration
- Rate limiting
- Security headers

## 📈 Performance

- Frontend bundle size: <100KB gzipped
- API response time: <200ms (p95)
- Database queries: <50ms (indexed)
- Cache hit rate: >80%

## 👨‍💻 Contributing

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🚀 Next Steps

1. Read [SETUP_GUIDE.md](./docs/SETUP_GUIDE.md) for detailed setup
2. Check [ARCHITECTURE.md](./docs/ARCHITECTURE.md) for system design
3. Review [API_DOCUMENTATION.md](./docs/API_DOCUMENTATION.md) for endpoints
4. Start with [Deployment Guide](./docs/DEPLOYMENT_GUIDE.md) for production

---

**Last Updated**: January 2026
**Status**: Active Development
**Maintained By**: Shreyas-135