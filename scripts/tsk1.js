function task1_1() {
    document.getElementById("form3").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("form4").style.display = "none";
    document.getElementById("form1").style.display = "block";
}
function variableType() {
    let x = document.getElementById("typeX").value;
    if(x == 1) {
        document.getElementById("lbl").innerHTML = typeof 5 + " - Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.";
    } else if(x == 2) {
        document.getElementById("lbl").innerHTML = typeof "5" + " - В JavaScript любые текстовые данные являются строками. Объект String используется, чтобы представить и конструировать последовательность символов.";
    } else if(x == 3) {
        document.getElementById("lbl").innerHTML = typeof true + " - Булевый тип (boolean) может принимать только два значения: true (истина) и false (ложь). Такой тип, как правило, используется для хранения значений да/нет: true значит «да, правильно», а false значит «нет, не правильно».";
    } else if(x == 4) {
        document.getElementById("lbl").innerHTML = typeof undefined + " - Специальное значение undefined также стоит особняком. Оно формирует тип из самого себя так же, как и null. Оно означает, что «значение не было присвоено». Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined.";
    } else if(x == 5) {
        document.getElementById("lbl").innerHTML = typeof null + " - Специальное значение null не относится ни к одному из типов. Оно формирует отдельный тип, который содержит только значение null. Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно». Результатом вызова typeof null является object. Это официально признанная ошибка в typeof, ведущая начало с времён создания JavaScript и сохранённая для совместимости. Конечно, null не является объектом. Это специальное значение с отдельным типом.";
    } else if(x == 6) {
        document.getElementById("lbl").innerHTML = typeof alert + " - это специальный тип объектов, позволяющий формализовать средствами языка определённую логику поведения и обработки данных. Это фрагмент программного кода (подпрограмма), в большинстве случаев связанный с идентификатором, к которому можно обратиться из другого места программы.";
    } 
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