from sqlalchemy.orm import Session
from app.models.user import User
from app.core.security import hash_password, verify_password


def create_user(db: Session, user_data):
    existing_user = db.query(User).filter(User.email == user_data.email).first()

    if existing_user:
        return None

    new_user = User(
        email=user_data.email,
        hashed_password=hash_password(user_data.password),
        first_name=user_data.first_name,
        last_name=user_data.last_name,
        phone=user_data.phone
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


def authenticate_user(db: Session, email: str, password: str):
    user = db.query(User).filter(User.email == email).first()

    if not user:
        return None

    try:
        if not verify_password(password, user.hashed_password):
            return None
    except Exception as e:
        print("VERIFY ERROR:", e)
        return None

    return user