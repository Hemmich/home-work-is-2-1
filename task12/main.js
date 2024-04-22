document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.querySelector("#addBtn");
    const modal = document.querySelector("#myModal");
    const saveBtn = document.querySelector("#saveBtn");
    const closeBtn = document.querySelector(".close");
    const dataContainer = document.querySelector("#data");

    let editIndex = -1;

    addBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        clearForm();
    });

    saveBtn.addEventListener("click", () => {
        const name = document.querySelector("#name").value;
        const phone = document.querySelector("#phone").value;
        const email = document.querySelector("#email").value;
        const status = document.querySelector("#status").value;

        if (editIndex === -1) {
            addData({ name, phone, email, status });
        } else {
            editData(editIndex, { name, phone, email, status });
            editIndex = -1;
        }

        modal.style.display = "none";
        clearForm();
        displayData();
    });

    const addData = (item) => {
        let items = localStorage.getItem("data");
        items = items ? JSON.parse(items) : [];
        items.push(item);
        localStorage.setItem("data", JSON.stringify(items));
    };

    const editData = (index, newData) => {
        let items = JSON.parse(localStorage.getItem("data"));
        items[index] = newData;
        localStorage.setItem("data", JSON.stringify(items));
    };

    const deleteData = (index) => {
        let items = JSON.parse(localStorage.getItem("data"));
        items.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(items));
        displayData();
    };

    const displayData = () => {
        let items = JSON.parse(localStorage.getItem("data"));
        if (!items) return;
        dataContainer.innerHTML = "";
        items.forEach((item, index) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <p><strong>ФИО:</strong> ${item.name}</p>
                <p><strong>Номер телефона:</strong> ${item.phone}</p>
                <p><strong>Адрес эл.почты:</strong> ${item.email}</p>
                <p><strong>Статус:</strong> ${item.status}</p>
                <button class="btn btn-secondary edit-btn" data-index="${index}">Редактировать</button>
                <button class="btn btn-danger delete-btn" data-index="${index}">Удалить</button>
            `;
            dataContainer.appendChild(div);
        });

        const editBtns = document.querySelectorAll(".edit-btn");
        editBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const index = parseInt(btn.getAttribute("data-index"));
                editIndex = index;
                const item = JSON.parse(localStorage.getItem("data"))[index];
                document.querySelector("#name").value = item.name;
                document.querySelector("#phone").value = item.phone;
                document.querySelector("#email").value = item.email;
                document.querySelector("#status").value = item.status;
                modal.style.display = "block";
            });
        });

        const deleteBtns = document.querySelectorAll(".delete-btn");
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const index = parseInt(btn.getAttribute("data-index"));
                deleteData(index);
            });
        });
    };

    const clearForm = () => {
        document.querySelector("#name").value = "";
        document.querySelector("#phone").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#status").value = "Преподаватель";
    };

    displayData();
});