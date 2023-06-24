// Function Check First/Last name
let checkName = () => {
    let fname = document.getElementById('f-name').value;
    let lname = document.getElementById('l-name').value;
    if (/^[a-zA-Z]+[a-zA-Z\s]+[a-zA-Z]$/.test(fname) === false) {
        document.getElementById('check_fname').style.color = "red";
        document.getElementById('check_fname').style.fontSize = "13px";
        document.getElementById('check_fname').style.fontStyle = "italic";
        document.getElementById('check_fname').innerHTML = "* First Name không được chứa số hoặc ký tự đặt biệt, không dấu , không để trống."
        return document.getElementById(`f-name`).focus();
    } else {
        document.getElementById('check_fname').innerHTML = '';
    }
    if (/^[a-zA-Z]+[a-zA-Z\s]+[a-zA-Z]$/.test(lname) === false) {
        document.getElementById('check_lname').style.color = "red";
        document.getElementById('check_lname').style.fontSize = "13px";
        document.getElementById('check_lname').style.fontStyle = "italic";
        document.getElementById('check_lname').innerHTML = "* Last Name không được chứa số hoặc ký tự đặt biệt, không dấu , không để trống."
        return document.getElementById(`l-name`).focus();
    } else {
        document.getElementById('check_lname').innerHTML = '';
    }
}
//End Fuction Check Name

// Function Check Date of Birth
let checkBirth = () => {
    let daTe = parseInt(document.getElementById('date').value);
    let monTh = parseInt(document.getElementById('month').value);
    let yeAr = parseInt(document.getElementById('year').value);
    if (isNaN(daTe) || isNaN(monTh) || isNaN(yeAr)) {
        document.getElementById('check_Birth').style.color = "red";
        document.getElementById('check_Birth').style.fontSize = "13px";
        document.getElementById('check_Birth').style.fontStyle = "italic";
        return document.getElementById('check_Birth').innerHTML = "* Sai dữ liệu vui lòng kiểm tra lại ngày tháng năm."
    } else {
        document.getElementById('check_Birth').innerHTML = "";
    }
    if ((yeAr % 400 === 0) || (yeAr % 4 === 0 && yeAr % 100 != 0)) {
        if (monTh === 2 && daTe >= 30) {
            document.getElementById('check_Birth').style.color = "red";
            document.getElementById('check_Birth').style.fontSize = "13px";
            document.getElementById('check_Birth').style.fontStyle = "italic";
            return document.getElementById('check_Birth').innerHTML = "* Sai dữ liệu vui lòng kiểm tra lại ngày tháng năm."
        } else {
            document.getElementById('check_Birth').innerHTML = "";
        }
    } else {
        if (monTh === 2 && daTe >= 29) {
            document.getElementById('check_Birth').style.color = "red";
            document.getElementById('check_Birth').style.fontSize = "13px";
            document.getElementById('check_Birth').style.fontStyle = "italic";
            return document.getElementById('check_Birth').innerHTML = "* Sai dữ liệu vui lòng kiểm tra lại ngày tháng năm."
        } else {
            document.getElementById('check_Birth').innerHTML = "";
        }
    }
    if ((monTh === 4 && daTe >= 31) || (monTh === 6 && daTe >= 31) || (monTh === 9 && daTe >= 31) || (monTh === 11 && daTe >= 31)) {
        document.getElementById('check_Birth').style.color = "red";
        document.getElementById('check_Birth').style.fontSize = "13px";
        document.getElementById('check_Birth').style.fontStyle = "italic";
        return document.getElementById('check_Birth').innerHTML = "* Sai dữ liệu vui lòng kiểm tra lại ngày tháng năm."
    } else {
        document.getElementById('check_Birth').innerHTML = "";
    }
}
// End Check Date of Birth

//Function Check Email
let checkEmail = () => {
    let eMail = document.getElementById("email").value;
    let checkEmail = /^[a-zA-Z0-9]+([a-zA-Z0-9\._-])*@[a-zA-Z0-9_-]+\.[a-zA-Z]{3,6}$|^[a-zA-Z0-9]+([a-zA-Z0-9\.-_])*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9]{3,6})+(\.[a-zA-Z0-9]{2,4})$/;
    if (checkEmail.test(eMail) === false) {
        document.getElementById('check_email').style.color = "red";
        document.getElementById('check_email').style.fontSize = "13px";
        document.getElementById('check_email').style.fontStyle = "italic";
        document.getElementById('check_email').innerHTML = "* Email nhap không đúng vui lòng kiểm tra lại.";
        return document.getElementById("email").focus();
    } else {
        document.getElementById('check_email').innerHTML = "";
    }
}
// End Check Email


// Start Check Phone
let checkPhone = () => {
    let phoNe = document.getElementById('phone').value;
    if (/(^[0]+[0-9]{9})/.test(phoNe) === false) {
        document.getElementById('check_phone').style.color = "red";
        document.getElementById('check_phone').style.fontSize = "13px";
        document.getElementById('check_phone').style.fontStyle = "italic";
        document.getElementById('check_phone').innerHTML = "* Số Diện Thoại nhập vào không đúng vui lòng nhập lại";
        return document.getElementById("phone").focus();
    } else {
        document.getElementById('check_phone').innerHTML = "";
    }
}
// End Check Phone

//Function Check PassWord and Confirm PassWord
let checkPassWord = () => {
    let passWord = document.getElementById('password').value;
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#\^\$%&\)\(\*-\.><\?@_])[a-zA-Z0-9!#\^\$%&\)\(\*-\.><\?@_]{8,30}$/.test(passWord) === false) {
        document.getElementById('check_password').style.color = "red";
        document.getElementById('check_password').style.fontSize = "13px";
        document.getElementById('check_password').style.fontStyle = "italic";
        document.getElementById('check_password').innerHTML = "* Password  nhập vào không đúng điều kiện vui lòng nhập lại";
        return document.getElementById("password").focus();
    } else {
        document.getElementById('check_password').innerHTML = "";
    }

    let conFirm = document.getElementById("confirm_password").value;
    if (conFirm.includes(passWord) === false) {
        document.getElementById('confirm').style.color = "red";
        document.getElementById('confirm').style.fontSize = "13px";
        document.getElementById('confirm').style.fontStyle = "italic";
        document.getElementById('confirm').innerHTML = "* Password vừa nhập vào không giống nhau";
        return document.getElementById("confirm").focus();
    } else {
        document.getElementById('confirm').innerHTML = ""
    }
}
// End Check PassWord
document.getElementById('submit').addEventListener('click', checkName);
document.getElementById('submit').addEventListener('click', checkBirth);
document.getElementById('submit').addEventListener('click', checkEmail);
document.getElementById('submit').addEventListener('click', checkPhone);
document.getElementById('submit').addEventListener('click', checkPassWord);
console.clear();