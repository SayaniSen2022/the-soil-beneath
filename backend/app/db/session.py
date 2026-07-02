from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

print("=" * 80)
print("DATABASE_URL:", repr(DATABASE_URL))
print("=" * 80)

engine = create_engine(DATABASE_URL, pool_pre_ping=True) # to keep long-lived db connections healthy

SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False
)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()