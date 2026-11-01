# Duckyvibes — Full-Stack E-Commerce Website

Duckyvibes is a full-stack e-commerce web application developed using **Python and Django**. It demonstrates the development of an online shopping platform, combining frontend functionality with backend application logic and database management.

## Features

- **Product Management:** Browse and view available products.
- **User Authentication:** User registration and login.
- **Shopping Cart:** Add and manage products in a shopping cart.
- **Wishlist:** Save products for later.
- **Admin Management:** Manage products and store content through Django's admin interface.
- **Database Integration:** Store application data using SQLite.
- **JSON Data Handling:** Use JSON for structured data exchange and handling.

## Technology Stack

| Technology | Purpose |
|---|---|
| Python | Backend programming |
| Django | Web framework |
| SQLite | Database |
| JSON | Structured data handling |
| HTML | Page structure |
| CSS | Styling |
| JavaScript | Frontend interactivity |

## Project Structure

```text
Duckyvibes/
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   └── ...
└── ...
```

## Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/hussainazzam100-ctrl/Webdev_Project.git
cd Webdev_Project/Duckyvibes/backend
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate it:

**Windows**
```bash
venv\Scripts\activate
```

**Linux / macOS**
```bash
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Apply database migrations

```bash
python manage.py migrate
```

### 5. Run the development server

```bash
python manage.py runserver
```

Open `http://127.0.0.1:8000/` in your browser.

## Project Purpose

Duckyvibes was developed to apply practical full-stack web development concepts, including:

- Django application development
- Backend logic and database integration
- User authentication
- CRUD operations
- E-commerce functionality
- Frontend and backend integration
- Structured data handling

## Author

**Hussain Azzam**

Computer Science Undergraduate

[GitHub Profile](https://github.com/hussainazzam100-ctrl)

---

*Duckyvibes is a learning and portfolio project.*
