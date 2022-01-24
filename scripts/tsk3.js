function testResult() {
    let plus = 0;
    if (document.getElementById("one").value == "Эверест") {
        plus++;
    }
    if (document.getElementById("two").value == 85) {
        plus++;
    }
    if (document.getElementById("three").value == "Люксенбург") {
        plus++;
    }
    if (document.getElementById("four").value == "Кипр") {
        plus++;
    }
    if (document.getElementById("five").value == 6) {
        plus++;
    }
    if (document.getElementById("six").value == 7) {
        plus++;
    }
    if (document.getElementById("seven").value == "Алжира") {
        plus++;
    }
    if (document.getElementById("eight").value == "Пекин") {
        plus++;
    }
    if (document.getElementById("nine").value == "Индия") {
        plus++;
    }
    if (document.getElementById("ten").value == "Эйяфьядлайёкюдль") {
        plus++;
    }
    if (plus > 4 || plus == 0) {
        alert("Ваш результат " + plus + " баллов из 10.");
    } else if (plus == 1) {
        alert("Ваш результат " + plus + " балл из 10.");
    } else {
        alert("Ваш результат " + plus + " балла из 10.");
    }
}