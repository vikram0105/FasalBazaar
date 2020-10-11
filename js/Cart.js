$(document).ready(function () { 
    if (sessionStorage.getItem("NumOfCart") != null) {
        $('#spnCartCount').empty();
        $('#spnCartCount').append(sessionStorage.getItem("NumOfCart"));
    }
    fetchDetails();
    $('#login').click(function () {
        $('#loginDiv').css('display', 'block');
        $('#signupDiv').css('display', 'none');
        Clear();
        $('#hdnLogin').trigger('click');
    });

    $('#IdNewUserBtn').click(function () {
        Clear();
        $('#loginDiv').css('display', 'none');
        $('#signupDiv').css('display', 'block');
    });

    $('#btnClear').click(function () {
        Clear();
    });

    $('#LoginBtn').click(function () {
        Validation("Login");
    });

    $('#btnSignup').click(function () {
        Validation("Signup");
    });
});

function fetchDetails() {
    if (sessionStorage.getItem("CartView") != null) {
        var data = JSON.parse(sessionStorage.getItem("CartView"));
        if (data.length > 0) {
            $('#mainBody').empty();
            for (var i = 0; i < data.length; i++) {
                var a = '';
                a += '<div class="w3-card-4 cardStyle"><div class="w3-card-2"><img alt="img" id="comdtyID' + i + '" class="imgComdty" src="' + data[i].Image + '" />';
                a += '</div><div class="comdtyText"><h6 id="textName' + i + '">' + data[i].TextName + '</h6></div><div class="w3-text divtext"><p class="ptext"><span style="font-weight:600;">Price</span> <i class="fa fa-rupee" id="price' + i + '">' + data[i].Price + '</i> Per/Kg</p>';
                a += '<p class="qtext"><span style="font-weight:600;">Quantity</span> <i class="fa fa-balance-scale" id="quant' + i + '">' + data[i].Quantity + '</i>Kg <span>Left</span></p></div><br /><div class="w3-text divtext"><p class="dtext"><span style="font-weight:600;">Quality</span> <span id="quality' + i + '">' + data[i].Quality + '</span></p>';
                a += '<p class="ctext"><span style="font-weight:600;">Contact</span> <i class="fa fa-phone" id="phone' + i + '">' + data[i].Phone + '</i></p></div><br /><div class=""><input type="button" value="Buy" class="w3-btn btnBuy" id="btnBuyId' + i + '" /> <input type="button" data-index="' + i + '" value="Remove" class="w3-btn btnCart" id="btnremoveCartId' + i + '" onclick="removefromCart(this);" /></div></div>';
                $('#mainBody').append(a);
            }
        } else {
            $('#mainBody').empty();
            $('#mainBody').append('<img src="../Images/Empty_Shopping_Cart.jpg" style="width:100%;"/>');
        }
    } else {
        $('#mainBody').empty();
        $('#mainBody').append('<img src="../Images/Empty_Shopping_Cart.jpg" style="width:100%;"/>');
    }
}

function removefromCart(val) {
    var count = 0;
    var id = val.id;
    var index = val.dataset.index;
    var viewData = new Array();
    var data = JSON.parse(sessionStorage.getItem("CartView"));
    for (var i = 0; i < data.length; i++) { viewData.push(data[i]); }  
    if (parseInt(sessionStorage.getItem("NumOfCart")) > 0) {
        count = (parseInt(sessionStorage.getItem("NumOfCart"))) - 1;
    }
    viewData.pop(parseInt(index));
    sessionStorage.removeItem("CartView");
    sessionStorage.setItem("CartView", JSON.stringify(viewData));
    sessionStorage.removeItem("NumOfCart");
    sessionStorage.setItem("NumOfCart",count)
    $('#spnCartCount').empty();
    $('#spnCartCount').append(count);
    fetchDetails();
}

function Validation(val) {
    var errMsg = "Y";

    if (val == "Login") {
        if ($('#txtLoginUserID').val() == "" || $('#txtLoginUserID').val() == undefined) {
            $("#loginUseridErrorMsg").empty();
            errMsg = "N"
            $("#loginUseridErrorMsg").append("<p>*Enter Mobile Number!</p>");
        } else {
            $("#loginUseridErrorMsg").empty();
            errMsg = "Y"
        }

        if (($('#txtLoginPass').val() == "" || $('#txtLoginPass').val() == undefined)) {
            $("#loginPassErrorMsg").empty();
            errMsg = "N"
            $("#loginPassErrorMsg").append("<p>*Enter Password!</p>");
        } else {
            $("#loginPassErrorMsg").empty();
            errMsg = "Y"
        }
    } else if (val == "Signup") {
        if ($('#txtSignName').val() == "" || $('#txtSignName').val() == undefined) {
            $("#signupNameErrorMsg").empty();
            errMsg = "N"
            $("#signupNameErrorMsg").append("<p>*Enter Your Name!</p>");
        } else {
            errMsg = "Y"
            $("#signupNameErrorMsg").empty();
        }

        if (($('#txtSignUserID').val() == "" || $('#txtSignUserID').val() == undefined)) {
            $("#signupMobNumErrorMsg").empty();
            errMsg = "N"
            $("#signupMobNumErrorMsg").append("<p>*Enter Mobile Number!</p>");
        } else {
            errMsg = "Y"
            $("#signupMobNumErrorMsg").empty();
        }

        if (($('#txtSignPass').val() == "" || $('#txtSignPass').val() == undefined)) {
            $("#signupPassErrorMsg").empty();
            errMsg = "N"
            $("#signupPassErrorMsg").append("<p>*Enter Password!</p>");
        } else {
            errMsg = "Y"
            $("#signupPassErrorMsg").empty();
        }

        if (($('#txtSignRePass').val() == "" || $('#txtSignRePass').val() == undefined)) {
            $("#signupRepassErrorMsg").empty();
            errMsg = "N"
            $("#signupRepassErrorMsg").append("<p>*Enter RePassword!</p>");
        } else {
            errMsg = "Y"
            $("#signupRepassErrorMsg").empty();
        }

        if (($('#txtSignPass').val() != "") && ($('#txtSignRePass').val() != "")) {

            if ($('#txtSignPass').val() != $('#txtSignRePass').val()) {
                $("#signupRepassErrorMsg").empty();
                errMsg = "N"
                $("#signupRepassErrorMsg").append("<p>*Password and Repassword not match!</p>");
            } else {
                errMsg = "Y"
                $("#signupRepassErrorMsg").empty();
            }
        }
    }

    if (errMsg == "N") {

    }
}

function Clear() {
    $('#txtLoginUserID').val('');
    $('#txtLoginPass').val('');
    $('#txtSignName').val('');
    $('#txtSignUserID').val('');
    $('#txtSignPass').val('');
    $('#txtSignRePass').val('');
    $("#loginUseridErrorMsg").empty();
    $("#loginPassErrorMsg").empty();
    $("#signupNameErrorMsg").empty();
    $("#signupMobNumErrorMsg").empty();
    $("#signupPassErrorMsg").empty();
    $("#signupRepassErrorMsg").empty();
}

