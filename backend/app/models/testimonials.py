from sqlalchemy import (Column, Integer, String, TIMESTAMP,Text, text)
from app.db.session import Base

class Testimonials(Base):
  __tablename__ = "testimonials"
  
  id = Column(Integer, primary_key=True, index=True)
  customer_name = Column(String(100), nullable=False)
  location = Column(String(100))
  rating = Column(Integer, nullable=False)
  remarks = Column(Text, nullable=False)
  date_posted = Column(TIMESTAMP, server_default=text("CURRENT_TIMESTAMP"))