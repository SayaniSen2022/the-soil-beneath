from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.product import Product
from app.models.category import Category
from app.schemas.product import ProductCreate, ProductResponse
from typing import List

router = APIRouter(prefix="/products", tags=["Products"])


@router.post("/", response_model=ProductResponse)
def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    new_product = Product(**product.dict())
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product


@router.get("/", response_model=List[ProductResponse])
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()

@router.get("/featured")
def get_featured_products(db: Session = Depends(get_db)):
    return (
        db.query(Product)
        .filter(Product.is_featured == True)
        .all()
    )

@router.get("/categories")
def get_categories(db: Session = Depends(get_db)):
    return db.query(Category).all()