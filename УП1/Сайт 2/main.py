import random
from datetime import datetime, timedelta

# База данных номеров
rooms = [
    {
        "id": 1,
        "name": "Стандарт",
        "price": 1000,
        "size": 10,
        "pets": True,
        "image": "room1.jpg",
        "available": True,
        "bookings": []
    },
    {
        "id": 2,
        "name": "Комфорт",
        "price": 1500,
        "size": 15,
        "pets": True,
        "image": "room2.jpg",
        "available": True,
        "bookings": []
    },
    {
        "id": 3,
        "name": "Люкс",
        "price": 2000,
        "size": 20,
        "pets": False,
        "image": "room3.jpg",
        "available": True,
        "bookings": []
    },
    {
        "id": 4,
        "name": "Семейный",
        "price": 2500,
        "size": 25,
        "pets": True,
        "image": "room4.jpg",
        "available": True,
        "bookings": []
    },
    {
        "id": 5,
        "name": "Президентский",
        "price": 3000,
        "size": 30,
        "pets": False,
        "image": "room5.jpg",
        "available": True,
        "bookings": []
    },
    {
        "id": 6,
        "name": "Апартаменты",
        "price": 3500,
        "size": 35,
        "pets": True,
        "image": "room6.jpg",
        "available": True,
        "bookings": []
    }
]

# База данных отзывов
reviews = [
    "Отличный отель! Номер чистый и уютный, персонал приветливый.",
    "Останавливались здесь с питомцем, все прошло замечательно.",
    "Номер был немного тесноват, но в целом все понравилось.",
    "Единственный минус - отсутствие парковки.",
    "Очень красивый отель, но цены немного завышены."
]

# Загрузка главной страницы
def index():
    # Получение данных из базы данных
    header = get_header()
    rooms = get_rooms()
    reviews = get_reviews()
    contacts = get_contacts()

    # Отрисовка страницы
    return render_template("index.html", header=header, rooms=rooms, reviews=reviews, contacts=contacts)

# Загрузка каталога номеров
def rooms():
    # Получение данных из базы данных
    rooms = get_rooms()

    # Отрисовка страницы
    return render_template("rooms.html", rooms=rooms)

# Обработка фильтрации и сортировки номеров
@app.route("/rooms/filter", methods=["POST"])
def rooms_filter():
    # Получение параметров фильтрации и сортировки из запроса
    filter_data = request.form.to_dict()

    # Фильтрация номеров по заданным параметрам
    filtered_rooms = filter_rooms(rooms, filter_data)

    # Сортировка номеров по заданному параметру
    sorted_rooms = sort_rooms(filtered_rooms, filter_data.get("sort_by"))

    # Отрисовка страницы с отфильтрованными и отсортированными номерами
    return render_template("rooms.html", rooms=sorted_rooms)

# Обработка бронирования номера
@app.route("/rooms/book/<int:room_id>", methods=["POST"])
def book_room(room_id):
    # Получение данных бронирования из запроса
    booking_data = request.form.to_dict()

    # Валидация данных бронирования
    if not validate_booking(booking_data):
        flash("Некорректно заполнены поля формы.")
        return redirect(url_for("rooms"))

    # Проверка доступности номера на указанные даты
    if not check_room_availability(room_id, booking_data["checkin"], booking_data["checkout"]):
        flash("Номер недоступен на указанные даты.")
        return redirect(url_for("rooms"))

    # Создание новой брони
    new_booking = create_booking(room_id, booking_data)

    # Отрисовка страницы с сообщением об успешном бронировании
    return render_template("booking_success.html", booking=new_booking)

# Загрузка панели управления сайтом
@app.route("/admin")
def admin():
    # Проверка авторизации администратора
    if not is_admin_logged_in():
        return redirect(url_for("login"))

    # Получение данных из базы данных
    bookings = get_bookings()

    # Отрисовка страницы с данными о бронях
    return render_template("admin.html", bookings=bookings)

# Обработка фильтров броней
@app.route("/admin/filter", methods=["POST"])
def admin_filter():
    # Получение параметров фильтрации из запроса
    filter_da
ta = request.form.to_dict()

    # Фильтрация броней по заданным параметрам
    filtered_bookings = filter_bookings(bookings, filter_data)

    # Отрисовка страницы с отфильтрованными бронями
    return render_template("admin.html", bookings=filtered_bookings)

# Обработка одобрения брони
@app.route("/admin/approve/<int:booking_id>")
def approve_booking(booking_id):
    # Одобрение брони
    approve_booking(booking_id)

    # Перенаправление на страницу с бронями
    return redirect(url_for("admin"))

# Обработка удаления брони
@app.route("/admin/delete/<int:booking_id>")
def delete_booking(booking_id):
    # Удаление брони
    delete_booking(booking_id)

    # Перенаправление на страницу с бронями
    return redirect(url_for("admin"))