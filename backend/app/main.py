from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from sqlalchemy.orm import Session
from sqlalchemy import text

from app.db.session import get_db
from app.db.session import Base, engine

# routers
from app.api.v1 import auth
from app.api.v1 import products
from app.api.v1.testimonials import router as testimonial_router

# models
from app.models import user
from app.models import product
from app.models import category
from app.models import testimonials

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="The Soil Beneath API",
    version="1.0.0",
    description="Backend API for The Soil Beneath ecommerce platform"
)

app.mount("/static", StaticFiles(directory="static"), name="static")

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://the-soil-beneath.pages.dev",],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "The Soil Beneath API is running"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
        return {"message": "DB connected successfully ✅"}
    except Exception as e:
        return {"error": str(e)}

# routers
app.include_router(auth.router, prefix="/api/v1/auth", tags=["Auth"])

app.include_router(products.router, prefix="/api/v1")

app.include_router(testimonial_router)