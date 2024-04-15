const saveData = () => {
    let songTitle = document.querySelector("#songTitle").value;
    let artist = document.querySelector("#artist").value;
    let album = document.querySelector("#album").value;
    let genre = document.querySelector("#genre").value;
    let duration = document.querySelector("#duration").value;

    let storeData = JSON.parse(localStorage.getItem("songs")) || [];

    let songData = {
        songTitle: songTitle,
        artist: artist,
        album: album,
        genre: genre,
        duration: duration
    }

    storeData.push(songData);
    localStorage.setItem("songs", JSON.stringify(storeData));
    getData();
}

const getData = () => {
    let storeData = JSON.parse(localStorage.getItem("songs")) || [];
    let resultData = document.querySelector("#resultData");
    resultData.innerHTML = "";
    if ( storeData && storeData.length > 0 ) {
        storeData.forEach(function(songData, index) {
            resultData.innerHTML += `<li>Название песни: ${songData.songTitle}</li>`;
            resultData.innerHTML += `<li>Исполнитель: ${songData.artist}</li>`;
            resultData.innerHTML += `<li>Альбом: ${songData.album}</li>`;
            resultData.innerHTML += `<li>Жанр: ${songData.genre}</li>`;
            resultData.innerHTML += `<li>Продолжительность: ${songData.duration}</li>`;
            resultData.innerHTML += `<button onclick='deleteData(${index})'>Удалить</button>`;
            resultData.innerHTML += `<hr><br>`;
        });
    } else {
        resultData.innerHTML += "<li>Данные не найдены</li>"
    }
}

const deleteData = (index) => {
    let storeData = JSON.parse(localStorage.getItem("songs")) || [];
    storeData.splice(index, 1);
    localStorage.setItem("songs", JSON.stringify(storeData));
    getData();
}

window.onload = function(){
    getData();
}
