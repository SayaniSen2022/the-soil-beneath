from pydantic import BaseModel
from typing import Optional

class CategoryResponse(BaseModel):
    id: int
    name: str
    image_url: Optional[str] = None

    class Config:
        from_attributes = True