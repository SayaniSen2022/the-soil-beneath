from sqlalchemy import (Column, Integer, String, TIMESTAMP, text)
from sqlalchemy.orm import relationship
from app.db.session import Base

class Category(Base):
  __tablename__ = "categories"
  
  id = Column(Integer, primary_key=True, index=True)
  name = Column(String, unique=True, nullable=False)
  image_url = Column(String)
  created_at = Column(TIMESTAMP, server_default=text("CURRENT_TIMESTAMP"))
  products = relationship("Product", back_populates="category")
