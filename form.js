let checkForm = () => {
    let subMit = 0;
    // Function Check First/Last name
    let checkName = () => {
        let fname = document.getElementById('f-name').value;
        let lname = document.getElementById('l-name').value;
        if (/^[a-zA-Z]([A-Za-z\s]*)[A-Za-z]$/.test(fname) === false || fname.length > 20) {
            document.getElementById('fnam_fail').style.color = "red";
            document.getElementById('fnam_fail').innerHTML = "*";
            return document.getElementById(`f-name`).focus();
        } else {
            document.getElementById('fnam_fail').innerHTML = '';
        }
        if (/^[a-zA-Z]([A-Za-z\s]*)[A-Za-z]$/.test(lname) === false || lname.length > 20) {
            document.getElementById('lnam_fail').style.color = "red";
            document.getElementById('lnam_fail').innerHTML = "*";
            return document.getElementById(`l-name`).focus();
        } else {
            document.getElementById('lnam_fail').innerHTML = '';
        }
        subMit++;
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
            return document.getElementById('check_Birth').innerHTML = "* Ngày tháng năm không hợp lệ."
        } else {
            document.getElementById('check_Birth').innerHTML = "";
        }

        if ((yeAr % 400 === 0) || (yeAr % 4 === 0 && yeAr % 100 != 0)) {
            if (monTh === 2 && daTe >= 30) {
                document.getElementById('check_Birth').style.color = "red";
                document.getElementById('check_Birth').style.fontSize = "13px";
                document.getElementById('check_Birth').style.fontStyle = "italic";
                return document.getElementById('check_Birth').innerHTML = "* Ngày tháng năm không hợp lệ."
            } else {
                document.getElementById('check_Birth').innerHTML = "";
            }
        } else {
            if (monTh === 2 && daTe >= 29) {
                document.getElementById('check_Birth').style.color = "red";
                document.getElementById('check_Birth').style.fontSize = "13px";
                document.getElementById('check_Birth').style.fontStyle = "italic";
                return document.getElementById('check_Birth').innerHTML = "* Ngày tháng năm không hợp lệ."
            } else {
                document.getElementById('check_Birth').innerHTML = "";
            }
        }

        if ((monTh === 4 && daTe >= 31) || (monTh === 6 && daTe >= 31) || (monTh === 9 && daTe >= 31) || (monTh === 11 && daTe >= 31)) {
            document.getElementById('check_Birth').style.color = "red";
            document.getElementById('check_Birth').style.fontSize = "13px";
            document.getElementById('check_Birth').style.fontStyle = "italic";
            return document.getElementById('check_Birth').innerHTML = "* Ngày tháng năm không hợp lệ."
        } else {
            document.getElementById('check_Birth').innerHTML = "";
        }
        subMit++;
    }
    // End Check Date of Birth

    //Function Check Email
    let checkEmail = () => {
        let eMail = document.getElementById("email").value;
        let checkEmail = /^[a-zA-Z0-9]+([a-zA-Z0-9\._-]+[a-zA-Z0-9_-])*@[a-zA-Z0-9_-]+\.[a-zA-Z]{3,6}$|^[a-zA-Z0-9]+([a-zA-Z0-9\._-]+[a-zA-Z0-9_-])*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9]{3,6})+(\.[a-zA-Z0-9]{2,4})$|^[a-zA-Z0-9]+([a-zA-Z0-9\._-]+[a-zA-Z0-9_-])*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9])+(\.[a-zA-Z0-9]{3,6})+(\.[a-zA-Z0-9]{2,4})$/;
        if (checkEmail.test(eMail) === false) {
            document.getElementById('check_email').style.color = "red";
            document.getElementById('check_email').style.fontSize = "13px";
            document.getElementById('check_email').style.fontStyle = "italic";
            document.getElementById('check_email').innerHTML = "* Email không hợp lệ vui lòng kiểm tra lại.";
            return document.getElementById("email").focus();
        } else {
            document.getElementById('check_email').innerHTML = "";
        }
        // Check double "."
        for (let i = 0; i < eMail.length; i++) {
            if (eMail[i] === "." && eMail[i + 1] === ".") {
                document.getElementById('check_email').style.color = "red";
                document.getElementById('check_email').style.fontSize = "13px";
                document.getElementById('check_email').style.fontStyle = "italic";
                document.getElementById('check_email').innerHTML = "* Email không hợp lệ vui lòng kiểm tra lại.";
                return document.getElementById("email").focus();
            } else {
                document.getElementById('check_email').innerHTML = "";
            }
        }
        subMit++;
    }
    // End Check Email


    // Start Check Phone
    let checkPhone = () => {
        let phoNe = document.getElementById('phone').value;
        if (/(^[0]+[0-9]{9})/.test(phoNe) === false) {
            document.getElementById('check_phone').style.color = "red";
            document.getElementById('check_phone').style.fontSize = "13px";
            document.getElementById('check_phone').style.fontStyle = "italic";
            document.getElementById('check_phone').innerHTML = "* Số Diện Thoại không hợp lệ vui lòng kiểm tra lại.";
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
            document.getElementById('check_password').innerHTML = "* Password không hợp lệ vui lòng nhập lại.";
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
            document.getElementById('confirm').innerHTML = "";
        }
        subMit++;
    }
    // End Check PassWord
    checkName()
    checkBirth();
    checkEmail();
    checkPhone();
    checkPassWord();

    if (subMit >= 4) {
        alert("Đăng Ký Thành Công.");
    }
}
document.getElementById('submit').addEventListener('click', checkForm);
