function task2_1() {
    document.getElementById("form22").style.display = "none";
    document.getElementById("form24").style.display = "none";
    document.getElementById("form25").style.display = "none";
    document.getElementById("form26").style.display = "none";
    document.getElementById("form27").style.display = "none";
    document.getElementById("form29").style.display = "none";
    document.getElementById("form21").style.display = "block";
}
function task2_2() {
    document.getElementById("form21").style.display = "none";
    document.getElementById("form24").style.display = "none";
    document.getElementById("form25").style.display = "none";
    document.getElementById("form26").style.display = "none";
    document.getElementById("form27").style.display = "none";
    document.getElementById("form29").style.display = "none";
    document.getElementById("form22").style.display = "block";
}
function task2_3() {
    let arr = [0, 1, 2, 3, 4];
    document.getElementById("form22").title = arr.length;
}
function task2_4() {
    document.getElementById("form21").style.display = "none";
    document.getElementById("form22").style.display = "none";
    document.getElementById("form25").style.display = "none";
    document.getElementById("form26").style.display = "none";
    document.getElementById("form27").style.display = "none";
    document.getElementById("form29").style.display = "none";
    document.getElementById("form24").style.display = "block";
    document.getElementById("lbl24").innerHTML = "";
    let arr = [0, 1, 2, 3, 5];
    for(let i = 0; i < arr.length; i++){
        document.getElementById("lbl24").innerHTML += arr[i] + " ";
    }
    document.getElementById("form24").title = arr.length;
}
function task2_5() {
    document.getElementById("form22").style.display = "none";
    document.getElementById("form24").style.display = "none";
    document.getElementById("form21").style.display = "none";
    document.getElementById("form26").style.display = "none";
    document.getElementById("form27").style.display = "none";
    document.getElementById("form29").style.display = "none";
    document.getElementById("form25").style.display = "block";
    let array1 = [1,2,3,4,"a","b",5];
    let array2 = [9,8,"q","w","e",7];
    let array3 = array1.concat(array2);
    document.getElementById("lbl25").innerHTML = "[" + array3 + "]";
    document.getElementById("form25").title = array3.length;
}
function task2_6() {
    document.getElementById("form22").style.display = "none";
    document.getElementById("form24").style.display = "none";
    document.getElementById("form21").style.display = "none";
    document.getElementById("form25").style.display = "none";
    document.getElementById("form27").style.display = "none";
    document.getElementById("form29").style.display = "none";
    document.getElementById("form26").style.display = "block";
    let array1 = [1,2,3,4,"a","b",5];
    let array2 = [9,8,"q","w","e",7];
    let array3 = array1.concat(array2); 
    document.getElementById("lbl26").innerHTML = array3.pop();
    document.getElementById("form26").title = array3.length;
    
}
function task2_7() {
    document.getElementById("form22").style.display = "none";
    document.getElementById("form24").style.display = "none";
    document.getElementById("form21").style.display = "none";
    document.getElementById("form25").style.display = "none";
    document.getElementById("form26").style.display = "none";
    document.getElementById("form29").style.display = "none";
    document.getElementById("form27").style.display = "block";
    let array1 = [1,2,3,4,"a","b",5];
    let array2 = [9,8,"q","w","e",7];
    let array3 = array1.concat(array2);
    array3.pop();
    array3.unshift(9); 
    document.getElementById("lbl27").innerHTML = "[" + array3 + "]";
    document.getElementById("form27").title = array3.length;   
}
function task2_8() {
    if(document.getElementById("clock").innerHTML == "") {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let m;
        switch (month) {
            case 0:
                m = "????????????";
                break;
            case 1:
                m = "??????????????";
                break;
            case 2:
                m = "??????????";
                break;
            case 3:
                m = "????????????";
                break;
            case 4:
                m = "??????";
                break;
            case 5:
                m = "????????";
                break;
            case 6:
                m = "????????";
                break;
            case 7:
                m = "??????????????";
                break;
            case 8:
                m = "????????????????";
                break;
            case 9:
                m = "????????????????";
                break;
            case 10:
                m = "????????????";
                break;
            case 11:
                m = "??????????????";
                break;
        }
        let year = date.getFullYear();
        document.getElementById("clock").innerHTML = day + " " + m + " " + year;
    } else {
        document.getElementById("clock").innerHTML = "";
    }
}
function task2_9() {
    document.getElementById("form22").style.display = "none";
    document.getElementById("form24").style.display = "none";
    document.getElementById("form21").style.display = "none";
    document.getElementById("form25").style.display = "none";
    document.getElementById("form26").style.display = "none";
    document.getElementById("form27").style.display = "none";
    document.getElementById("form29").style.display = "block";
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let x = getRandomIntInclusive(0, 50);
    let y = getRandomIntInclusive(0, 50);
    document.getElementById("lbl291").innerHTML = x;
    document.getElementById("lbl292").innerHTML = y;
    document.getElementById("lbl293").innerHTML = x * y;
}