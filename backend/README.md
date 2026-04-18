# 🌱 The Soil Beneath — Backend

Backend service for **The Soil Beneath**, an ecommerce platform for plants and gardening products.
Built using **FastAPI, PostgreSQL, and SQLAlchemy**.

---

## 🚀 Tech Stack

* **FastAPI** — Web framework
* **PostgreSQL** — Database
* **SQLAlchemy** — ORM
* **uv** — Virtual environment & package manager
* **JWT** — Authentication (planned)

---

## 📁 Project Structure

```
backend/
│
├── app/
│   ├── main.py
│   ├── core/
│   ├── db/
│   ├── models/
│   ├── schemas/
│   ├── api/
│   ├── services/
│
├── .env
├── requirements.txt
└── README.md
```

---

## ⚙️ Initial Setup

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd the-soil-beneath/backend
```

---

### 2. Create Virtual Environment (uv)

```bash
uv venv
```

---

### 3. Activate Environment

#### Mac/Linux

```bash
source .venv/bin/activate
```

#### Windows

```bash
.venv\Scripts\activate
```

---

### 4. Install Dependencies

```bash
uv pip install -r requirements.txt
```

---

### 5. Environment Variables

Create a `.env` file in the root:

```
DATABASE_URL=postgresql://username:password@localhost:5432/soil_beneath
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

---

### 6. Run the Server

```bash
uvicorn app.main:app --reload
```

---

### 7. API Docs

* Swagger UI: http://127.0.0.1:8000/docs
* ReDoc: http://127.0.0.1:8000/redoc

---

## 📦 Dependencies

Key packages used:

* fastapi
* uvicorn
* sqlalchemy
* psycopg2-binary
* python-jose
* passlib[bcrypt]
* python-dotenv
* pydantic

---

## 🔐 Upcoming Features

* User Authentication (JWT)
* Product APIs
* Cart & Orders
* Payment Integration

---

## 🧠 Development Workflow

### Add new package

```bash
uv pip install <package>
uv pip freeze > requirements.txt
```

### Setup on new machine

```bash
uv venv
source .venv/bin/activate
uv pip install -r requirements.txt
```

---

## ⚠️ Notes

* Do not commit `.venv/`
* Keep `.env` private
* Always hash passwords (never store plain text)

---

## 📌 Status

🚧 Currently under active development
