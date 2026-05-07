from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    email: EmailStr
    password: str

    first_name: Optional[str] = None
    last_name: Optional[str] = None
    phone: Optional[str] = None


class UserResponse(BaseModel):
    id: int
    email: EmailStr
    first_name: Optional[str]
    last_name: Optional[str]
    phone: Optional[str]


class UserLogin(BaseModel):
    email: EmailStr
    password: str

    class Config:
        from_attributes = True