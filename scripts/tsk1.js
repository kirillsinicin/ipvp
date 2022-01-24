function task1_1() {
    document.getElementById("form3").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("form4").style.display = "none";
    document.getElementById("form1").style.display = "block";
}
function task1_2() {
    let browser = prompt("Укажите свой знак зодиака");
    switch (browser) {
        case 'Овен':
            alert("Вы Овен!");
            break;
        case 'Телец':
            alert("Вы Телец!");
            break;
        case 'Близнецы':
            alert("Вы Близнецы!");
            break;
        case 'Рак':
            alert("Вы Рак!");
            break;
        case 'Лев':
            alert("Вы Лев!");
            break;
        case 'Дева':
            alert("Вы Дева!");
            break;
        case 'Весы':
            alert("Вы Весы!");
            break;
        case 'Скорпион':
            alert("Вы Скорпион!");
            break;
        case null:
            alert("Вы не суеверны?");
            break;
        default:
            alert("Так держать!");
    }
}
function task1_3() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("form4").style.display = "none";
    document.getElementById("form2").style.display = "block";
}
function cycleFor() {
    document.getElementById("lbl1").innerHTML = "";
    for (let i = 1; i <= 40; i++) {
        document.getElementById("lbl1").innerHTML += i + " ";
    }
}
function cycleWhile() {
    document.getElementById("lbl2").innerHTML = "";
    let a = 1;
    while (a <= 40) {
        document.getElementById("lbl2").innerHTML += a + " ";
        a++;
    }
}
function cycleDoWhile() {
    document.getElementById("lbl3").innerHTML = "";
    let a = 1;
    do {
        document.getElementById("lbl3").innerHTML += a + " ";
        a++;
    } while (a <= 40);
}
function task1_4() {
    for (let i = 0; ; i++) {
        alert("создайте вирусную страницу с постоянно повторяющимся сообщением");
    }
}
function task1_5() {
    let numb = prompt("Введите однозначное число больше пяти");
    if (numb == 7) {
        alert("Молодец!");
    } else if (numb == null) {
        alert("Куда?");
        task1_5();
    } else {
        task1_5();
    }
}
function task1_6() {
    document.getElementById("form2").style.display = "none";
    document.getElementById("form1").style.display = "none";
    document.getElementById("form4").style.display = "none";
    document.getElementById("form3").style.display = "block";
    document.getElementById("lbl16").innerHTML = "";
    for (let i = 8; i <= 20; i++) {
        if (i % 2 == 0) {
            document.getElementById("lbl16").innerHTML += i + " ";
        }
    }
}
function task1_7() {
    document.getElementById("form2").style.display = "none";
    document.getElementById("form1").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("form4").style.display = "block";
    document.getElementById("lbl17").innerHTML = "";
    for (let i = 1; i < 8; i++) {
        if (i == 5) {
            i++;
        }
        if (i % 2 == 1) {
            document.getElementById("lbl17").innerHTML += i + " ";
        }
    }
}