from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class TestimonialResponse(BaseModel):
    id: int

    customer_name: str

    location: Optional[str] = None

    rating: int

    remarks: str

    date_posted: datetime

    class Config:
        from_attributes = True