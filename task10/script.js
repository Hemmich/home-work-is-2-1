document.addEventListener("DOMContentLoaded", () => {
    const addProductBtn = document.querySelector("#addProductBtn");
    const addCategoryBtn = document.querySelector("#addCategoryBtn");
    const productModal = document.querySelector("#productModal");
    const categoryModal = document.querySelector("#categoryModal");
    const closeBtns = document.querySelectorAll(".close");
    const addProduct = document.querySelector("#addProduct");
    const addCategory = document.querySelector("#addCategory");
    const productNameInput = document.querySelector("#productName");
    const categoryNameInput = document.querySelector("#categoryName");
    const categorySelect = document.querySelector("#categorySelect");
    const productList = document.querySelector("#productList");
    const categoryList = document.querySelector("#categoryList");
    const addManufacturerBtn = document.querySelector("#addManufacturerBtn");
    const manufacturerModal = document.querySelector("#manufacturerModal");
    const addManufacturer = document.querySelector("#addManufacturer");
    const manufacturerNameInput = document.querySelector("#manufacturerName");
    const manufacturerName1Input = document.querySelector("#manufacturerName1");
    const manufacturerName2Input = document.querySelector("#manufacturerName2");
    const manufacturerList = document.querySelector("#manufacturerList");
    const manufacturerSelect = document.querySelector("#manufacturerSelect");


    // Функция для открытия модального окна
    const openModal = (modal) => {
        modal.style.display = "block";
    }

    // Функция для закрытия модального окна
    const closeModal = (modal) => {
        modal.style.display = "none";
    }

    // Обработчики событий для открытия модальных окон
    addProductBtn.addEventListener("click", () => openModal(productModal));
    addCategoryBtn.addEventListener("click", () => openModal(categoryModal));
    addManufacturerBtn.addEventListener("click", () => openModal(manufacturerModal));

    // Обработчики событий для закрытия модальных окон
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener("click", () => closeModal(closeBtn.parentNode.parentNode));
    });

    // Добавление товара
    addProduct.addEventListener("click", () => {
        const productName = productNameInput.value;
        const categoryValue = categorySelect.value;
        const manufacturerValue = manufacturerSelect.value;
        const manufacturerValue1 = manufacturerSelect.value;
        const manufacturerValue2 = manufacturerSelect.value;
        if (productName && categoryValue && manufacturerValue) {
            const productItem = document.createElement("li");
            productItem.textContent = productName + " (" + categoryValue + "), (" + manufacturerValue + ") ";
            productList.appendChild(productItem);
            productNameInput.value = "";
            closeModal(productModal);
        } else {
            alert("Пожалуйста, введите название товара и выберите категорию.");
        }
    });

    // Добавление категории
    addCategory.addEventListener("click", () => {
        const categoryName = categoryNameInput.value;
        if (categoryName) {
            const categoryItem = document.createElement("li");
            categoryItem.textContent = categoryName;
            categoryList.appendChild(categoryItem);
            // Обновление опций выбора категорий
            const option = document.createElement("option");
            option.text = categoryName;
            option.value = categoryName;
            categorySelect.add(option);
            categoryNameInput.value = "";
            closeModal(categoryModal);
        } else {
            alert("Пожалуйста, введите название категории.");
        }
    });

    addManufacturer.addEventListener("click", () => {
        const manufacturerName = manufacturerNameInput.value;
        const manufacturerAddress = manufacturerName1Input.value;
        const manufacturerPhone = manufacturerName2Input.value;
        
        if (manufacturerName && manufacturerAddress && manufacturerPhone) {
            const manufacturerItem = document.createElement("li");
            manufacturerItem.textContent = `${manufacturerName}, ${manufacturerAddress}, ${manufacturerPhone}`;
            manufacturerList.appendChild(manufacturerItem);
    
            // Обновление опций выбора категорий
            const option = document.createElement("option");
            option.text = manufacturerName + ", " + manufacturerAddress + ", " + manufacturerPhone;
            option.value = manufacturerName + ", " + manufacturerAddress + ", " + manufacturerPhone;
            manufacturerSelect.add(option);
    
            // Очистка полей ввода
            manufacturerNameInput.value = "";
            manufacturerName1Input.value = "";
            manufacturerName2Input.value = "";
    
            closeModal(manufacturerModal);
        } else {
            alert("Пожалуйста, заполните все поля.");
        }
    });
});