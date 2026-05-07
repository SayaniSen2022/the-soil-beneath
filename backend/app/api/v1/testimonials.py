from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db

from app.models.testimonials import Testimonials

from app.schemas.testimonials import TestimonialResponse


router = APIRouter(
    prefix="/api/v1/testimonials",
    tags=["Testimonials"]
)


@router.get(
    "/",
    response_model=list[TestimonialResponse]
)
def get_testimonials(
    db: Session = Depends(get_db)
):
    return db.query(Testimonials).all()