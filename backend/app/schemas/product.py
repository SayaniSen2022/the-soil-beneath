from pydantic import BaseModel
from typing import Optional
from app.schemas.category import CategoryResponse


class ProductCreate(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    image_url: Optional[str] = None

    category_id: int

    stock: Optional[int] = 0

    is_featured: Optional[bool] = False


class ProductResponse(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    price: float

    image_url: Optional[str] = None

    stock: int

    is_featured: bool

    category: Optional[CategoryResponse]

    class Config:
        from_attributes = True