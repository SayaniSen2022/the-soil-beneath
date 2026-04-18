from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.db.session import get_db

from app.db.session import Base, engine
from app.models import user

Base.metadata.create_all(bind=engine)

# Future imports (you'll create these next)
from app.api.v1 import auth

app = FastAPI(
    title="The Soil Beneath API",
    version="1.0.0",
    description="Backend API for The Soil Beneath ecommerce platform"
)

# CORS (important for React frontend)
origins = [
    "http://localhost:5173",  # Vite default
    "http://localhost:3000",  # CRA fallback
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health Check
@app.get("/")
def root():
    return {"message": "The Soil Beneath API is running"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

# 🔗 Include Routers (we’ll add these soon)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["Auth"])

@app.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
        return {"message": "DB connected successfully ✅"}
    except Exception as e:
        return {"error": str(e)}