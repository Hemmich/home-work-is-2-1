function addContract() {
    const contractNumber = document.getElementById('contractNumber').value;
    const contractDate = document.getElementById('contractDate').value;
    const contractDescription = document.getElementById('contractDescription').value;
    const contractStatus = document.getElementById('contractStatus').value;
    const contractImage = document.getElementById('contractImage').value;

    const card = document.createElement('div');
    card.classList.add('contractCard');
    card.innerHTML = `
        <p>Номер контракта: ${contractNumber}</p>
        <p>Дата заключения контракта: ${contractDate}</p>
        <p>Описание контракта: ${contractDescription}</p>
        <p>Статус контракта: ${contractStatus}</p>
        <img src="${contractImage}" alt="Изображение контракта">
    `;

    const contractList = document.getElementById('contractList');
    contractList.appendChild(card);
}
