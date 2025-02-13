 function openNote() {
    let cover = document.getElementById("cover-page");
    let note = document.getElementById("note-page");

    if (cover && note) {
        cover.style.display = "none"; 
        note.style.display = "block"; 
    } else {
        console.error("Елемент не знайдено");
    }
}

function showPopup(type) {
    let text = "";
    
    if (type === "love") {
        text = 'Кохання - це посміхатися щоразу від згадки один про одного; піклуватися більше, аніж за себе; давати допивати воду навіть коли самому хочеться; вкривати під час сну і тихо цілувати; говорити "кохаю" без причин; просто насолоджуватися один одним.';
    } else if (type === "hugs") {
        text = "Обійми - це ліки від хвороб, які не можуть вилікувати лікарі; це відчуття спокою та безпеки; розуміння істинності всіх почуттів; моральне зцілення душі.";
    } else if (type === "meaning") {
        text = "Сенс життя - ти і твоє кохання до мене.";
    }

    let popup = document.getElementById("popup");
    let popupText = document.getElementById("popup-text");

    if (popup && popupText) {
        popupText.innerText = text;
        popup.style.display = "block";
    }
}

function closePopup() {
    let popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    }
}
